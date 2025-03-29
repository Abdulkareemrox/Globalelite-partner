import React from "react";

const Services = () => {
  const services = [
    { title: "Consulting", desc: "Expert guidance for business growth." },
    { title: "Development", desc: "Building high-performance applications." },
    { title: "Support", desc: "24/7 assistance for seamless operations." }
  ];

  return (
    <section className="section bg-gray-100">
      <h2 className="section-title">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
