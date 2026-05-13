import { Link } from "react-router-dom";

const DonorHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4 shadow-sm"
      style={{ 
        backgroundColor: "#4b2e2b",
        borderBottom: "3px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <Link 
        className="navbar-brand fw-bold d-flex align-items-center gap-2" 
        to="/donor/dashboard"
        style={{
          fontSize: "1.5rem",
          letterSpacing: "0.5px"
        }}
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        ReliefRescue
      </Link>

      <button
        className="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#donorNavbar"
        style={{
          padding: "0.5rem",
          transition: "all 0.3s ease"
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="donorNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item mx-1">
            <Link 
              className="nav-link px-3 py-2 rounded-pill transition-all" 
              to="/donor/dashboard"
              style={{
                transition: "all 0.3s ease",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="d-flex align-items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                Dashboard
              </span>
            </Link>
          </li>

          <li className="nav-item mx-1">
            <Link 
              className="nav-link px-3 py-2 rounded-pill" 
              to="/donor/add-donation"
              style={{
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="d-flex align-items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                Add Donation
              </span>
            </Link>
          </li>

          <li className="nav-item mx-1">
            <Link 
              className="nav-link px-3 py-2 rounded-pill" 
              to="/donor/my-donations"
              style={{
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="d-flex align-items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                My Donations
              </span>
            </Link>
          </li>
        </ul>

        {/* Profile Avatar */}
        <Link
          to="/donor/profile"
          className="d-flex align-items-center text-decoration-none position-relative"
          style={{
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            const avatar = e.currentTarget.querySelector('.avatar-circle');
            avatar.style.transform = "scale(1.1)";
            avatar.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.3)";
          }}
          onMouseLeave={(e) => {
            const avatar = e.currentTarget.querySelector('.avatar-circle');
            avatar.style.transform = "scale(1)";
            avatar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
          }}
        >
          <div
            className="avatar-circle rounded-circle bg-light text-dark d-flex align-items-center justify-content-center"
            style={{
              width: "42px",
              height: "42px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            D
          </div>
          <div 
            className="position-absolute bg-success rounded-circle"
            style={{
              width: "12px",
              height: "12px",
              bottom: "2px",
              right: "2px",
              border: "2px solid #4b2e2b"
            }}
          ></div>
        </Link>
      </div>
    </nav>
  );
};

export default DonorHeader;