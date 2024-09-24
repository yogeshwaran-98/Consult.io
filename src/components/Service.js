import React from "react";
import "./Services.styles.css";
import carousel1 from "../images/png-image.png";

function Service() {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4 mb-4 fw-bold">We Provide Best Services</h1>
          <p className="mb-0">
            Consult.io offers tailored consulting solutions to drive growth and
            innovation. Our expert team helps businesses overcome challenges and
            achieve their goals, ensuring impactful results.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div
            className="items col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src={carousel1}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div
                  className="service-icon p-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i class="fa-solid fa-chess-king fa-2x"></i>
                </div>
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="www.example.com" className="d-inline-block h4 mb-4">
                    Strategic planning
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, eum!
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="www.example.com"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src={carousel1}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div
                  className="service-icon p-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i class="fa-solid fa-magnifying-glass-dollar fa-2x"></i>
                </div>
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="www.example.com" className="d-inline-block h4 mb-4">
                    Market Research
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, eum!
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="www.example.com"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src={carousel1}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div
                  className="service-icon p-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i class="fa-solid fa-sack-dollar fa-2x"></i>
                </div>
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="www.example.com" className="d-inline-block h4 mb-4">
                    Financial Advisory
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, eum!
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="www.example.com"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src={carousel1}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div
                  className="service-icon p-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i class="fa-solid fa-handshake fa-2x"></i>
                </div>
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="www.example.com" className="d-inline-block h4 mb-4">
                    Change Management
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, eum!
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="www.example.com"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 text-center wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
          >
            <a className="btn btn-primary rounded-pill py-3 px-5" href="www.example.com">
              More Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
