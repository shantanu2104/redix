import { useState } from "react";
import { Star } from "lucide-react";

export default function CarCard({ car }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    console.log({
      carId: car._id,
      startDate,
      endDate,
    });
  };

  return (
    <div
      className="rounded-xl shadow-md p-4 flex flex-col gap-4"
      style={{
        backgroundColor: "#FFEDD8",
        border: "1px solid #E7BC91",
      }}
    >
      {/* Car Image */}
      <img
        src={car.imageUrl}
        alt={car.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Car Name + Rating */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" style={{ color: "#6F4518" }}>
          {car.name}
        </h2>

        <div className="flex items-center gap-1">
          <Star size={20} color="#D4A276" fill="#D4A276" />
          <span style={{ color: "#8B5E34" }}>{car.rating}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="text-sm" style={{ color: "#8B5E34" }}>
        <p>
          <strong>₹{car.pricePerDay}</strong> / day
        </p>
        <p>
          <strong>₹{car.pricePerHour}</strong> / hour
        </p>
      </div>

      {/* Availability */}
      <p
        className="text-sm font-semibold"
        style={{
          color: car.isAvailable ? "#6F4518" : "red",
        }}
      >
        {car.isAvailable ? "Available" : "Not Available"}
      </p>

      {/* Date Selection */}
      <div className="flex flex-col gap-2">
        <label className="text-sm" style={{ color: "#6F4518" }}>
          Start Date:
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-3 py-2 rounded-lg border"
          style={{
            borderColor: "#BC8A5F",
            color: "#603808",
          }}
        />

        <label className="text-sm" style={{ color: "#6F4518" }}>
          End Date:
        </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-3 py-2 rounded-lg border"
          style={{
            borderColor: "#BC8A5F",
            color: "#603808",
          }}
        />
      </div>

      {/* Book Button */}
      <button
        onClick={handleBooking}
        className="mt-2 py-2 rounded-lg font-semibold hover:scale-105 transition"
        style={{
          backgroundColor: "#D4A276",
          color: "#603808",
        }}
      >
        Book Now
      </button>
    </div>
  );
}
