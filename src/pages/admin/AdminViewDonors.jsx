// src/pages/admin/AdminViewDonors.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminFooter from "../../components/admin/AdminFooter";

const AdminViewDonors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchDonors = async () => {
    try {
      const res = await axios.get(
        "https://reliefrescue-backend.onrender.com/api/admin/donors",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setDonors(res.data);
    } catch (error) {
      alert("Failed to load donors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <>
      <AdminHeader />

      {/* Page Intro */}
      <div
        className="py-5 text-center text-light"
        style={{ backgroundColor: "#4b2e2b" }}
      >
        <div className="container">
          <span className="badge bg-light text-dark px-3 py-2 mb-3">
            Admin Panel
          </span>
          <h2 className="fw-bold mb-2">Registered Donors</h2>
          <p className="fs-5 mb-0">
            View all donors and their donation activity
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* Donor Table */}
        <div className="card border-0 shadow-lg">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-bordered align-middle mb-0">
                <thead
                  className="text-light"
                  style={{ backgroundColor: "#4b2e2b" }}
                >
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Total Donations</th>
                    <th>Pending</th>
                    <th>Assigned</th>
                    <th>Completed</th>
                  </tr>
                </thead>

                <tbody style={{ backgroundColor: "#f6efe6" }}>
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="text-center">
                        Loading donors...
                      </td>
                    </tr>
                  ) : donors.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center">
                        No donors found
                      </td>
                    </tr>
                  ) : (
                    donors.map((donor, index) => (
                      <tr key={donor._id}>
                        <td>{index + 1}</td>
                        <td>{donor.name}</td>
                        <td>{donor.email}</td>
                        <td>
                          <span className="badge bg-dark">
                            {donor.totalDonations}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-warning text-dark">
                            {donor.pending}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-info text-dark">
                            {donor.assigned}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-success">
                            {donor.completed}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>

              </table>
            </div>
          </div>
        </div>

        {/* Info */}
        <div
          className="mt-4 p-4 rounded shadow-sm"
          style={{ backgroundColor: "#f6efe6" }}
        >
          <p className="mb-0 text-muted">
            This page is view-only. Admins can monitor donor activity
            but cannot modify donor accounts.
          </p>
        </div>
      </div>

      <AdminFooter />
    </>
  );
};

export default AdminViewDonors;
