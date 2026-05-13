// src/components/admin/AdminHeader.jsx
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#4b2e2b" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/admin/dashboard">
          Relief Rescue – Admin
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/ngos">
                Manage NGOs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin/donations">
                Donations
              </Link>
            </li>

            {/* ✅ NEW: View Donors */}
            <li className="nav-item">
              <Link className="nav-link" to="/admin/donors">
                Donors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
