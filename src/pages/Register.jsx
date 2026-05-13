// src/pages/Register.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { role, name, email, password, confirmPassword } = formData;

    if (!role || !name || !email || !password || !confirmPassword) {
      return setError("All fields are required");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);

    try {
      const res = await fetch("https://reliefrescue-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          role,
          name,
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert(
        role === "ngo"
          ? "NGO registered successfully! Waiting for admin approval."
          : "Registration successful! Please login."
      );

      navigate("/login");
    } catch (err) {
      setError(err.message);
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
        {/* Back */}
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
          Register
        </h3>

        <p className="text-center text-muted mb-4">
          Create an account to start making a difference
        </p>

        {error && <div className="alert alert-danger py-2">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Role */}
          <select
            className="form-select mb-3"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select role</option>
            <option value="donor">Donor</option>
            <option value="ngo">NGO</option>
          </select>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full name"
            name="name"
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email address"
            name="email"
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn w-100 text-light mb-3"
            style={{ backgroundColor: "#4b2e2b" }}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center mb-0">
          Already have an account?{" "}
          <Link
            to="/login"
            className="fw-bold text-decoration-none"
            style={{ color: "#4b2e2b" }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
