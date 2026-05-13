// src/pages/ngo/NGODashboard.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NGOHeader from "../../components/ngo/NGOHeader";
import NGOFooter from "../../components/ngo/NGOFooter";

const NGODashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // 🔹 TEMP DATA (replace with API later)
    const mockDonations = [
      { id: 1, item: "Rice Packets", category: "Food", status: "accepted" },
      { id: 2, item: "Blankets", category: "Clothes", status: "available" },
      { id: 3, item: "School Books", category: "Books", status: "completed" },
      { id: 4, item: "Vegetables", category: "Food", status: "available" },
      { id: 5, item: "Bedsheets", category: "Clothes", status: "accepted" }
    ];

    setDonations(mockDonations);
  }, []);

  // 📊 Stats calculations
  const availableCount = donations.filter(d => d.status === "available").length;
  const acceptedCount = donations.filter(d => d.status === "accepted").length;
  const completedCount = donations.filter(d => d.status === "completed").length;

  return (
    <>
      <NGOHeader />

      {/* Hero Section */}
      <div
        className="py-5 text-light text-center"
        style={{
          background: "linear-gradient(135deg, #4b2e2b, #6f4e37)"
        }}
      >
        <div className="container">
          <span className="badge bg-light text-dark px-3 py-2 mb-3">
            NGO Panel
          </span>
          <h1 className="fw-bold mb-2">Welcome to Your Dashboard</h1>
          <p className="fs-5 mb-0">
            Manage donations, coordinate pickups, and support communities
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* Stats Section */}
        <div className="row text-center mt-n5">
          {[
            {
              title: "Available Donations",
              value: availableCount,
              note: "Ready to accept"
            },
            {
              title: "Accepted Donations",
              value: acceptedCount,
              note: "Pickup in progress"
            },
            {
              title: "Completed Deliveries",
              value: completedCount,
              note: "Successfully distributed"
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
                  <h1 className="fw-bold mb-1" style={{ color: "#4b2e2b" }}>
                    {item.value}
                  </h1>
                  <p className="text-muted mb-0">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h4 className="fw-bold mt-5 mb-4" style={{ color: "#4b2e2b" }}>
          Quick Actions
        </h4>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div
              className="p-4 rounded shadow-sm h-100"
              style={{ backgroundColor: "#f6efe6" }}
            >
              <h5 className="fw-bold">Browse Available Donations</h5>
              <p className="text-muted">
                View donations shared by donors and accept items your
                organization needs.
              </p>
              <Link
                to="/ngo/available-donations"
                className="btn text-light"
                style={{ backgroundColor: "#4b2e2b" }}
              >
                View Available Donations
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="p-4 rounded shadow-sm h-100"
              style={{ backgroundColor: "#f6efe6" }}
            >
              <h5 className="fw-bold">Track Accepted Donations</h5>
              <p className="text-muted">
                Update pickup status and mark donations as completed.
              </p>
              <Link
                to="/ngo/accepted-donations"
                className="btn btn-outline-dark"
              >
                Track Donations
              </Link>
            </div>
          </div>
        </div>

        {/* Needs Attention */}
        <div
          className="mt-5 p-4 rounded shadow-sm"
          style={{ backgroundColor: "#f6efe6" }}
        >
          <h5 className="fw-bold mb-3">Needs Your Attention</h5>
          <ul className="mb-0 text-muted">
            <li>{acceptedCount} donations waiting for pickup scheduling</li>
            <li>{availableCount} new donations available</li>
          </ul>
        </div>

        {/* Recent Activity */}
        <h4 className="fw-bold mt-5 mb-3" style={{ color: "#4b2e2b" }}>
          Recent Activity
        </h4>

        <div className="table-responsive shadow-sm rounded">
          <table className="table table-bordered align-middle mb-0">
            <thead
              className="text-light"
              style={{ backgroundColor: "#4b2e2b" }}
            >
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody style={{ backgroundColor: "#f6efe6" }}>
              {donations.slice(0, 5).map((donation, index) => (
                <tr key={donation.id}>
                  <td>{index + 1}</td>
                  <td>{donation.item}</td>
                  <td>{donation.category}</td>
                  <td>
                    <span
                      className={`badge ${
                        donation.status === "completed"
                          ? "bg-success"
                          : donation.status === "accepted"
                          ? "bg-warning text-dark"
                          : "bg-info text-dark"
                      }`}
                    >
                      {donation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Impact */}
        <div
          className="mt-5 p-4 text-center rounded shadow-sm"
          style={{ backgroundColor: "#f6efe6" }}
        >
          <h5 className="fw-bold mb-2">Your Impact 🌱</h5>
          <p className="text-muted mb-0">
            Your organization has helped distribute essential items to over{" "}
            <strong>{completedCount * 10}+ people</strong>.
          </p>
        </div>
      </div>

      <NGOFooter />
    </>
  );
};

export default NGODashboard;
