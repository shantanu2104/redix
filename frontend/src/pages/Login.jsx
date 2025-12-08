import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setLoggedin } = useContext(AuthContext); // 🔥 IMPORT FROM CONTEXT

  const [form, setForm] = useState({
    account: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    alert("Login successful");

    // 🔥 Save token + user
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // 🔥 Update global login state (Navbar updates instantly)
    setLoggedin(true);

    navigate("/");
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
        <h2 className="auth-title">Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text"
            name="account"
            placeholder="Gmail"
            value={form.account}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="auth-btn" type="submit">Login</button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/signup")}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
