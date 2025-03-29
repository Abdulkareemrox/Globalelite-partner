import React from "react";

const Services = () => {
  const services = [
    { title: "Consulting", desc: "Expert guidance for business growth." },
    { title: "Development", desc: "Building high-performance applications." },
    { title: "Support", desc: "24/7 assistance for seamless operations." }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
