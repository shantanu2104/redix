import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (!data.success) {
    setError(data.message);
    return;
  }

  navigate("/login"); // success
};

  return (
    <div className="auth-page">
      <style>
        {`
          .auth-page {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #e9edc9; 
            font-family: 'Inter', sans-serif;
          }

          .auth-card {
            width: 350px;
            padding: 25px;
            border-radius: 20px;
            background: #fefae0;
            box-shadow: 0px 4px 20px rgba(0,0,0,0.15);
            text-align: center;
          }

          .auth-title {
            font-size: 26px;
            margin-bottom: 10px;
            color: #d4a373;
            font-weight: 700;
          }

          .auth-input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border-radius: 12px;
            border: 2px solid #ccd5ae;
            background: #faedcd;
            font-size: 15px;
            outline: none;
          }

          .auth-input:focus {
            border-color: #d4a373;
          }

          .auth-btn {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 12px;
            background: #d4a373;
            color: white;
            font-size: 17px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 10px;
          }

          .auth-btn:hover {
            background: #b77e4f;
          }

          .auth-switch {
            margin-top: 20px;
            font-size: 14px;
            color: #666;
          }

          .auth-link {
            color: #d4a373;
            font-weight: 600;
            cursor: pointer;
          }
        `}
      </style>

      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Your Gmail (must end with @gmail.com)"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="auth-btn" type="submit">Signup</button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
