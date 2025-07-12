import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FAQ from "./components/FAQ";
import About from "./pages/About";
import Services from "./pages/Service";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
