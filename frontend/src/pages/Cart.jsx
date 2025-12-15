import { useCart } from "../context/CartContext";
import { useEffect } from "react";

export default function Cart() {
  const colors = {
    sage: "#ccd5ae",
    beige: "#e9edc9",
    cornsilk: "#fefae0",
    whip: "#faedcd",
    bronze: "#d4a373",
  };

  const { cart, removeFromCart, getCart, loading } = useCart();

  // Fetch cart items when component mounts
  useEffect(() => {
    getCart();
  }, []);

  // Calculate total price per day
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.car.pricePerDay || 0) * item.qty,
    0
  );

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: colors.sage }}>
      <div
        className="max-w-3xl mx-auto p-6 rounded-2xl shadow-lg"
        style={{ backgroundColor: colors.cornsilk }}
      >
        <h1 className="text-3xl font-bold mb-4" style={{ color: colors.bronze }}>
          Your Cart
        </h1>

        {loading ? (
          <p style={{ color: colors.bronze }}>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p style={{ color: colors.bronze }}>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.car._id}
                className="p-4 mb-4 rounded-xl shadow flex justify-between items-center"
                style={{ backgroundColor: colors.whip }}
              >
                <div>
                  <h2 className="text-xl font-semibold" style={{ color: colors.bronze }}>
                    {item.car.name}
                  </h2>
                  <p style={{ color: colors.bronze }}>Vendor: {item.car.vendor || "XYZ Rentals"}</p>
                  <p style={{ color: colors.bronze }}>Qty: {item.qty}</p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold" style={{ color: colors.bronze }}>
                    ₹{(item.car.pricePerDay || 0) * item.qty} / day
                  </p>
                  <button
                    onClick={() => removeFromCart(item.car._id)}
                    className="mt-2 px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: colors.bronze }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Checkout Section */}
            <div className="text-right mt-6">
              <p className="text-xl font-semibold mb-2" style={{ color: colors.bronze }}>
                Total: ₹{totalPrice}
              </p>
              <button
                className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
                style={{ backgroundColor: colors.bronze }}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
