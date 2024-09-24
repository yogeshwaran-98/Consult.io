import React from "react";
import "./Team.styles.css";
import team from "../images/team.png";

function Team() {
  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-4 mb-4 fw-bold">
            Meet Our Expert Team Members
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
          >
            <div className="team-item">
              <div className="team-img">
                <img
                  src={team}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="team-title p-4">
                <h4 className="mb-0">John Doe</h4>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="team-item">
              <div className="team-img">
                <img
                  src={team}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="team-title p-4">
                <h4 className="mb-0">John Doe</h4>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="team-item">
              <div className="team-img">
                <img
                  src={team}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="team-title p-4">
                <h4 className="mb-0">John Doe</h4>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="team-item">
              <div className="team-img">
                <img
                  src={team}
                  className="img-fluid rounded-top w-100"
                  alt=""
                />
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-2"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-pill mb-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="team-title p-4">
                <h4 className="mb-0">John Doe</h4>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
