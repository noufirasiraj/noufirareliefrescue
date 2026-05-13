// src/pages/donor/DonorDashboard.jsx
import DonorHeader from "../../components/donor/DonorHeader";
import DonorFooter from "../../components/donor/DonorFooter";
import { Link } from "react-router-dom";

const DonorDashboard = () => {
  return (
    <>
      <DonorHeader />

      {/* Hero Section */}
      <div
        className="py-5 text-center text-light position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #4b2e2b, #6f4e37)"
        }}
      >
        {/* Decorative circles */}
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            background: "rgba(255, 255, 255, 0.05)",
            top: "-100px",
            right: "-100px"
          }}
        ></div>
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: "200px",
            height: "200px",
            background: "rgba(255, 255, 255, 0.03)",
            bottom: "-50px",
            left: "-50px"
          }}
        ></div>

        <div className="container position-relative">
          <span 
            className="badge bg-light text-dark px-4 py-2 mb-3 rounded-pill shadow-sm"
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.5px"
            }}
          >
            🎯 Donor Panel
          </span>
          <h1 className="fw-bold mb-3 display-5">Welcome Back!</h1>
          <p className="fs-5 mb-0 opacity-90" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Your generosity turns surplus into support for communities.
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* Stats Section */}
        <div className="row text-center mt-n5">
          {[
            {
              title: "Total Donations",
              value: 12,
              note: "Items donated",
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #f6efe6 0%, #ede3d9 100%)"
            },
            {
              title: "Pending",
              value: 3,
              note: "Awaiting pickup",
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #fff5e6 0%, #ffe9cc 100%)"
            },
            {
              title: "Completed",
              value: 9,
              note: "Successfully delivered",
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)"
            }
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card border-0 shadow-lg h-100 position-relative overflow-hidden"
                style={{ 
                  background: item.gradient,
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(75, 46, 43, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="card-body py-4 text-center">
                  <div className="mb-3">
                    {item.icon}
                  </div>
                  <h6 
                    className="text-uppercase mb-2"
                    style={{
                      color: "#6f4e37",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      letterSpacing: "1px"
                    }}
                  >
                    {item.title}
                  </h6>
                  <h1
                    className="fw-bold mb-2 display-4"
                    style={{ color: "#4b2e2b" }}
                  >
                    {item.value}
                  </h1>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    {item.note}
                  </p>
                </div>
                {/* Decorative corner */}
                <div 
                  className="position-absolute rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(75, 46, 43, 0.05)",
                    bottom: "-20px",
                    right: "-20px"
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions Section */}
        <div className="d-flex align-items-center justify-content-between mt-5 mb-4">
          <h4 className="fw-bold mb-0" style={{ color: "#4b2e2b" }}>
            Quick Actions
          </h4>
          <div 
            style={{
              height: "3px",
              flex: 1,
              background: "linear-gradient(to right, #4b2e2b, transparent)",
              marginLeft: "20px",
              borderRadius: "2px"
            }}
          ></div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div
              className="p-4 rounded-3 shadow-sm h-100 position-relative overflow-hidden"
              style={{ 
                backgroundColor: "#f6efe6",
                border: "2px solid transparent",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4b2e2b";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div className="d-flex align-items-start gap-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#4b2e2b"
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fw-bold mb-2">Add New Donation</h5>
                  <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                    Share food, clothes, or books and help NGOs act faster.
                  </p>
                  <Link
                    to="/donor/add-donation"
                    className="btn text-light px-4 py-2 rounded-pill shadow-sm"
                    style={{ 
                      backgroundColor: "#4b2e2b",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#6f4e37";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#4b2e2b";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    + Add Donation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="p-4 rounded-3 shadow-sm h-100 position-relative overflow-hidden"
              style={{ 
                backgroundColor: "#f6efe6",
                border: "2px solid transparent",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4b2e2b";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div className="d-flex align-items-start gap-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "white",
                    border: "2px solid #4b2e2b"
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fw-bold mb-2">My Donations</h5>
                  <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                    Track donation status and see how your items are used.
                  </p>
                  <Link
                    to="/donor/my-donations"
                    className="btn btn-outline-dark px-4 py-2 rounded-pill"
                    style={{
                      borderWidth: "2px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#4b2e2b";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = "#4b2e2b";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    View Donations →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="d-flex align-items-center justify-content-between mt-5 mb-4">
          <h4 className="fw-bold mb-0" style={{ color: "#4b2e2b" }}>
            Recent Donations
          </h4>
          <div 
            style={{
              height: "3px",
              flex: 1,
              background: "linear-gradient(to right, #4b2e2b, transparent)",
              marginLeft: "20px",
              borderRadius: "2px"
            }}
          ></div>
        </div>

        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead
                className="text-light"
                style={{ backgroundColor: "#4b2e2b" }}
              >
                <tr>
                  <th className="py-3 ps-4" style={{ borderBottom: "none" }}>#</th>
                  <th className="py-3" style={{ borderBottom: "none" }}>
                    <div className="d-flex align-items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      </svg>
                      Item
                    </div>
                  </th>
                  <th className="py-3" style={{ borderBottom: "none" }}>
                    <div className="d-flex align-items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                      Category
                    </div>
                  </th>
                  <th className="py-3 pe-4" style={{ borderBottom: "none" }}>
                    <div className="d-flex align-items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      Status
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody style={{ backgroundColor: "#f6efe6" }}>
                <tr style={{ transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ede3d9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                  }}
                >
                  <td className="ps-4 fw-semibold" style={{ color: "#4b2e2b" }}>1</td>
                  <td className="fw-semibold">Rice Packets</td>
                  <td>
                    <span className="badge bg-light text-dark border px-3 py-2">
                      🍚 Food
                    </span>
                  </td>
                  <td className="pe-4">
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
                      ⏳ Pending
                    </span>
                  </td>
                </tr>
                <tr style={{ transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ede3d9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                  }}
                >
                  <td className="ps-4 fw-semibold" style={{ color: "#4b2e2b" }}>2</td>
                  <td className="fw-semibold">Blankets</td>
                  <td>
                    <span className="badge bg-light text-dark border px-3 py-2">
                      👕 Clothes
                    </span>
                  </td>
                  <td className="pe-4">
                    <span className="badge bg-success px-3 py-2 rounded-pill">
                      ✓ Completed
                    </span>
                  </td>
                </tr>
                <tr style={{ transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ede3d9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                  }}
                >
                  <td className="ps-4 fw-semibold" style={{ color: "#4b2e2b" }}>3</td>
                  <td className="fw-semibold">School Books</td>
                  <td>
                    <span className="badge bg-light text-dark border px-3 py-2">
                      📚 Books
                    </span>
                  </td>
                  <td className="pe-4">
                    <span className="badge bg-info text-dark px-3 py-2 rounded-pill">
                      📋 Assigned
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Status Guide */}
        <div
          className="mt-5 p-4 rounded-3 shadow-sm position-relative overflow-hidden"
          style={{ 
            backgroundColor: "#f6efe6",
            border: "2px dashed rgba(75, 46, 43, 0.2)"
          }}
        >
          <div className="d-flex align-items-center gap-3 mb-4">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#4b2e2b"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <h5 className="fw-bold mb-0">Donation Status Guide</h5>
          </div>
          
          <div className="row text-muted">
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-start gap-3">
                <span className="fs-4">⏳</span>
                <div>
                  <strong className="d-block text-dark">Pending</strong>
                  <small>Waiting for NGO response</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-start gap-3">
                <span className="fs-4">📋</span>
                <div>
                  <strong className="d-block text-dark">Assigned</strong>
                  <small>Accepted by NGO</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="d-flex align-items-start gap-3">
                <span className="fs-4">✅</span>
                <div>
                  <strong className="d-block text-dark">Completed</strong>
                  <small>Successfully delivered</small>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div 
            className="position-absolute opacity-25"
            style={{
              bottom: "-30px",
              right: "-30px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "20px solid #4b2e2b"
            }}
          ></div>
        </div>
      </div>

      <DonorFooter />
    </>
  );
};

export default DonorDashboard;