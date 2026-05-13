import { useEffect, useState } from "react";
import axios from "axios";
import NGOHeader from "../../components/ngo/NGOHeader";
import NGOFooter from "../../components/ngo/NGOFooter";

const AcceptedDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchAcceptedDonations = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/ngo/donations/my",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setDonations(res.data);
    } catch (error) {
      alert("Failed to load accepted donations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAcceptedDonations();
  }, []);

      const completeDonation = async (id) => {
      try {
        await axios.put(
          `http://localhost:4000/api/ngo/donations/complete/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        alert("Donation marked as completed");
        fetchAcceptedDonations(); // refresh list
      } catch (error) {
        alert("Failed to mark donation as completed");
      }
    };


  // status badge helper
  const renderStatus = (status) => {
    if (status === "assigned") {
      return (
        <span className="badge bg-warning text-dark">
          In Progress
        </span>
      );
    }

    if (status === "completed") {
      return (
        <span className="badge bg-success">
          Completed
        </span>
      );
    }
    return (
      <span className="badge bg-info text-dark">
        Pickup Scheduled
      </span>
    );
  };

  return (
    <>
      <NGOHeader />

      <div className="container my-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="badge bg-dark px-3 py-2 mb-3">
            NGO Panel
          </span>
          <h2 className="fw-bold mb-2" style={{ color: "#4b2e2b" }}>
            Accepted Donations
          </h2>
          <p className="text-muted fs-5">
            Track donations you have accepted and update their status
          </p>
        </div>

        {/* Table */}
        <div
          className="card border-0 shadow-lg"
          style={{ backgroundColor: "#f6efe6" }}
        >
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-bordered align-middle mb-0">
                <thead
                  className="text-light"
                  style={{ backgroundColor: "#4b2e2b" }}
                >
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Pickup Location</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : donations.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No accepted donations
                      </td>
                    </tr>
                  ) : (
                    donations.map((donation, index) => (
                      <tr key={donation._id}>
                        <td>{index + 1}</td>
                        <td>{donation.itemName}</td>
                        <td>{donation.category}</td>
                        <td>{donation.pickupLocation || "N/A"}</td>
                        <td>{renderStatus(donation.status)}</td>

                        <td>
                          {donation.status !== "completed" ? (
                            <button
                              className="btn btn-sm btn-success"
                              onClick={() => completeDonation(donation._id)}
                            >
                              Mark Completed
                            </button>
                          ) : (
                            <span className="text-muted">Done</span>
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

        {/* Status Guide */}
        <div
          className="mt-4 p-4 rounded shadow-sm"
          style={{ backgroundColor: "#f6efe6" }}
        >
          <h6 className="fw-bold mb-2">Status Guide</h6>
          <div className="row text-muted">
            <div className="col-md-4 mb-1">
              🟡 <strong>In Progress:</strong> Pickup ongoing
            </div>
            <div className="col-md-4 mb-1">
              🔵 <strong>Pickup Scheduled:</strong> Date fixed
            </div>
            <div className="col-md-4 mb-1">
              🟢 <strong>Completed:</strong> Successfully distributed
            </div>
          </div>
        </div>
      </div>

      <NGOFooter />
    </>
  );
};

export default AcceptedDonations;
