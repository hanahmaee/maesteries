import React from "react";
import { ServiceData } from "../../constants/index";

const Library = () => {
  return (
    <div className="library-container">
      <h1 className="library-title">My Wattpad Library</h1>
      <div className="card-grid">
        {ServiceData.map((service, index) => {
          const Icon = service.icon;
          return (
            <a
              href={service.link}
              key={index}
              className="card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="card-image"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              >
                <div className="icon-container">
                  <Icon size={30} />
                </div>
              </div>
              <div className="card-info">
                <p><strong>Genre:</strong> {service.genre}</p>
                <p><strong>Status:</strong> {service.status}</p>
                <p><strong>Chapters:</strong> {service.chapters}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
