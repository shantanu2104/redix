export default function ContactUs() {
  return (
    <section
      className="w-full min-h-screen px-8 md:px-20 py-12 flex flex-col gap-10"
      style={{ backgroundColor: "#FFEDD8" }} // light background
    >
      <h1
        className="text-4xl md:text-5xl font-extrabold"
        style={{ color: "#6F4518" }}
      >
        Contact Us
      </h1>

      <p className="text-lg md:text-xl" style={{ color: "#8B5E34" }}>
        Have questions, feedback, or special requests? We'd love to hear from you.
        Reach out to us through any of the methods below.
      </p>

      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Contact Info */}
        <div className="flex flex-col gap-4 max-w-md">
          <div style={{ color: "#8B5E34" }}>
            <strong>Address:</strong> 123 Main Street, City, Country
          </div>
          <div style={{ color: "#8B5E34" }}>
            <strong>Email:</strong> support@ridex.com
          </div>
          <div style={{ color: "#8B5E34" }}>
            <strong>Phone:</strong> +123 456 7890
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded-md"
            style={{ backgroundColor: "#F3D5B5", color: "#603808" }}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-md"
            style={{ backgroundColor: "#F3D5B5", color: "#603808" }}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-2 rounded-md"
            style={{ backgroundColor: "#F3D5B5", color: "#603808" }}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            style={{ backgroundColor: "#D4A276", color: "#603808" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
