import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

// React Icons
import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm header">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link
          className="navbar-brand fw-bold fs-3 "
          to="/"
          style={{ color: "#BF9264", fontStyle: "italic" }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/cheerful-human-tooth-ai-generated-271130067.jpg"
            alt=""
            width={"50px"}
            height={"50px"}
            style={{ borderRadius: "50%" }}
          />
          Todays Dental
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-1" to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-1"
                to="/about"
              >
                <FaInfoCircle /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-1"
                to="/services"
              >
                <FaServicestack /> Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-1"
                to="/contact"
              >
                <FaPhone /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
