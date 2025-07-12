import React from "react";

const services = [
  {
    title: "General Dentistry",
    description: "Routine check-ups, cleanings, fillings, and preventive care.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.Nv6-lh5SRKOqJW_fUOPdfwHaE8?pid=Api&P=0&h=180",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and aesthetic smile design.",
    image:
      "https://www.fitzgeralddentistry.com/wp-content/uploads/2018/12/cosmetic-dentistry-in-Murfreesboro.jpg",
  },
  {
    title: "Orthodontics",
    description: "Braces and Invisalign for teeth alignment.",
    image:
      "https://conwayhousedental.co.uk/wp-content/uploads/2021/06/tauntonorthodontics-why-orthodontic-treatment-is-important.png",
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle dental care for children of all ages.",
    image:
      "https://nolesfamilydentistry.com/wp-content/uploads/2022/01/Pediatric-min-scaled.jpg",
  },
  {
    title: "Dental Implants",
    description: "Permanent solutions to missing teeth.",
    image:
      "https://www.regencysquaredental.com/wp-content/uploads/2018/12/Dental-Implant.png",
  },
  {
    title: "Emergency Care",
    description: "24/7 support for dental emergencies.",
    image:
      "https://www.brightsmilesdentist.com/wp-content/uploads/2023/06/Emergency-Dental-Care-3.jpg",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Dental Services</h2>
        <p className="services-subtitle">
          Personalized care using the latest dental technology
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-img"
              />
              <h3 className="service-name">{service.title}</h3><br/>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
