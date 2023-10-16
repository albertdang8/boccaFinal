import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <div className="max-w-[800px] w-full rounded-sm">
        <img
          src="/wood-logo.jpg"
          alt="Bocca Bocca logo"
          className="rounded-lg"
        />
      </div>
      <div>
        <h1>Summary</h1>
      </div>
      <div>
        <h1>Contact</h1>
      </div>
    </section>
  );
};

export default HeroSection;
