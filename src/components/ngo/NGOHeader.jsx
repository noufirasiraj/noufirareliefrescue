import { Link } from "react-router-dom";

const NGOHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#4b2e2b" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/ngo/dashboard">
          Relief Rescue – NGO
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ngoNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="ngoNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/ngo/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ngo/available-donations">
                Available Donations
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ngo/accepted-donations">
                Accepted Donations
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NGOHeader;
