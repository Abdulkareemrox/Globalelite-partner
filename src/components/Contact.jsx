import React from "react";

const Contact = () => {
  return (
    <section className="section bg-white">
      <h2 className="section-title">Contact Us</h2>
      <form className="bg-gray-50 shadow-md p-6 rounded-lg max-w-lg w-full">
        <input type="text" placeholder="Your Name" className="block w-full p-3 mb-4 border rounded" />
        <input type="email" placeholder="Your Email" className="block w-full p-3 mb-4 border rounded" />
        <textarea placeholder="Your Message" className="block w-full p-3 mb-4 border rounded h-32"></textarea>
        <button className="w-full py-3 bg-blue-600 text-white font-bold rounded shadow-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
