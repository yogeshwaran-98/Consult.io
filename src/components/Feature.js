import React from "react";
import "../components/Feature.styles.css";

function Feature() {
  return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            maxWidth: "800px",
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        >
          <h4 className="text-primary">Our Features</h4>
          <h1 className="display-4 mb-4 fw-bold">
            Consultation Secures Your Future
          </h1>
          <p className="mb-0">
            Consult.io offers tailored consulting solutions to drive growth and
            innovation. Our expert team helps businesses overcome challenges and
            achieve their goals, ensuring impactful results.
          </p>
        </div>
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <div className="feature-item px-4 pb-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="icon far fa-handshake fa-3x"></i>
              </div>
              <h4 className="mb-4">Trusted Company</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                laborum odit pariatur...
              </p>
              <a
                className="learn-more btn btn-primary rounded-pill py-2 px-4"
                href="https://example.com"
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp",
            }}
          >
            <div className="feature-item px-4 pb-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="icon fa fa-dollar-sign fa-3x"></i>
              </div>
              <h4 className="mb-4">Anytime Money Back</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                laborum odit pariatur...
              </p>
              <a
                className=" learn-more btn btn-primary rounded-pill py-2 px-4"
                href="https://example.com"
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDelay: "0.6s",
              animationName: "fadeInUp",
            }}
          >
            <div className="feature-item px-4 pb-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="icon fa fa-bullseye fa-3x"></i>
              </div>
              <h4 className="mb-4">Flexible Plans</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                laborum odit pariatur...
              </p>
              <a
                className=" learn-more btn btn-primary rounded-pill py-2 px-4"
                href="https://example.com"
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.8s"
            style={{
              visibility: "visible",
              animationDelay: "0.8s",
              animationName: "fadeInUp",
            }}
          >
            <div className="feature-item px-4 pb-4 pt-0">
              <div className="feature-icon p-4 mb-4">
                <i className="icon fa fa-headphones fa-3x"></i>
              </div>
              <h4 className="mb-4">24/7 Fast Support</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                laborum odit pariatur...
              </p>
              <a
                className=" learn-more btn btn-primary rounded-pill py-2 px-4"
                href="https://example.com"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
