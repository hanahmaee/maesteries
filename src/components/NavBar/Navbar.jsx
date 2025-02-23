import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="shadow-md">
        <div className="container flex justify-between items-center py-4 px-6">
          {/* Website Name Section */}
          <div className="text-2xl font-bold text-primary">
            Maesteries
          </div>

          {/* Centered Menu Items */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            {NavbarMenu.filter((item) => !item.isButton).map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-primary font-semibold transition hover:opacity-80"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Wattpad Button on the Right */}
          <div className="hidden md:flex">
            {NavbarMenu.filter((item) => item.isButton).map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 py-2 rounded-lg font-semibold transition hover:opacity-80"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <TiThMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full p-6">
          <ul className="flex flex-col gap-4 text-primary">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  target={item.isButton ? "_blank" : "_self"}
                  rel={item.isButton ? "noopener noreferrer" : ""}
                  className={`block py-2 px-4 text-center font-semibold transition ${
                    item.isButton
                      ? "bg-primary text-white rounded-lg hover:opacity-80"
                      : "hover:opacity-80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
