import React from "react";

const Navigation = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#3d9962" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-2 py-lg-0">
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <a href="/" className="nav-item nav-link active" style={{ color: "white" }}>
                Home
              </a>
              <a href="/hostels" className="nav-item nav-link" style={{ color: "white" }}>
                Hostels
              </a>
              <a href="/itinerary" className="nav-item nav-link" style={{ color: "white" }}>
                Itinerary
              </a>
            </div>
            <div className="border-start ps-4 d-none d-lg-block">
              <button type="button" className="btn btn-sm p-0">
                <i className="fa fa-search" style={{ color: "white" }}></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
