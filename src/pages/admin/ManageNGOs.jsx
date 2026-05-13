import { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminFooter from "../../components/admin/AdminFooter";

const ManageNGOs = () => {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Fetch NGOs
  const fetchNGOs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/admin/ngos",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setNgos(res.data);
    } catch (err) {
      alert("Failed to load NGOs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNGOs();
  }, []);

  // Approve NGO
  const approveNGO = async (id) => {
    try {
      await axios.put(
        `https://reliefrescue-backend.onrender.com/api/admin/ngos/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert("NGO approved successfully");
      fetchNGOs();
    } catch (err) {
      alert("Approval failed");
    }
  };

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
          <h2 className="fw-bold mb-2">NGO Management</h2>
          <p className="fs-5 mb-0">
            Review, approve, or reject NGO registrations
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* NGO Table */}
        <div className="card border-0 shadow-lg">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle mb-0">
                <thead
                  className="text-light"
                  style={{ backgroundColor: "#4b2e2b" }}
                >
                  <tr>
                    <th>#</th>
                    <th>NGO Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody style={{ backgroundColor: "#f6efe6" }}>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Loading NGOs...
                      </td>
                    </tr>
                  ) : ngos.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No NGOs found
                      </td>
                    </tr>
                  ) : (
                    ngos.map((ngo, index) => (
                      <tr key={ngo._id}>
                        <td>{index + 1}</td>
                        <td>{ngo.name}</td>
                        <td>{ngo.email}</td>
                        <td>
                          {ngo.isApproved ? (
                            <span className="badge bg-success">
                              Approved
                            </span>
                          ) : (
                            <span className="badge bg-warning text-dark">
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="text-center">
                          {!ngo.isApproved ? (
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() => approveNGO(ngo._id)}
                            >
                              Approve
                            </button>
                          ) : (
                            <button
                              className="btn btn-secondary btn-sm"
                              disabled
                            >
                              Approved
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
      </div>

      <AdminFooter />
    </>
  );
};

export default ManageNGOs;
