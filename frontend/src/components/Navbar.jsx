import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const isLoggedIn = false;

  return (
    <nav
      className="px-6 py-3 shadow-lg"
      style={{ backgroundColor: "#603808" }} // darkest shade
    >
      <div className="flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain rounded-lg"
          />
          <h1
            className="text-2xl font-bold"
            style={{ color: "#FFEDD8" }} // lightest shade
          >
            Ridex
          </h1>
        </div>

        {/* Menu (NO MAP USED) */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <Link
            to="/"
            className="hover:underline"
            style={{ color: "#F3D5B5" }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:underline"
            style={{ color: "#F3D5B5" }}
          >
            About
          </Link>

          <Link
            to="/viewcars"
            className="hover:underline"
            style={{ color: "#F3D5B5" }}
          >
            View Cars
          </Link>

          <Link
            to="/contact"
            className="hover:underline"
            style={{ color: "#F3D5B5" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Search + Login */}
        <div className="flex items-center gap-4">

          <input
            type="text"
            placeholder="Search cars..."
            className="px-3 py-1 rounded-md text-sm w-32 sm:w-48"
            style={{
              backgroundColor: "#E7BC91",
              color: "#603808",
            }}
          />

          {isLoggedIn ? (
            <button
              className="px-4 py-1 rounded-lg font-medium"
              style={{ backgroundColor: "#A47148", color: "white" }}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1 rounded-lg font-medium"
              style={{ backgroundColor: "#D4A276", color: "#603808" }}
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}
