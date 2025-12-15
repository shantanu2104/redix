import { useState } from "react";
import { Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Card({ car: newCar }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { addToCart, cart,  decreaseQty } = useCart();

  // Find if newCar is already in cart
  const cartItem = cart.find((item) => item.car._id === newCar._id);
  const qty = cartItem ? cartItem.qty : 0;

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start >= end) {
    alert("End date must be after start date.");
    return;
  }
    console.log({
      carId: newCar._id,
      startDate,
      endDate,
    });
  };

  return (
    <div
      className="rounded-xl shadow-md p-4 flex flex-col gap-4"
      style={{ backgroundColor: "#FFEDD8", border: "1px solid #E7BC91" }}
    >
      <img
        src={newCar.imageUrl}
        alt={newCar.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" style={{ color: "#6F4518" }}>
          {newCar.name}
        </h2>
        <div className="flex items-center gap-1">
          <Star size={20} color="gold" fill="#D4A276" />
          <span style={{ color: "#8B5E34" }}>{newCar.rating}</span>
        </div>
      </div>

      <div className="text-sm" style={{ color: "#8B5E34" }}>
        <p>
          <strong>₹{newCar.pricePerDay}</strong> / day
        </p>
        <p>
          <strong>₹{newCar.pricePerHour}</strong> / hour
        </p>
      </div>

      <p
        className="text-sm font-semibold"
        style={{ color: newCar.isAvailable ? "#6F4518" : "red" }}
      >
        {newCar.isAvailable ? "Available" : "Not Available"}
      </p>

      <div className="flex flex-col gap-2">
        <label className="text-sm" style={{ color: "#6F4518" }}>
          Start Date:
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-3 py-2 rounded-lg border"
          style={{ borderColor: "#BC8A5F", color: "#603808" }}
        />

        <label className="text-sm" style={{ color: "#6F4518" }}>
          End Date:
        </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-3 py-2 rounded-lg border"
          style={{ borderColor: "#BC8A5F", color: "#603808" }}
        />
      </div>

      <button
        onClick={handleBooking}
        className="mt-2 py-2 rounded-lg font-semibold hover:scale-105 transition"
        style={{ backgroundColor: "#D4A276", color: "#603808" }}
      >
        Book Now
      </button>

      {/* Quantity Buttons */}
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={() => decreaseQty(newCar._id)}
          className="px-4 py-2 rounded-lg font-bold"
          style={{
            backgroundColor: "#E7BC91",
            color: "#603808",
            opacity: qty > 0 ? 1 : 0.4,
          }}
          disabled={qty === 0}
        >
          -
        </button>

        <span className="font-bold text-lg" style={{ color: "#6F4518" }}>
          {qty}
        </span>

        <button
          onClick={() => addToCart(newCar._id)}
          className="px-4 py-2 rounded-lg font-bold"
          style={{ backgroundColor: "#BC8A5F", color: "white" }}
        >
          +
        </button>
      </div>
    </div>
  );
}
