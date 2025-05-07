import React from "react";
import { ServiceData } from "../../constants/index";

const Library = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-8">
      <h1 className="text-4xl font-extrabold text-center text-[#4B2C20] mb-6">
        Published Stories
      </h1>

      {/* 3x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ServiceData.map((service, index) => {
          const titleParts = service.title.split(" "); // Split title by space
          return (
            <a
              href={service.link}
              key={index}
              className="flex rounded-xl border border-[#D6B79E] shadow-md overflow-hidden hover:shadow-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Book Cover */}
              <div className="w-1/3 min-w-[100px] max-w-[130px]">
                <img
                  src={service.backgroundImage}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Book Info */}
              <div className="w-2/3 p-4 flex flex-col">
                <div className="flex-1">
                  {/* Title Split */}
                  <h2 className="text-2xl font-bold text-[#4B2C20]">
                    <span>{titleParts.slice(0, 2).join(" ")}</span>
                    <br />
                    <span>{titleParts.slice(2).join(" ")}</span>
                  </h2>
                  <p className="text-sm text-gray-700 mt-1">
                    <strong>Genre:</strong> {service.genre}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Status:</strong> {service.status}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Chapters:</strong> {service.chapters}
                  </p>
                </div>

                <div className="mt-4">
                  <span
                    className={`block py-2 px-4 text-center font-semibold text-base transition
                      bg-primary text-white rounded-lg hover:bg-secondary hover:scale-105`}
                  >
                    Read on Wattpad
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
