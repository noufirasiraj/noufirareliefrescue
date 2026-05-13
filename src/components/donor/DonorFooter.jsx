// src/components/Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHandHoldingHeart
} from "react-icons/fa";

const DonorFooter = () => {
  const linkStyle = {
    color: "#e0d6d4",
    transition: "all 0.3s ease"
  };

  const socialStyle = {
    color: "#d4af37",
    fontSize: "1.2rem",
    transition: "all 0.3s ease"
  };

  return (
    <footer
      className="text-light pt-5 pb-3 position-relative overflow-hidden"
      style={{ backgroundColor: "#3a2422" }}
    >
      {/* Decorative elements */}
      <div 
        className="position-absolute rounded-circle"
        style={{
          width: "300px",
          height: "300px",
          background: "rgba(212, 175, 55, 0.03)",
          top: "-150px",
          right: "-100px"
        }}
      />

      <div className="container position-relative">
        <div className="row g-4">

          {/* Brand */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <FaHandHoldingHeart size={32} className="me-2" style={{ color: "#d4af37" }} />
              <h3 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>
                Relief<span style={{ color: "#d4af37" }}>Rescue</span>
              </h3>
            </div>
            <p style={{ color: "#e0d6d4", lineHeight: "1.7", fontSize: "0.95rem" }}>
              Providing critical aid and support to communities affected by
              disasters through transparent and impactful giving.
            </p>

            <div className="d-flex gap-3 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  style={socialStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.1)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.color = "#d4af37";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3 pb-2" style={{ 
              color: "#d4af37",
              borderBottom: "2px solid rgba(212, 175, 55, 0.3)",
              display: "inline-block"
            }}>
              Quick Links
            </h5>
            <ul className="list-unstyled mt-3">
              {["Home", "About Us", "Services", "Our Mission", "Contact"].map((item) => (
                <li key={item} className="mb-2">
                  <a 
                    href="#" 
                    className="text-decoration-none" 
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#d4af37";
                      e.currentTarget.style.paddingLeft = "8px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#e0d6d4";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3 pb-2" style={{ 
              color: "#d4af37",
              borderBottom: "2px solid rgba(212, 175, 55, 0.3)",
              display: "inline-block"
            }}>
              Get Involved
            </h5>
            <ul className="list-unstyled mt-3">
              {["Donate", "Volunteer", "Fundraise", "Partnerships", "Events"].map((item) => (
                <li key={item} className="mb-2">
                  <a 
                    href="#" 
                    className="text-decoration-none" 
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#d4af37";
                      e.currentTarget.style.paddingLeft = "8px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#e0d6d4";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3 pb-2" style={{ 
              color: "#d4af37",
              borderBottom: "2px solid rgba(212, 175, 55, 0.3)",
              display: "inline-block"
            }}>
              Contact Us
            </h5>
            <ul className="list-unstyled mt-3">
              <li className="d-flex mb-3">
                <FaMapMarkerAlt className="me-3 mt-1 flex-shrink-0" style={{ color: "#d4af37" }} />
                <span style={{ color: "#e0d6d4", fontSize: "0.95rem" }}>
                  123 Relief Street, Humanitarian City
                </span>
              </li>
              <li className="d-flex mb-3">
                <FaPhoneAlt className="me-3 mt-1 flex-shrink-0" style={{ color: "#d4af37" }} />
                <span style={{ color: "#e0d6d4", fontSize: "0.95rem" }}>+91 9562091574</span>
              </li>
              <li className="d-flex">
                <FaEnvelope className="me-3 mt-1 flex-shrink-0" style={{ color: "#d4af37" }} />
                <span style={{ color: "#e0d6d4", fontSize: "0.95rem" }}>
                  info@reliefrescue.org
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "#5a3a37", opacity: 0.6 }} />

        <div className="text-center py-2" style={{ color: "#e0d6d4" }}>
          <small>© {new Date().getFullYear()} Relief Rescue | All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default DonorFooter;