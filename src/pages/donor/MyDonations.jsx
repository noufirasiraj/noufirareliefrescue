// src/pages/donor/MyDonations.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import DonorHeader from "../../components/donor/DonorHeader";
import DonorFooter from "../../components/donor/DonorFooter";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:4000/api/donations/my",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setDonations(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <>
      <DonorHeader />

      <div className="container my-5">
        <h2 className="fw-bold mb-4">My Donations</h2>

        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((d, index) => (
              <tr key={d._id}>
                <td>{index + 1}</td>
                <td>{d.itemName}</td>
                <td>{d.category}</td>
                <td>{d.status}</td>
                <td>{new Date(d.createdAt).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DonorFooter />
    </>
  );
};

export default MyDonations;
