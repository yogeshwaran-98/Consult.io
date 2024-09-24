import React from "react";

import "../components/Footer.styles.css";

function Footer() {
  return (
    <div
      class="container-fluid footer py-5 wow animate__animated animate__fadeIn"
      data-wow-delay="0.2s"
      style={{ backgroundColor: "#16243D" }}
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-xl-9">
            <div class="mb-5">
              <div class="row g-4">
                <div class="col-md-6 col-lg-6 col-xl-5">
                  <div class="footer-item">
                    <a href="index.html" class="p-0">
                      <h3 class="text-white">
                        <i class="fab fa-slack me-3"></i> Consult.io
                      </h3>
                      {/* <img src="img/logo.png" alt="Logo" /> */}
                    </a>
                    <p class="text-white mb-4" style={{ lineHeight: "2.2" }}>
                      Empowering Your Business with Expert Insights.
                    </p>
                    <div class="footer-btn d-flex">
                      <a
                        class="btn btn-md-square rounded-circle me-3  px-3 py-2"
                        href="#"
                      >
                        <i
                          class="fa-brands fa-facebook-f"
                          style={{ color: "#126baf" }}
                        ></i>
                      </a>
                      <a
                        class="btn btn-md-square rounded-circle me-3  px-3 py-2"
                        href="#"
                      >
                        <i
                          class="fab fa-twitter"
                          style={{ color: "#126baf" }}
                        ></i>
                      </a>
                      <a
                        class="btn btn-md-square rounded-circle me-3 px-3 py-2"
                        href="#"
                      >
                        <i
                          class="fab fa-instagram"
                          style={{ color: "#126baf" }}
                        ></i>
                      </a>
                      <a
                        class="btn btn-md-square rounded-circle me-0 px-3 py-2"
                        href="#"
                      >
                        <i
                          class="fab fa-linkedin-in"
                          style={{ color: "#126baf" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                  <div class="footer-item" style={{ lineHeight: "2.2" }}>
                    <h4 class="text-white mb-4">Useful Links</h4>
                    <a class="d-block" href="#">
                      <i class="fas fa-angle-right me-2  "></i>{" "}
                      <span class="text-white-50">About Us</span>
                    </a>
                    <a class="d-block" href="#">
                      <i class="fas fa-angle-right me-2"></i>
                      <span class="text-white-50">Features</span>
                    </a>
                    <a class="d-block" href="#">
                      <i class="fas fa-angle-right me-2"></i>
                      <span class="text-white-50">Services</span>
                    </a>
                    <a class="d-block" href="#">
                      <i class="fas fa-angle-right me-2"></i>
                      <span class="text-white-50">FAQ's</span>
                    </a>
                    <a class="d-block" href="#">
                      <i class="fas fa-angle-right me-2"></i>
                      <span class="text-white-50">Blogs</span>
                    </a>
                    <a class="d-block" href="#">
                      <i class="fas fa-angle-right me-2"></i>
                      <span class="text-white-50">Contact</span>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-4">
                  <div class="footer-item">
                    <h4 class="mb-4 text-white">Instagram</h4>
                    <div class="row g-3  ">
                      <div class="col-4 rounded   ">
                        <div class="footer-instagram bg-white rounded position-relative overflow-hidden ">
                          <img
                            src={image}
                            class="img-fluid w-100 hover-zoom "
                            alt=""
                          />
                          <div class="footer-search-icon d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                            <a
                              href="img/instagram-footer-1.jpg"
                              data-lightbox="footerInstagram-1"
                              class="my-auto"
                            >
                              <i class="fas fa-link "></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="footer-instagram bg-white  rounded position-relative overflow-hidden">
                          <img
                            src={image}
                            class="img-fluid w-100 hover-zoom"
                            alt=""
                          />
                          <div class="footer-search-icon d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                            <a
                              href="img/instagram-footer-1.jpg"
                              data-lightbox="footerInstagram-1"
                              class="my-auto"
                            >
                              <i class="fas fa-link "></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="footer-instagram bg-white rounded position-relative overflow-hidden">
                          <img
                            src={image}
                            class="img-fluid w-100 hover-zoom"
                            alt=""
                          />
                          <div class="footer-search-icon d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                            <a
                              href="img/instagram-footer-1.jpg"
                              data-lightbox="footerInstagram-1"
                              class="my-auto"
                            >
                              <i class="fas fa-link "></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="footer-instagram bg-white rounded position-relative overflow-hidden">
                          <img
                            src={image}
                            class="img-fluid w-100 hover-zoom"
                            alt=""
                          />
                          <div class="footer-search-icon d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                            <a
                              href="img/instagram-footer-1.jpg"
                              data-lightbox="footerInstagram-1"
                              class="my-auto"
                            >
                              <i class="fas fa-link "></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="footer-instagram bg-white rounded position-relative overflow-hidden">
                          <img
                            src={image}
                            class="img-fluid w-100 hover-zoom"
                            alt=""
                          />
                          <div class="footer-search-icon d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                            <a
                              href="img/instagram-footer-1.jpg"
                              data-lightbox="footerInstagram-1"
                              class="my-auto"
                            >
                              <i class="fas fa-link "></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="footer-instagram bg-white rounded position-relative overflow-hidden">
                          <img
                            src={image}
                            class="img-fluid w-100 hover-zoom"
                            alt=""
                          />
                          <div class="footer-search-icon d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                            <a
                              href="img/instagram-footer-1.jpg"
                              data-lightbox="footerInstagram-1"
                              class="my-auto"
                            >
                              <i class="fas fa-link "></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="pt-5"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
            >
              <div class="row g-0">
                <div class="col-12">
                  <div class="row g-4">
                    <div class="col-lg-6 col-xl-4">
                      <div class="d-flex">
                        <div class="btn-xl-square bg-primary text-white rounded px-3 py-2 me-4">
                          <i class="fas fa-map-marker-alt fa-2x h-8 w-8 mt-1"></i>
                        </div>
                        <div>
                          <h4 class="text-white">Address</h4>
                          <p class="mb-0 text-secondary ">
                            123 Street New York.USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-xl-4">
                      <div class="d-flex">
                        <div class="btn-xl-square bg-primary text-white rounded px-3 py-2 me-4">
                          <i class="fas fa-envelope fa-2x h-8 w-8 mt-1"></i>
                        </div>
                        <div>
                          <h4 class="text-white">Mail Us</h4>
                          <p class="mb-0 text-secondary">info@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-xl-4">
                      <div class="d-flex">
                        <div class="btn-xl-square bg-primary text-white rounded px-3 py-2 me-4">
                          <i class="fa fa-phone-alt fa-2x h-8 w-8 mt-1"></i>
                        </div>
                        <div>
                          <h4 class="text-white">Telephone</h4>
                          <p class="mb-0 text-secondary">(+012) 3456 7890</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3">
            <div class="footer-item">
              <h4 class="text-white mb-4">Newsletter</h4>
              <p class="text-white mb-3" style={{ lineHeight: "2.2" }}>
                Subscribe to our Newsletter to stay updated
              </p>
              <div class="position-relative rounded-pill mb-4">
                <input
                  class="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  class="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
              <div class="d-flex flex-shrink-0">
                <div class="footer-btn">
                  <a
                    href="#"
                    class="btn btn-lg-square rounded-circle   position-relative wow animate__animated animate__tada"
                    data-wow-delay=".9s"
                  >
                    <i
                      class="fa fa-phone-alt fa-2x text-primary px-1 py-2"
                      style={{ transform: "rotate(90deg)" }}
                    ></i>
                    <div
                      class="position-absolute"
                      style={{ top: "2px", right: "12px" }}
                    >
                      <span>
                        <i class="fa fa-comment-dots text-secondary text-info"></i>
                      </span>
                    </div>
                  </a>
                </div>
                <div class="d-flex flex-column ms-3 flex-shrink-0">
                  <span class="text-white">Call to Our Experts</span>
                  <a href="tel:+ 0123 456 7890">
                    <span class="text-white">Free: + 0123 456 7890</span>
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

export default Footer;
