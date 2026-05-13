import { useEffect, useState } from "react";
import axios from "axios";
import NGOHeader from "../../components/ngo/NGOHeader";
import NGOFooter from "../../components/ngo/NGOFooter";

const AvailableDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Get token (adjust key name if needed)
  const token = localStorage.getItem("token");

  // 🔹 Fetch available donations
  const fetchDonations = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/ngo/donations/available",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setDonations(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load donations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  // 🔹 Accept donation
  const handleAccept = async (id) => {
    if (!window.confirm("Are you sure you want to accept this donation?")) return;

    try {
      await axios.put(
        `http://localhost:4000/api/ngo/donations/accept/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // Remove accepted donation from UI
      setDonations((prev) => prev.filter((d) => d._id !== id));
      alert("Donation accepted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to accept donation");
    }
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
            Available Donations
          </h2>
          <p className="text-muted fs-5">
            Browse donations shared by donors and accept items
            that match your organization’s needs
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
                    <th>Quantity</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        Loading...
                      </td>
                    </tr>
                  ) : donations.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        No available donations
                      </td>
                    </tr>
                  ) : (
                    donations.map((donation, index) => (
                      <tr key={donation._id}>
                        <td>{index + 1}</td>
                        <td>{donation.itemName}</td>
                        <td>{donation.category}</td>
                        <td>{donation.quantity}</td>
                        <td>{donation.pickupLocation}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-success"
                            onClick={() => handleAccept(donation._id)}
                          >
                            Accept
                          </button>
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
            Once accepted, the donation will move to your
            <strong> Accepted Donations</strong> list for tracking.
          </p>
        </div>
      </div>

      <NGOFooter />
    </>
  );
};

export default AvailableDonations;
