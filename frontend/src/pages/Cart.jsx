import React from "react";

export default function Cart() {
  const colors = {
    sage: "#ccd5ae",
    beige: "#e9edc9",
    cornsilk: "#fefae0",
    whip: "#faedcd",
    bronze: "#d4a373",
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: colors.sage }}>
      <div className="max-w-3xl mx-auto p-6 rounded-2xl shadow-lg" style={{ backgroundColor: colors.cornsilk }}>
        <h1 className="text-3xl font-bold mb-4" style={{ color: colors.bronze }}>
          Your Cart
        </h1>

        {/* Example Cart Item */}
        <div
          className="p-4 mb-4 rounded-xl shadow"
          style={{ backgroundColor: colors.whip }}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold" style={{ color: colors.bronze }}>
                Car Name
              </h2>
              <p style={{ color: colors.beige }}>Vendor: XYZ Rentals</p>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold" style={{ color: colors.bronze }}>
                ₹1500 / day
              </p>
              <button
                className="mt-2 px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: colors.bronze }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="text-right mt-6">
          <button
            className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg"
            style={{ backgroundColor: colors.bronze }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}