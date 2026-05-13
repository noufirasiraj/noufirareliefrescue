// src/pages/About.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

const cardBg = "#f6efe6";

const About = () => {
  return (
    <>
      <Header />

      {/* Hero Intro */}
      <div
        className="text-center text-light py-5 position-relative overflow-hidden"
        style={{ backgroundColor: "#4b2e2b" }}
      >
        {/* Decorative elements */}
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            background: "rgba(255,255,255,0.05)",
            top: "-100px",
            right: "-50px"
          }}
        ></div>
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: "200px",
            height: "200px",
            background: "rgba(255,255,255,0.03)",
            bottom: "-50px",
            left: "-50px"
          }}
        ></div>

        <div className="container position-relative py-4">
          <span 
            className="badge bg-light text-dark mb-3 px-4 py-2 rounded-pill shadow-sm"
            style={{
              fontSize: "0.9rem",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}
          >
            📖 About Us
          </span>
          <h2 className="fw-bold mb-3 display-5">Relief Rescue</h2>
          <p className="fs-5 mb-0 opacity-90" style={{ maxWidth: "600px", margin: "0 auto" }}>
            A bridge between generosity and genuine need
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container my-5 py-4">
        <div className="row align-items-center g-4">
          <div className="col-md-6 mb-4">
            <div className="position-relative">
              <div 
                className="position-absolute rounded-circle"
                style={{
                  width: "80px",
                  height: "80px",
                  background: "rgba(75,46,43,0.1)",
                  top: "-20px",
                  left: "-20px",
                  zIndex: 0
                }}
              ></div>
              
              <div className="position-relative">
                <span 
                  className="badge rounded-pill px-3 py-2 mb-3"
                  style={{
                    backgroundColor: "rgba(75,46,43,0.1)",
                    color: "#4b2e2b",
                    fontSize: "0.85rem",
                    fontWeight: "600"
                  }}
                >
                  OUR JOURNEY
                </span>
                <h3 className="fw-bold mb-4 display-6" style={{ color: "#4b2e2b" }}>
                  Our Story
                </h3>
                <p className="text-muted mb-3" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                  Across communities, usable food, clothes, books,
                  and essential items are discarded every day.
                  At the same time, many individuals struggle to
                  access even the most basic necessities.
                </p>
                <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                  Relief Rescue was created to close this gap by
                  offering a simple, digital platform that connects
                  donors directly with trusted NGOs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="p-5 shadow-lg rounded-4 position-relative overflow-hidden h-100"
              style={{ 
                backgroundColor: cardBg,
                border: "2px solid rgba(75,46,43,0.1)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(75,46,43,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #4b2e2b, #6f4e37)"
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h5 className="fw-bold mb-0" style={{ color: "#4b2e2b", fontSize: "1.4rem" }}>
                  What We Believe
                </h5>
              </div>
              <p className="text-muted mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                Surplus should never be wasted when it has the
                power to improve or even save lives.
              </p>

              {/* Decorative quote mark */}
              <div 
                className="position-absolute opacity-25"
                style={{
                  bottom: "20px",
                  right: "20px",
                  fontSize: "100px",
                  fontFamily: "Georgia, serif",
                  color: "#4b2e2b",
                  lineHeight: "0.5"
                }}
              >
                "
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="container my-5 py-4">
        <div className="text-center mb-5">
          <span 
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              backgroundColor: "rgba(75,46,43,0.1)",
              color: "#4b2e2b",
              fontSize: "0.9rem",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}
          >
            THE CHALLENGE
          </span>
          <h3 className="fw-bold display-6" style={{ color: "#4b2e2b" }}>
            Problem & Solution
          </h3>
        </div>

        <div className="row g-4">
          <div className="col-md-6 mb-4">
            <div
              className="p-5 h-100 shadow-lg rounded-4 position-relative overflow-hidden"
              style={{ 
                backgroundColor: cardBg,
                border: "2px solid transparent",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#dc3545";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#dc3545"
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </div>
                <span 
                  className="badge bg-dark px-3 py-2 rounded-pill"
                  style={{ fontSize: "0.8rem", letterSpacing: "0.5px" }}
                >
                  THE PROBLEM
                </span>
              </div>
              
              <h4 className="fw-bold mb-3" style={{ color: "#4b2e2b", fontSize: "1.5rem" }}>
                Unorganized Donations
              </h4>
              <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                Lack of coordination and transparency leads to
                massive wastage of usable resources and delayed
                support for those in need.
              </p>

              {/* Decorative element */}
              <div 
                className="position-absolute rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  background: "rgba(220,53,69,0.1)",
                  bottom: "-30px",
                  right: "-30px"
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="p-5 h-100 shadow-lg rounded-4 position-relative overflow-hidden"
              style={{ 
                backgroundColor: cardBg,
                border: "2px solid transparent",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#198754";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#198754"
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span 
                  className="badge bg-dark px-3 py-2 rounded-pill"
                  style={{ fontSize: "0.8rem", letterSpacing: "0.5px" }}
                >
                  OUR SOLUTION
                </span>
              </div>
              
              <h4 className="fw-bold mb-3" style={{ color: "#4b2e2b", fontSize: "1.5rem" }}>
                Centralized Platform
              </h4>
              <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                Relief Rescue offers a verified, role-based system
                where donations are tracked and distributed
                efficiently with complete transparency.
              </p>

              {/* Decorative element */}
              <div 
                className="position-absolute rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  background: "rgba(25,135,84,0.1)",
                  bottom: "-30px",
                  right: "-30px"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="container my-5 py-5" style={{ backgroundColor: "#f6efe6", borderRadius: "20px" }}>
        <div className="text-center mb-5">
          <span 
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              backgroundColor: "#4b2e2b",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}
          >
            OUR FOUNDATION
          </span>
          <h3 className="fw-bold display-6" style={{ color: "#4b2e2b" }}>
            What Drives Us
          </h3>
        </div>

        <div className="row text-center g-4">
          {[
            {
              title: "Our Mission",
              text:
                "To reduce wastage and promote responsible sharing through technology.",
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #fff5e6 0%, #ffe9cc 100%)"
            },
            {
              title: "Our Vision",
              text:
                "A future where no usable resource goes to waste and no one is left unsupported.",
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)"
            },
            {
              title: "Our Values",
              text:
                "Transparency, trust, sustainability, and community collaboration.",
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)"
            }
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card border-0 shadow-lg h-100 position-relative overflow-hidden"
                style={{ 
                  background: item.gradient,
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(75,46,43,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="card-body p-5">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <span 
                    className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill border"
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.5px",
                      fontWeight: "600"
                    }}
                  >
                    CORE
                  </span>
                  <h5 className="fw-bold mb-3" style={{ color: "#4b2e2b", fontSize: "1.4rem" }}>
                    {item.title}
                  </h5>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.7" }}>
                    {item.text}
                  </p>
                </div>

                {/* Decorative corner */}
                <div 
                  className="position-absolute rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(75,46,43,0.05)",
                    bottom: "-20px",
                    right: "-20px"
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who Can Use */}
      <div className="container my-5 py-4">
        <div className="text-center mb-5">
          <span 
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              backgroundColor: "rgba(75,46,43,0.1)",
              color: "#4b2e2b",
              fontSize: "0.9rem",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}
          >
            FOR EVERYONE
          </span>
          <h3 className="fw-bold display-6 mb-2" style={{ color: "#4b2e2b" }}>
            Who Is Relief Rescue For?
          </h3>
        </div>

        <div className="row text-center g-4">
          {[
            {
              role: "Donors",
              desc:
                "Individuals or organizations willing to donate surplus resources responsibly.",
              icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              ),
              color: "#4b2e2b"
            },
            {
              role: "NGOs",
              desc:
                "Verified NGOs that distribute donations to underprivileged communities.",
              icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              ),
              color: "#6f4e37"
            },
            {
              role: "Administrators",
              desc:
                "Admins who monitor, verify, and maintain transparency across the platform.",
              icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              ),
              color: "#8b6f47"
            }
          ].map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div
                className="p-5 rounded-4 shadow-lg h-100 position-relative overflow-hidden"
                style={{ 
                  backgroundColor: cardBg,
                  border: "2px solid transparent",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: item.color
                  }}
                >
                  {item.icon}
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#4b2e2b", fontSize: "1.4rem" }}>
                  {item.role}
                </h5>
                <p className="text-muted mb-0" style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
                  {item.desc}
                </p>

                {/* Decorative element */}
                <div 
                  className="position-absolute"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: `${item.color}15`,
                    borderRadius: "50%",
                    bottom: "-20px",
                    right: "-20px"
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="container my-5 py-5 text-center">
        <div 
          className="p-5 rounded-4 shadow-lg position-relative overflow-hidden mx-auto"
          style={{
            backgroundColor: cardBg,
            maxWidth: "900px",
            border: "2px dashed rgba(75,46,43,0.2)"
          }}
        >
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #4b2e2b, #6f4e37)"
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>

          <span 
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              backgroundColor: "#4b2e2b",
              color: "white",
              fontSize: "0.85rem",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}
          >
            MAKING A DIFFERENCE
          </span>
          <h3 className="fw-bold mb-4 display-6" style={{ color: "#4b2e2b" }}>
            Our Impact
          </h3>
          <p className="text-muted fs-5 mb-0 mx-auto" style={{ maxWidth: "700px", lineHeight: "1.8" }}>
            By improving coordination between donors and NGOs,
            Relief Rescue helps reduce waste, increase efficiency,
            and build trust in community-driven support systems.
          </p>

          {/* Decorative elements */}
          <div 
            className="position-absolute rounded-circle"
            style={{
              width: "120px",
              height: "120px",
              background: "rgba(75,46,43,0.05)",
              top: "-40px",
              left: "-40px"
            }}
          ></div>
          <div 
            className="position-absolute rounded-circle"
            style={{
              width: "100px",
              height: "100px",
              background: "rgba(75,46,43,0.05)",
              bottom: "-30px",
              right: "-30px"
            }}
          ></div>
        </div>
      </div>

      {/* Closing CTA */}
      <div
        className="text-center text-light py-5 position-relative overflow-hidden"
        style={{ backgroundColor: "#4b2e2b" }}
      >
        {/* Decorative elements */}
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(255,255,255,0.03)",
            top: "-200px",
            left: "-100px"
          }}
        ></div>
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            background: "rgba(255,255,255,0.05)",
            bottom: "-150px",
            right: "-100px"
          }}
        ></div>

        <div className="container position-relative py-4">
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <h4 className="fw-bold mb-3 display-5">Building a Better Tomorrow</h4>
          <p className="fs-5 mb-0 mx-auto opacity-90" style={{ maxWidth: "700px", lineHeight: "1.7" }}>
            Relief Rescue is more than a platform — it is a movement
            toward responsible sharing and social impact.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;