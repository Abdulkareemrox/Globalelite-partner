import React from "react";

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center">
      <h2 className="text-5xl font-extrabold animate-fade-in">Welcome to GlobalElite Partner</h2>
      <p className="text-lg mt-4 max-w-lg animate-fade-in">
        Your trusted partner for business solutions and innovation.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
        Get Started
      </button>
    </section>
  );
};

export default Home;
