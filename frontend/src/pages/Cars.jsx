import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.log("Error fetching cars:", err));
  }, []);

  return (
    <div className="min-h-screen px-6 md:px-16 py-10" style={{ backgroundColor: "#FFEDD8" }}>
      <h1 className="text-3xl font-bold mb-6" style={{ color: "#6F4518" }}>
        Available Cars
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}
