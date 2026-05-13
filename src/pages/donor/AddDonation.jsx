// src/pages/donor/AddDonation.jsx
import { useState } from "react";
import axios from "axios";
import DonorHeader from "../../components/donor/DonorHeader";
import DonorFooter from "../../components/donor/DonorFooter";

const AddDonation = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    condition: "",
    pickupLocation: "",
    contact: "",
    pickupDate: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:4000/api/donations",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Donation added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add donation");
    }
  };

  return (
    <>
      <DonorHeader />

      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Add New Donation</h2>

        <div className="card p-4 shadow-lg">
          <input
            name="itemName"
            className="form-control mb-3"
            placeholder="Item Name"
            onChange={handleChange}
          />

          <select
            name="category"
            className="form-select mb-3"
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option>Food</option>
            <option>Clothes</option>
            <option>Books</option>
            <option>Essentials</option>
          </select>

          <textarea
            name="quantity"
            className="form-control mb-3"
            placeholder="Quantity / Description"
            onChange={handleChange}
          />

          <select
            name="condition"
            className="form-select mb-3"
            onChange={handleChange}
          >
            <option value="">Condition</option>
            <option>New</option>
            <option>Gently Used</option>
          </select>

          <input
            name="pickupLocation"
            className="form-control mb-3"
            placeholder="Pickup Location"
            onChange={handleChange}
          />

          <input
            name="contact"
            className="form-control mb-3"
            placeholder="Contact Number"
            onChange={handleChange}
          />

          <input
            name="pickupDate"
            type="date"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <textarea
            name="notes"
            className="form-control mb-3"
            placeholder="Additional Notes"
            onChange={handleChange}
          />

          <button
            className="btn btn-dark w-100"
            onClick={handleSubmit}
          >
            Submit Donation
          </button>
        </div>
      </div>

      <DonorFooter />
    </>
  );
};

export default AddDonation;
