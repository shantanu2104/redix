import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section
      className="w-full min-h-screen px-8 md:px-20 py-12 flex flex-col gap-10"
      style={{ backgroundColor: "#FFEDD8" }} // light background
    >
      <h1
        className="text-4xl md:text-5xl font-extrabold"
        style={{ color: "#6F4518" }} // dark brown
      >
        About Us
      </h1>

      <p
        className="text-lg md:text-xl leading-relaxed"
        style={{ color: "#8B5E34" }}
      >
        Welcome to Ridex! We are dedicated to providing the best car rental
        experience for all our customers. Whether you’re planning a road trip,
        a business meeting, or a special occasion, we have the perfect car for
        your journey.
      </p>

      <p
        className="text-lg md:text-xl leading-relaxed"
        style={{ color: "#8B5E34" }}
      >
        Our fleet includes premium, luxury, and budget-friendly vehicles, all
        maintained to the highest standards. With our user-friendly booking
        platform, transparent pricing, and excellent customer service, your
        ride is just a click away.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
        to='/viewcars'
          className="px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          style={{ backgroundColor: "#D4A276", color: "#603808" }}
        >
          Explore Cars
        </Link>
        <Link
        to='/contact'
          className="px-6 py-3 rounded-xl font-semibold border hover:scale-105 transition"
          style={{
            backgroundColor: "#F3D5B5",
            borderColor: "#BC8A5F",
            color: "#6F4518",
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
