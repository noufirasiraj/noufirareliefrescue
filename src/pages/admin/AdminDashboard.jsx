// src/pages/admin/AdminDashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminFooter from "../../components/admin/AdminFooter";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setStats(res.data);
      } catch (error) {
        console.error("Failed to load dashboard stats");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, [token]);

  return (
    <>
      <AdminHeader />

      {/* Hero Section */}
      <div
        className="py-5 text-light text-center"
        style={{
          background: "linear-gradient(135deg, #4b2e2b, #6f4e37)"
        }}
      >
        <div className="container">
          <span className="badge bg-light text-dark px-3 py-2 mb-3">
            Admin Panel
          </span>
          <h1 className="fw-bold mb-2">System Overview</h1>
          <p className="fs-5 mb-0">
            Monitor users, NGOs, and donation flow across the platform
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* Stats */}
        <div className="row text-center mt-n5">
          {[
            {
              title: "Total Users",
              value: stats?.totalUsers || 0,
              note: "Donors + NGOs + Admins"
            },
            {
              title: "Registered NGOs",
              value: stats?.totalNGOs || 0,
              note: "Verified & pending"
            },
            {
              title: "Total Donations",
              value: stats?.totalDonations || 0,
              note: "All-time donations"
            }
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card border-0 shadow-lg h-100"
                style={{ backgroundColor: "#f6efe6" }}
              >
                <div className="card-body py-4">
                  <h6 className="text-uppercase text-muted mb-1">
                    {item.title}
                  </h6>
                  <h1
                    className="fw-bold mb-1"
                    style={{ color: "#4b2e2b" }}
                  >
                    {loading ? "—" : item.value}
                  </h1>
                  <p className="text-muted mb-0">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h4 className="fw-bold mt-5 mb-4" style={{ color: "#4b2e2b" }}>
          Admin Actions
        </h4>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div
              className="p-4 rounded shadow-sm h-100"
              style={{ backgroundColor: "#f6efe6" }}
            >
              <h5 className="fw-bold">Manage NGOs</h5>
              <p className="text-muted">
                Review NGO registrations, approve or reject requests,
                and manage verification status.
              </p>
              <Link
                to="/admin/ngos"
                className="btn text-light"
                style={{ backgroundColor: "#4b2e2b" }}
              >
                Go to NGO Management
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="p-4 rounded shadow-sm h-100"
              style={{ backgroundColor: "#f6efe6" }}
            >
              <h5 className="fw-bold">Manage Donations</h5>
              <p className="text-muted">
                Monitor donation flow, detect delays, and ensure
                fair distribution.
              </p>
              <Link
                to="/admin/donations"
                className="btn btn-outline-dark"
              >
                View Donations
              </Link>
            </div>
          </div>
        </div>

        {/* Needs Attention */}
        <div
          className="mt-5 p-4 rounded shadow-sm"
          style={{ backgroundColor: "#f6efe6" }}
        >
          <h5 className="fw-bold mb-3">Needs Attention ⚠️</h5>
          <ul className="mb-0 text-muted">
            <li>
              {stats?.pendingNGOs || 0} NGO registrations pending approval
            </li>
            <li>
              {stats?.pendingDonations || 0} donations pending NGO assignment
            </li>
          </ul>
        </div>

        {/* Impact */}
        <div
          className="mt-5 p-4 text-center rounded shadow-sm"
          style={{ backgroundColor: "#f6efe6" }}
        >
          <h5 className="fw-bold mb-2">Platform Impact 📊</h5>
          <p className="text-muted mb-0">
            Relief Rescue is actively coordinating donations across
            multiple communities and NGOs.
          </p>
        </div>
      </div>

      <AdminFooter />
    </>
  );
};

export default AdminDashboard;
