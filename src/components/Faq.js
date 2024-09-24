import React from "react";
import image from "../images/png-image.png";

function Faq() {
  return (
    <div class="container-fluid faq-section bg-light py-5">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div
            class="col-xl-6 wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.2s"
          >
            <div class="h-100">
              <div class="mb-5">
                <h4 class="text-primary">Some Important FAQ's</h4>
                <h1 class="display-4 mb-0 fw-bold">
                  Common Frequently Asked Questions
                </h1>
              </div>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button border-0 "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Q: What services does your consulting firm offer?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show active"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    onclick="this.classList.toggle('bg-primary');this.classList.toggle('rounded-top');this.classList.toggle('bg-primary');"
                  >
                    <div class="accordion-body rounded">
                      A: We provide a range of services including strategic
                      planning, operational improvement, financial advisory, and
                      technology consulting to help businesses grow and improve
                      efficiency.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      onclick="this.classList.toggle('bg-primary');this.classList.toggle('rounded-top');"
                    >
                      Q: How can consulting help my business?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A: Consulting provides expert insights and solutions
                      tailored to your business challenges, helping to optimize
                      processes, reduce costs, and implement effective
                      strategies for long-term success.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      onclick="this.classList.toggle('bg-primary');this.classList.toggle('rounded-top');"
                    >
                      Q: How long does a typical consulting project take?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      A: The timeline depends on the scope and complexity of the
                      project, but most engagements range from a few weeks to
                      several months, with clear milestones and deliverables.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-6 wow animate__animated animate__fadeInRight"
            data-wow-delay="0.4s"
          >
            <img src={image} class="img-fluid w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
