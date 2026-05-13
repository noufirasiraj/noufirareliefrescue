// src/pages/Login.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password }
      );

      // Save token
      localStorage.setItem("token", res.data.token);

      const { role, isApproved } = res.data.user;

      // Role-based redirect
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "donor") {
        navigate("/donor/dashboard");
      } else if (role === "ngo") {
        if (!isApproved) {
          alert("Your NGO account is pending admin approval");
        } else {
          navigate("/ngo/dashboard");
        }
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1528459105426-b9548367069b')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div
        className="p-4 shadow rounded position-relative"
        style={{
          maxWidth: "420px",
          width: "100%",
          backgroundColor: "rgba(246, 239, 230, 0.95)"
        }}
      >
        <Link
          to="/"
          className="text-decoration-none fw-bold"
          style={{
            color: "#4b2e2b",
            position: "absolute",
            top: "15px",
            left: "15px"
          }}
        >
          ← Back to Home
        </Link>

        <h3 className="text-center mb-3 fw-bold mt-4" style={{ color: "#4b2e2b" }}>
          Login
        </h3>

        <p className="text-center text-muted mb-4">
          Welcome back! Please login to your account
        </p>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn w-100 text-light mb-3"
          style={{ backgroundColor: "#4b2e2b" }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mb-0">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="fw-bold text-decoration-none"
            style={{ color: "#4b2e2b" }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
