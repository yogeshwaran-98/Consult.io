import React from "react";

function Topbar() {
  return (
    <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              <div className="border-end border-primary pe-3">
                <a href="www.example.com" className="text-muted small">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Find A Location
                </a>
              </div>
              <div className="ps-3">
                <a href="mailto:example@gmail.com" className="text-muted small">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  youremail@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex justify-content-end">
              <div className="d-flex border-end border-primary pe-3">
                <a className="btn p-0 text-primary me-3" href="www.example.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn p-0 text-primary me-3" href="www.example.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn p-0 text-primary me-3" href="www.example.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn p-0 text-primary me-0" href="www.example.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="dropdown ms-3">
                <a
                  href="www.example.com"
                  className="dropdown-toggle text-dark"
                  data-bs-toggle="dropdown"
                >
                  <small>
                    <i className="fas fa-globe-europe text-primary me-2"></i>{" "}
                    English
                  </small>
                </a>
                <div className="dropdown-menu rounded">
                  <a href="www.example.com" className="dropdown-item">
                    English
                  </a>
                  <a href="www.example.com" className="dropdown-item">
                    Bangla
                  </a>
                  <a href="www.example.com" className="dropdown-item">
                    French
                  </a>
                  <a href="www.example.com" className="dropdown-item">
                    Spanish
                  </a>
                  <a href="www.example.com" className="dropdown-item">
                    Arabic
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
