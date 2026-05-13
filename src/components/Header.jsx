// src/components/Header.jsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark shadow-sm" 
      style={{ 
        backgroundColor: "#4b2e2b",
        borderBottom: "3px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <div className="container py-2">
        <Link 
          className="navbar-brand fw-bold d-flex align-items-center gap-2" 
          to="/"
          style={{
            fontSize: "1.5rem",
            letterSpacing: "0.5px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
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
          Relief Rescue
        </Link>

        <ul className="navbar-nav ms-auto d-flex flex-row gap-2">
          <li className="nav-item">
            <Link 
              className="nav-link px-3 py-2 rounded-pill d-flex align-items-center gap-2" 
              to="/"
              style={{
                transition: "all 0.3s ease",
                fontWeight: "500"
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link px-3 py-2 rounded-pill d-flex align-items-center gap-2" 
              to="/about"
              style={{
                transition: "all 0.3s ease",
                fontWeight: "500"
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link px-4 py-2 rounded-pill d-flex align-items-center gap-2" 
              to="/login"
              style={{
                transition: "all 0.3s ease",
                fontWeight: "600",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "2px solid rgba(255, 255, 255, 0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#4b2e2b";
                e.currentTarget.style.borderColor = "white";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.color = "";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;