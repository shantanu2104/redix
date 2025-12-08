import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center px-8 md:px-20 py-10 overflow-hidden"
      style={{ backgroundColor: "#FFEDD8" }} // light background
    >
      {/* Background Car Image */}
      <img
        src="https://images.unsplash.com/photo-1628519592419-bf288f08cef5?q=80&w=1974&auto=format&fit=crop"
        alt="Car Background"
        className="absolute right-0 bottom-0 w-[120%] md:w-[65%] opacity-40 md:opacity-70 object-contain pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />

      {/* Content in front (text + buttons) */}
      <div
        className="relative z-20 max-w-xl flex flex-col gap-6"
        style={{ color: "#6F4518" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Rent A Car With{" "}
          <span style={{ color: "#BC8A5F" }}>Premium Comfort</span>
        </h1>

        <p className="text-lg md:text-xl" style={{ color: "#8B5E34" }}>
          Choose from our wide range of luxury and budget-friendly cars. Your
          journey begins with comfort, elegance, and trust.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-4">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            style={{ backgroundColor: "#D4A276", color: "#603808" }}
          >
            SignUp
          </Link>

          <Link
            to="/viewcars"
            className="px-6 py-3 rounded-xl font-semibold border hover:scale-105 transition"
            style={{
              backgroundColor: "#F3D5B5",
              borderColor: "#BC8A5F",
              color: "#6F4518",
            }}
          >
            View Cars
          </Link>
        </div>
      </div>

      {/* Gradient overlay for better text visibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,237,216,1) 35%, rgba(255,237,216,0.2))",
          zIndex: 5,
        }}
      ></div>
    </section>
  );
}
