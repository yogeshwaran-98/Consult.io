import React, { useState, useRef, useEffect } from "react";
import image from "../images/team.png";

function Testimonial() {
  const stageRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const itemWidth = 660.5;

  function moveCarousel(direction) {
    const stage = stageRef.current;
    if (!stage) return;

    const stageWidth = stage.offsetWidth;
    const maxPosition = -(stageWidth - itemWidth);

    let newPosition = currentPosition + direction * itemWidth;

    if (newPosition > 0) {
      newPosition = 0;
    } else if (newPosition < maxPosition) {
      newPosition = maxPosition;
    }

    console.log("Current Position:", currentPosition);
    console.log("New Position:", newPosition);

    stage.style.transform = `translate3d(${newPosition}px, 0px, 0px)`;
    setCurrentPosition(newPosition);
  }

  useEffect(() => {
    console.log("Stage Ref:", stageRef.current);
  }, []);

  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
          style={{
            maxWidth: "800px",
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        >
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-4 mb-4 fw-bold">
            What Our Customers Are Saying
          </h1>
          <p className="mb-0">
            Consult.io offers tailored consulting solutions to drive growth and
            innovation. Our expert team helps businesses overcome challenges and
            achieve their goals, ensuring impactful results.
          </p>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow animate__animated animate__fadeInUp owl-loaded owl-drag"
          data-wow-delay="0.2s"
          style={{
            height: "200px",
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              ref={stageRef}
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transition: "all 1.5s ease 0s",
                width: "4624px",
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: "635.5px", marginRight: "25px" }}
              >
                <div className="testimonial-item  rounded">
                  <div className="row g-0">
                    <div className="col-4  col-lg-4 col-xl-3">
                      <div className="h-100">
                        <img
                          src={image}
                          className="img-fluid h-100 rounded"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-8 col-lg-8 col-xl-9">
                      <div className="d-flex flex-column my-auto text-start p-4">
                        <h4 className="text-dark mb-0">John Doe</h4>
                        <p className="mb-3">Profession</p>
                        <div className="d-flex text-primary mb-3">
                          <i
                            className="fas fa-star "
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i className="fas fa-star text-body"></i>
                        </div>
                        <p className="mb-0">
                          Consult.io offers tailored consulting solutions to
                          drive growth and innovation. Our expert team helps
                          businesses overcome challenges and achieve their
                          goals, ensuring impactful results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "635.5px", marginRight: "25px" }}
              >
                <div className="testimonial-item  rounded">
                  <div className="row g-0">
                    <div className="col-4  col-lg-4 col-xl-3">
                      <div className="h-100">
                        <img
                          src={image}
                          className="img-fluid h-100 rounded"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-8 col-lg-8 col-xl-9">
                      <div className="d-flex flex-column my-auto text-start p-4">
                        <h4 className="text-dark mb-0">John Doe</h4>
                        <p className="mb-3">Profession</p>
                        <div className="d-flex text-primary mb-3">
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i className="fas fa-star text-body"></i>
                          <i className="fas fa-star text-body"></i>
                        </div>
                        <p className="mb-0">
                          Consult.io offers tailored consulting solutions to
                          drive growth and innovation. Our expert team helps
                          businesses overcome challenges and achieve their
                          goals, ensuring impactful results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "635.5px", marginRight: "25px" }}
              >
                <div className="testimonial-item bg-light rounded">
                  <div className="row g-0">
                    <div className="col-4  col-lg-4 col-xl-3">
                      <div className="h-100">
                        <img
                          src={image}
                          className="img-fluid h-100 rounded"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-8 col-lg-8 col-xl-9">
                      <div className="d-flex flex-column my-auto text-start p-4">
                        <h4 className="text-dark mb-0">John Doe</h4>
                        <p className="mb-3">Profession</p>
                        <div className="d-flex text-primary mb-3">
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                        </div>
                        <p className="mb-0">
                          Consult.io offers tailored consulting solutions to
                          drive growth and innovation. Our expert team helps
                          businesses overcome challenges and achieve their
                          goals, ensuring impactful results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "635.5px", marginRight: "25px" }}
              >
                <div className="testimonial-item bg-light rounded">
                  <div className="row g-0">
                    <div className="col-4  col-lg-4 col-xl-3">
                      <div className="h-100">
                        <img
                          src={image}
                          className="img-fluid h-100 rounded"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-8 col-lg-8 col-xl-9">
                      <div className="d-flex flex-column my-auto text-start p-4">
                        <h4 className="text-dark mb-0">John Doe</h4>
                        <p className="mb-3">Profession</p>
                        <div className="d-flex text-primary mb-3">
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i className="fas fa-star text-body"></i>
                        </div>
                        <p className="mb-0">
                          Consult.io offers tailored consulting solutions to
                          drive growth and innovation. Our expert team helps
                          businesses overcome challenges and achieve their
                          goals, ensuring impactful results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "635.5px", marginRight: "25px" }}
              >
                <div className="testimonial-item bg-light rounded">
                  <div className="row g-0">
                    <div className="col-4  col-lg-4 col-xl-3">
                      <div className="h-100">
                        <img
                          src={image}
                          className="img-fluid h-100 rounded"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-8 col-lg-8 col-xl-9">
                      <div className="d-flex flex-column my-auto text-start p-4">
                        <h4 className="text-dark mb-0">John Doe</h4>
                        <p className="mb-3">Profession</p>
                        <div className="d-flex text-primary mb-3">
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i className="fas fa-star text-body"></i>
                          <i className="fas fa-star text-body"></i>
                        </div>
                        <p className="mb-0">
                          Consult.io offers tailored consulting solutions to
                          drive growth and innovation. Our expert team helps
                          businesses overcome challenges and achieve their
                          goals, ensuring impactful results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "635.5px", marginRight: "25px" }}
              >
                <div className="testimonial-item bg-light rounded">
                  <div className="row g-0">
                    <div className="col-4  col-lg-4 col-xl-3">
                      <div className="h-100">
                        <img
                          src={image}
                          className="img-fluid h-100 rounded"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-8 col-lg-8 col-xl-9">
                      <div className="d-flex flex-column my-auto text-start p-4">
                        <h4 className="text-dark mb-0">John Doe</h4>
                        <p className="mb-3">Profession</p>
                        <div className="d-flex text-primary mb-3">
                          <i
                            className="fas fa-star "
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                        </div>
                        <p className="mb-0">
                          Consult.io offers tailored consulting solutions to
                          drive growth and innovation. Our expert team helps
                          businesses overcome challenges and achieve their
                          goals, ensuring impactful results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "635.5px", marginRight: "25px" }}
              >
                <div className="testimonial-item bg-light rounded">
                  <div className="row g-0">
                    <div className="col-4  col-lg-4 col-xl-3">
                      <div className="h-100">
                        <img
                          src={image}
                          className="img-fluid h-100 rounded"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-8 col-lg-8 col-xl-9">
                      <div className="d-flex flex-column my-auto text-start p-4">
                        <h4 className="text-dark mb-0">John Doe</h4>
                        <p className="mb-3">Profession</p>
                        <div className="d-flex text-primary mb-3">
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i
                            className="fas fa-star"
                            style={{ color: "blue" }}
                          ></i>
                          <i className="fas fa-star text-body"></i>
                        </div>
                        <p className="mb-0">
                          Consult.io offers tailored consulting solutions to
                          drive growth and innovation. Our expert team helps
                          businesses overcome challenges and achieve their
                          goals, ensuring impactful results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="owl-nav"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="owl-prev" onClick={() => moveCarousel(+1)}>
              <i className="fa fa-arrow-left"></i>
            </div>
            <div className="owl-next" onClick={() => moveCarousel(-1)}>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
