const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Intro */}
        <div className="about-intro">
          <div className="about-text">
            <h2 className="about-title">About Todays Dental</h2>
            <p className="about-description">
              At Todays Dental, we are committed to providing compassionate,
              high-quality dental care to every patient. Our state-of-the-art
              clinic is equipped with modern tools and experienced professionals
              to ensure comfort and excellence in every treatment.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://getwallpapers.com/wallpaper/full/9/0/7/923023-best-dentist-wallpapers-1920x1080.jpg"
              alt="Dental Team"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="about-mission">
          <div className="mission-image">
            <img
              src="https://i.pinimg.com/originals/39/46/f8/3946f8df9f3b519fe3c087fa1ec43aff.jpg"
              alt="Dental Care Philosophy"
            />
          </div>
          <div className="mission-text">
            <h3 className="mission-title">Our Mission & Philosophy</h3>
            <p>
              We believe dental care should be gentle, stress-free, and
              personalized. Our goal is to empower you to achieve optimal oral
              health and a confident smile through preventive care, education,
              and the latest dental advancements.
            </p>
          </div>
        </div>

        {/* Doctor Profile */}
        <div className="about-doctor">
          <h3 className="doctor-title">Meet Dr. Sarah Smith</h3>
          <div className="doctor-profile">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
              alt="Dr. Sarah Smith"
              className="doctor-img"
            />
            <div className="doctor-info">
              <p>
                With over 15 years of experience in general and cosmetic
                dentistry, Dr. Smith is passionate about providing gentle,
                patient-focused care. Her dedication to continuing education and
                use of advanced techniques ensures every patient receives the
                best treatment possible.
              </p>
              <ul>
                <li>🎓 DDS, University of California</li>
                <li>🏅 ADA Board Certified</li>
                <li>🦷 Specialized in Cosmetic & Preventive Care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
