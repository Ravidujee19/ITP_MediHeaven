import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCarousel from "./HomeCarousel";
import FeaturesSection from "./Features";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import BlogSection from "./BlogSection";

const Home = () => {
  return (
    <div>
      <header className="text-center  bg-light">
        <HomeCarousel />
        <br></br>
        <div className="container">
          <h1>Personalize Your Health & Wellness</h1>
          <p>Expert guidance, diet plans, and support all in one place.</p>
          <a href="/login" className="btn btn-success">
            Get Started
          </a>
        </div>
        <br></br>
      </header>

      <FeaturesSection />


      <AboutUs />
      {/* About Section */}
      {/* <section
        id="about"
        className="py-5 text-center"
        style={{ backgroundColor: "#d4edda" }}
      >
        <div className="container">
          <h2>About Us</h2>
          <p>
            At <strong>MediHeaven</strong>, we’re redefining the way you manage
            health and wellness. Our all-in-one platform helps you track your
            health, receive personalized wellness guidance, consult with
            doctors, and manage prescriptions—all in one secure, easy-to-use
            space. We’re here to empower you to take charge of your well-being
            anytime, anywhere.
          </p>
        </div>
      </section> */}

      <BlogSection/> 
      <Footer />
    </div>
  );
};

export default Home;
