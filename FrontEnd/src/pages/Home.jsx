// src/pages/Home.jsx
import FAQ from "../components/FAQ";
import "../styles/main.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your Smile is Our Priority</h1>
            <p>
              Experience exceptional dental care with our team of skilled
              professionals. We combine advanced technology with compassionate
              care to give you the healthy, beautiful smile you deserve.
            </p>
            <button className="cta-button" style={{ color: "#fff" }}>
              <Link to="/contact"> Book Appointment</Link>
            </button>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Dental Clinic"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <h2>About Our Clinic</h2>
        <p>
          At Todays Dental, we believe in combining technology and care to bring
          you the best dental experience. With experienced professionals and a
          patient-first approach, we are committed to your oral health.
        </p>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">Teeth Cleaning</div>
          <div className="service-card">Cavity Filling</div>
          <div className="service-card">Root Canal</div>
        </div>
        <button className="cta-button">
          <Link to={"/services"}>View All Services</Link>
        </button>
      </section>
      <FAQ />
    </div>
  );
};

export default Home;
