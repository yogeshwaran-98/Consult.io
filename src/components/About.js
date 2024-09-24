import React from "react";
import CountUp from "react-countup";
import image from "../images/png-image.png";

function About() {
  return (
    <div class="container-fluid bg-light about pb-5">
      <div class="container pb-5">
        <div class="row g-5">
          <div
            class="col-xl-6 wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
          >
            <div class="about-item-content bg-white rounded p-5 h-100">
              <h4 class="text-primary">About Our Company</h4>
              <h1 class="display-4 mb-4 fw-bold">
                Comprehensive Protection Solutions
              </h1>
              <p>
                At Consult.io, we specialize in delivering a wide range of
                protection services tailored to your needs. Our team is
                dedicated to helping you navigate risks with confidence and
                ensuring your assets are safeguarded.
              </p>
              <p>
                We understand that effective protection means being flexible.
                That's why our life insurance plans are designed to adapt to
                your unique circumstances, providing peace of mind and financial
                security.
              </p>
              <p class="text-dark">
                <i class="fa fa-check text-primary me-3"></i>Cost Savings
              </p>
              <p class="text-dark">
                <i class="fa fa-check text-primary me-3"></i>Diverse Services
              </p>
              <p class="text-dark mb-4">
                <i class="fa fa-check text-primary me-3"></i>Flexible Terms
              </p>
              <a class="btn btn-primary rounded-pill py-3 px-5" href="#">
                More Information
              </a>
            </div>
          </div>
          <div
            class="col-xl-6 wow animate__animated animate__fadeInRight"
            data-wow-delay="0.2s"
          >
            <div class="bg-white rounded p-5 h-100">
              <div class="row g-4 justify-content-center">
                <div class="col-12">
                  <div class="rounded bg-light">
                    <img src={image} class="img-fluid rounded w-100" alt="" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="counter-item bg-light rounded p-3 h-100">
                    <div class="counter-counting">
                      <span className="text-primary fs-2 fw-bold">
                        <CountUp end={135} duration={2} />
                      </span>
                      <span class="h1 fw-bold text-primary">+</span>
                    </div>
                    <h4 class="mb-0 text-dark">Clients</h4>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="counter-item bg-light rounded p-3 h-100">
                    <div class="counter-counting">
                      <span
                        class="text-primary fs-2 fw-bold"
                        data-toggle="counter-up"
                      >
                        <CountUp end={99} duration={2} />
                      </span>
                      <span class="h1 fw-bold text-primary">+</span>
                    </div>
                    <h4 class="mb-0 text-dark">Awards WON</h4>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="counter-item bg-light rounded p-3 h-100">
                    <div class="counter-counting">
                      <span
                        class="text-primary fs-2 fw-bold"
                        data-toggle="counter-up"
                      >
                        <CountUp end={30} duration={2} />
                      </span>
                      <span class="h1 fw-bold text-primary">+</span>
                    </div>
                    <h4 class="mb-0 text-dark">Employees</h4>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="counter-item bg-light rounded p-3 h-100">
                    <div class="counter-counting">
                      <span
                        class="text-primary fs-2 fw-bold"
                        data-toggle="counter-up"
                      >
                        <CountUp end={15} duration={2} />
                      </span>
                      <span class="h1 fw-bold text-primary">+</span>
                    </div>
                    <h4 class="mb-0 text-dark">Years</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
