import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DonorHeader from "../../components/donor/DonorHeader";

const DonorProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    role: "",
  });

  const token = localStorage.getItem("token");

  // 🚫 if no token → force login
  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);

  // 🔹 fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/donor/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(res.data);
      } catch (err) {
        console.error("Fetch profile error:", err);
      }
    };

    fetchProfile();
  }, [token]);

  // handle input
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // save profile
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:4000/api/donor/profile",
        {
          name: profile.name,
          phone: profile.phone,
          location: profile.location,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfile(res.data);
      setIsEditing(false);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <DonorHeader />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4">

              <div
                className="card-header text-center text-white"
                style={{ backgroundColor: "#4b2e2b" }}
              >
                <div className="mb-2">
                  <div
                    className="rounded-circle bg-light text-dark d-inline-flex align-items-center justify-content-center"
                    style={{ width: 90, height: 90, fontSize: 32 }}
                  >
                    {profile.name?.charAt(0)}
                  </div>
                </div>
                <h4>{profile.name}</h4>
                <small>{profile.role}</small>
              </div>

              <div className="card-body p-4">
                <form onSubmit={handleSave}>

                  <div className="mb-3">
                    <label>Full Name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      className="form-control"
                      value={profile.email}
                      disabled
                    />
                  </div>

                  <div className="mb-3">
                    <label>Phone</label>
                    <input
                      className="form-control"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="mb-4">
                    <label>Location</label>
                    <input
                      className="form-control"
                      name="location"
                      value={profile.location}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    {!isEditing ? (
                      <button
                        type="button"
                        className="btn text-white"
                        style={{ backgroundColor: "#4b2e2b" }}
                        onClick={() => setIsEditing(true)}
                      >
                        Edit Profile
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-success">
                        Save Changes
                      </button>
                    )}

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorProfile;
