import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Cart from "../models/Cart.js";

const router = express.Router();

// Add car to cart
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { carId } = req.body;
    const userId = req.user._id;

    let cart = await Cart.findOne({ user: userId });

    // If cart does not exist → create one
    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [{ car: carId, qty: 1 }]
      });
      return res.json({ success: true, message: "Added to cart", cart });
    }

    // If item already exists → increase qty
    const itemIndex = cart.items.findIndex(i => i.car.toString() === carId);
    if (itemIndex >= 0) {
      cart.items[itemIndex].qty += 1;
    } else {
      cart.items.push({ car: carId, qty: 1 });
    }

    await cart.save();
    res.json({ success: true, message: "Added to cart", cart });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Decrease quantity by 1
router.post("/decrease", authMiddleware, async (req, res) => {
  try {
    const { carId } = req.body;
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.json({ success: false, message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (i) => i.car.toString() === carId
    );

    if (itemIndex === -1) {
      return res.json({ success: false, message: "Item not found in cart" });
    }

    // Decrease qty
    cart.items[itemIndex].qty -= 1;

    // If qty becomes 0 → remove the item
    if (cart.items[itemIndex].qty <= 0) {
      cart.items.splice(itemIndex, 1);
    }

    await cart.save();

    res.json({ success: true, message: "Quantity decreased", cart });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get user's cart
router.get("/mycart", authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.car");
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Remove an item
router.delete("/remove/:carId", authMiddleware, async (req, res) => {
  try {
    const { carId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });

    cart.items = cart.items.filter(item => item.car.toString() !== carId);
    await cart.save();

    res.json({ success: true, message: "Removed from cart", cart });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Clear cart
router.delete("/clear", authMiddleware, async (req, res) => {
  await Cart.findOneAndDelete({ user: req.user._id });
  res.json({ success: true, message: "Cart cleared" });
});

export default router;
