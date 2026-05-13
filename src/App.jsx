import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Public pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* Admin pages */
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageNGOs from "./pages/admin/ManageNGOs";
import ManageDonations from "./pages/admin/ManageDonations";
import AdminViewDonors from "./pages/admin/AdminViewDonors";

/* Donor pages */
import DonorDashboard from "./pages/donor/DonorDashboard";
import AddDonation from "./pages/donor/AddDonation";
import MyDonations from "./pages/donor/MyDonations";
import DonorProfile from "./pages/donor/DonorProfile";


/* NGO pages */
import NGODashboard from "./pages/ngo/NGODashboard";
import AvailableDonations from "./pages/ngo/AvailableDonations";
import AcceptedDonations from "./pages/ngo/AcceptedDonations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Pages */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/ngos" element={<ManageNGOs />} />
        <Route path="/admin/donations" element={<ManageDonations />} />
        <Route path="/admin/donors" element={<AdminViewDonors />} />


        {/* Donor Pages */}
        <Route path="/donor/dashboard" element={<DonorDashboard />} />
        <Route path="/donor/add-donation" element={<AddDonation />} />
        <Route path="/donor/my-donations" element={<MyDonations />} />
        <Route path="/donor/profile" element={<DonorProfile />} />


        {/* NGO Pages */}
        <Route path="/ngo/dashboard" element={<NGODashboard />} />
        <Route path="/ngo/available-donations" element={<AvailableDonations />} />
        <Route path="/ngo/accepted-donations" element={<AcceptedDonations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
