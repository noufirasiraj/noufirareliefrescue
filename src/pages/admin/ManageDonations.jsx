// src/pages/admin/ManageDonations.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminFooter from "../../components/admin/AdminFooter";

const ManageDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchDonations = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/admin/donations",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setDonations(res.data);
    } catch (error) {
      alert("Failed to load donations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  // 📊 Summary counts
  const pendingCount = donations.filter(d => d.status === "pending").length;
  const assignedCount = donations.filter(d => d.status === "assigned").length;
  const completedCount = donations.filter(d => d.status === "completed").length;

  const renderStatus = (status) => {
    if (status === "pending") {
      return <span className="badge bg-warning text-dark">Pending</span>;
    }
    if (status === "assigned") {
      return <span className="badge bg-info text-dark">Assigned</span>;
    }
    return <span className="badge bg-success">Completed</span>;
  };

  return (
    <>
      <AdminHeader />

      {/* Page Intro */}
      <div className="py-5 text-center text-light" style={{ backgroundColor: "#4b2e2b" }}>
        <div className="container">
          <span className="badge bg-light text-dark px-3 py-2 mb-3">
            Admin Panel
          </span>
          <h2 className="fw-bold mb-2">Donation Management</h2>
          <p className="fs-5 mb-0">
            Monitor, assign, and track donations across the platform
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* Summary Cards */}
        <div className="row text-center mb-5">
          {[
            { label: "Pending Donations", value: pendingCount },
            { label: "Assigned Donations", value: assignedCount },
            { label: "Completed Donations", value: completedCount }
          ].map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card border-0 shadow h-100" style={{ backgroundColor: "#f6efe6" }}>
                <div className="card-body">
                  <h6 className="text-muted">{item.label}</h6>
                  <h2 className="fw-bold" style={{ color: "#4b2e2b" }}>
                    {item.value}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Donations Table */}
        <div className="card border-0 shadow-lg">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle mb-0">
                <thead className="text-light" style={{ backgroundColor: "#4b2e2b" }}>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Donor</th>
                    <th>NGO</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody style={{ backgroundColor: "#f6efe6" }}>
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="text-center">Loading...</td>
                    </tr>
                  ) : donations.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center">No donations found</td>
                    </tr>
                  ) : (
                    donations.map((d, index) => (
                      <tr key={d._id}>
                        <td>{index + 1}</td>
                        <td>{d.itemName}</td>
                        <td>{d.category}</td>
                        <td>{d.donor?.name || "N/A"}</td>
                        <td>{d.assignedNGO?.name || "—"}</td>
                        <td>{renderStatus(d.status)}</td>
                        <td className="text-center">
                          {d.status === "pending" ? (
                            <button className="btn btn-success btn-sm">
                              Assign NGO
                            </button>
                          ) : (
                            <button className="btn btn-secondary btn-sm" disabled>
                              {d.status === "completed" ? "Completed" : "Assigned"}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>

              </table>
            </div>
          </div>
        </div>

        {/* Admin Notes */}
        <div className="mt-4 p-4 rounded shadow-sm" style={{ backgroundColor: "#f6efe6" }}>
          <h6 className="fw-bold mb-2">Admin Notes</h6>
          <p className="text-muted mb-0">
            Pending donations require NGO assignment. Once assigned,
            NGOs will handle pickup and distribution. Completed
            donations indicate successful delivery.
          </p>
        </div>
      </div>

      <AdminFooter />
    </>
  );
};

export default ManageDonations;
