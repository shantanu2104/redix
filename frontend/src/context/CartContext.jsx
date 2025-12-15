import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const getToken = () => localStorage.getItem("token");

  const getCart = async () => {
    const token = getToken();
    if (!token) return setCart([]);

    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/cart/mycart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) setCart(res.data.cart?.items || []);
      else setCart([]);
    } catch (err) {
      console.error("Error fetching cart:", err.response?.data || err.message);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

const decreaseQty = async (carId) => {
  const token = getToken();
  if (!token) return alert("Please login first.");

  try {
    const res = await axios.post(
      "http://localhost:5000/api/cart/decrease",
      { carId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (res.data.success) getCart();
    else alert(res.data.message);
  } catch (err) {
    console.error("Error decreasing quantity:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Failed to decrease quantity");
  }
};


  const addToCart = async (carId) => {
    const token = getToken();
    if (!token) return alert("Please login first.");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/cart/add",
        { carId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) getCart();
      else alert(res.data.message);
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to add to cart");
    }
  };

  const removeFromCart = async (carId) => {
    const token = getToken();
    if (!token) return alert("Please login first.");

    try {
      const res = await axios.delete(
        `http://localhost:5000/api/cart/remove/${carId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) getCart();
      else alert(res.data.message);
    } catch (err) {
      console.error("Error removing from cart:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to remove from cart");
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, loading, addToCart, removeFromCart, getCart,decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
}
