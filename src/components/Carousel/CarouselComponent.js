import React from "react";
import "./carousel.styles.css";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
import image from "../../images/png-image.png";

function CarouselComponent() {
  return (
    <div
      className="header-carousel owl-carousel"
      style={{ backgroundColor: "#014CA1" }}
    >
      <div className="header-carousel-item bg-primary">
        <div className="carousel-caption">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7 wow animate__animated animate__fadeInLeft">
                <div
                  className="text-sm-center text-md-start"
                  style={{ paddingLeft: "-100px" }}
                >
                  <h4 className="text-white  text-uppercase fw-bold mb-4">
                    Welcome To Consult.io
                  </h4>
                  <h1 className="display-1  text-white mb-4 fw-bold ">
                    Your Insightful Partner for Success.
                  </h1>
                  <p className="mb-5 fs-5">
                    Consult.io offers tailored consulting solutions to drive
                    growth and innovation. Our expert team helps businesses
                    overcome challenges and achieve their goals, ensuring
                    impactful results.
                  </p>
                  <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                    <a
                      className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2 bg-white"
                      href="#"
                    >
                      <i
                        className="fas fa-play-circle me-2 "
                        style={{ color: "blue" }}
                      ></i>
                      <span class="text-primary"> Watch Video</span>
                    </a>
                    <a
                      className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2 bg-black"
                      href="#"
                    >
                      <span class="text-white">Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow animate__animated animate__fadeInRight">
                <div
                  className="calrousel-img"
                  style={{
                    objectFit: "cover",
                    height: "400px",
                    width: "600px",
                  }}
                >
                  <img src={image} lassName="img-fluid w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-carousel-item bg-primary">
        <div className="carousel-caption">
          <div className="container">
            <div className="row gy-4 gy-lg-0 gx-0 gx-lg-5 align-items-center">
              <div className="col-lg-5 animated fadeInLeft">
                <div className="calrousel-img">
                  <img
                    src="img/carousel-2.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
