import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import "lightbox2/dist/css/lightbox.min.css";
import $ from "jquery";
import WOW from "wowjs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
import CountUp from "react-countup";

import Topbar from "./components/Topbar";
import Navbar from "./components/NavbarComponent";
import Carousel from "./components/Carousel/CarouselComponent";
import About from "./components/About";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Team from "./components/Teams";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Carousel />
      <Feature />
      <About />
      <Service />
      <Faq />
      {/* <Blog /> */}
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
