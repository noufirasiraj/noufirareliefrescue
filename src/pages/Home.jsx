// src/pages/Home.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="d-flex align-items-center text-center text-light position-relative overflow-hidden"
        style={{
          minHeight: "75vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528459105426-b9548367069b')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay */}
        <div 
          className="position-absolute w-100 h-100"
          style={{
            background: "linear-gradient(135deg, rgba(75,46,43,0.85) 0%, rgba(111,78,55,0.75) 100%)",
            top: 0,
            left: 0
          }}
        ></div>

        <div className="container position-relative">
          <div
            className="p-5 rounded-4 position-relative overflow-hidden"
            style={{ 
              backgroundColor: "rgba(75,46,43,0.75)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255,255,255,0.1)",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            {/* Decorative elements */}
            <div 
              className="position-absolute rounded-circle"
              style={{
                width: "150px",
                height: "150px",
                background: "rgba(255,255,255,0.05)",
                top: "-50px",
                right: "-50px"
              }}
            ></div>
            <div 
              className="position-absolute rounded-circle"
              style={{
                width: "100px",
                height: "100px",
                background: "rgba(255,255,255,0.03)",
                bottom: "-30px",
                left: "-30px"
              }}
            ></div>

            <div className="position-relative">
              <div className="mb-4">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h1 className="fw-bold display-4 mb-4" style={{ letterSpacing: "1px" }}>
                Relief Rescue
              </h1>
              <p className="lead mb-4 opacity-90" style={{ fontSize: "1.3rem", lineHeight: "1.8" }}>
                Turning surplus into support — connecting donors
                with NGOs for a better tomorrow
              </p>
              <a 
                href="/register" 
                className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-lg"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  border: "2px solid white"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="position-absolute text-white"
          style={{
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(10px); }
          }
        `}</style>
      </div>

      {/* Why Section */}
      <div className="container my-5 py-4 text-center">
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
          OUR MISSION
        </span>
        <h2 className="fw-bold mb-4 display-6" style={{ color: "#4b2e2b" }}>
          Why Relief Rescue?
        </h2>
        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px", lineHeight: "1.8" }}>
          Millions of usable resources go to waste every day.
          Relief Rescue ensures they reach the people who
          need them most — quickly, fairly, and transparently.
        </p>
      </div>

      {/* Features – Modern Cards */}
      <div className="container my-5 py-4">
        <div className="row text-center g-4">
          {[
            {
              title: "Simple Donations",
              text:
                "List surplus food, clothes, or books in just a few steps — no complex process.",
              icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #f6efe6 0%, #ede3d9 100%)"
            },
            {
              title: "Trusted NGOs",
              text:
                "Verified NGOs can browse and accept donations based on real community needs.",
              icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #fff5e6 0%, #ffe9cc 100%)"
            },
            {
              title: "Clear Tracking",
              text:
                "Each donation is tracked from submission to distribution for full transparency.",
              icon: (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4b2e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              ),
              gradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)"
            }
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div 
                className="card border-0 shadow-lg h-100 position-relative overflow-hidden"
                style={{
                  background: item.gradient,
                  transition: "all 0.4s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(75,46,43,0.2)";
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
                    className="badge rounded-pill mb-3 px-3 py-2"
                    style={{
                      backgroundColor: "#4b2e2b",
                      color: "white",
                      fontSize: "0.75rem",
                      letterSpacing: "0.5px"
                    }}
                  >
                    FEATURE
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
                  className="position-absolute"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(75,46,43,0.05)",
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

      {/* How It Works – Process Style */}
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
            SIMPLE PROCESS
          </span>
          <h2 className="fw-bold display-6" style={{ color: "#4b2e2b" }}>
            How It Works
          </h2>
        </div>

        <div className="row text-center position-relative">
          {/* Connection line */}
          <div 
            className="position-absolute d-none d-md-block"
            style={{
              top: "50px",
              left: "10%",
              right: "10%",
              height: "3px",
              background: "linear-gradient(to right, #4b2e2b, #6f4e37)",
              zIndex: 0
            }}
          ></div>

          {[
            {
              step: "Register on the platform",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              )
            },
            {
              step: "Add or browse donations",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              )
            },
            {
              step: "NGOs accept suitable items",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )
            },
            {
              step: "Resources reach people in need",
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              )
            }
          ].map((item, index) => (
            <div className="col-md-3 mb-4 mb-md-0" key={index}>
              <div 
                className="position-relative"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "default",
                  zIndex: 1
                }}
                onMouseEnter={(e) => {
                  const circle = e.currentTarget.querySelector('.step-circle');
                  circle.style.transform = "scale(1.15)";
                  circle.style.boxShadow = "0 15px 35px rgba(75,46,43,0.3)";
                }}
                onMouseLeave={(e) => {
                  const circle = e.currentTarget.querySelector('.step-circle');
                  circle.style.transform = "scale(1)";
                  circle.style.boxShadow = "0 8px 20px rgba(75,46,43,0.2)";
                }}
              >
                <div 
                  className="step-circle rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "linear-gradient(135deg, #4b2e2b, #6f4e37)",
                    boxShadow: "0 8px 20px rgba(75,46,43,0.2)",
                    transition: "all 0.3s ease",
                    position: "relative"
                  }}
                >
                  {item.icon}
                  <div 
                    className="position-absolute rounded-circle bg-white d-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: "28px",
                      height: "28px",
                      top: "-5px",
                      right: "-5px",
                      color: "#4b2e2b",
                      fontSize: "0.9rem",
                      border: "3px solid #f6efe6"
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
                <p className="mb-0 fw-semibold px-2" style={{ color: "#4b2e2b", lineHeight: "1.6" }}>
                  {item.step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Categories – Pills */}
      <div className="container my-5 py-5 text-center">
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
          ACCEPTED ITEMS
        </span>
        <h2 className="fw-bold mb-5 display-6" style={{ color: "#4b2e2b" }}>
          What You Can Donate
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {[
            { name: "Food", icon: "🍚", color: "#fff5e6" },
            { name: "Clothes", icon: "👕", color: "#f6efe6" },
            { name: "Books", icon: "📚", color: "#e8f5e9" },
            { name: "Medicines", icon: "💊", color: "#fce4ec" },
            { name: "Essentials", icon: "🎒", color: "#e3f2fd" }
          ].map((item, index) => (
            <span
              key={index}
              className="badge rounded-pill shadow-sm d-inline-flex align-items-center gap-2"
              style={{
                backgroundColor: item.color,
                color: "#4b2e2b",
                padding: "15px 30px",
                fontSize: "1.1rem",
                fontWeight: "600",
                border: "2px solid rgba(75,46,43,0.1)",
                transition: "all 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
                e.currentTarget.style.borderColor = "#4b2e2b";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(75,46,43,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.borderColor = "rgba(75,46,43,0.1)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Call to Action */}
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="fw-bold mb-4 display-5">Be a Part of the Change</h3>
          <p className="fs-5 mb-5 mx-auto opacity-90" style={{ maxWidth: "600px", lineHeight: "1.7" }}>
            Your contribution today can create hope for someone tomorrow.
          </p>
          <a 
            href="/register" 
            className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-lg"
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: "2px solid white"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
              e.currentTarget.style.backgroundColor = "#6f4e37";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.color = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            Join Relief Rescue →
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;