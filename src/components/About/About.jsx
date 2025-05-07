import React from "react";
import ShadowImage from "../../assets/shadow.png";

const About = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-8 
    bg-gradient-to-b from-white to-gray-100 min-h-[83vh]">
      
      {/* Text Column */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
        <div className="flex flex-col items-center text-center text-[#4B2C20] space-y-5">
          
          {/* Title Block */}
          <div className="space-y-1">
            <p className="text-lg text-gray-600">Meet...</p>
            <h1 className="text-5xl md:text-6xl font-bold">Maesteries</h1>
            <p className="text-xl italic">/w-r-IT-e-r/</p>
          </div>

          {/* Description */}
          <div className="text-xl space-y-2">
            <p>: Maesteries, formerly NefileTheDreamer, already has passion in writing since then.</p>
            <p>: She was a school journalist and a chess player.</p>
            <p>: Writing is the way of expressing herself.</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-5 pt-3">
            <a
              href="https://www.wattpad.com/user/maesteries"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 rounded-lg text-xl"
            >
              Stories
            </a>
            <a
              href="https://www.facebook.com/neifile.steinitz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-5 rounded-lg text-xl"
            >
              Message
            </a>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={ShadowImage}
          alt="Silhouette of Maesteries"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default About;
