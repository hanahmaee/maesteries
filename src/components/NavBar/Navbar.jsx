import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io"; // Close icon
import { NavbarMenu } from "../../mockData/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="shadow-md bg-white fixed top-0 left-0 w-full z-50">
        <div className="container flex justify-between items-center py-4 px-6">
          {/* Website Name Section */}
          <div className="text-2xl font-bold text-primary transition hover:text-secondary">
            Maesteries
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            {NavbarMenu.filter((item) => !item.isButton).map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-primary font-bold transition hover:text-secondary hover:scale-110"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Wattpad Button (Desktop) */}
          <div className="hidden md:flex">
            {NavbarMenu.filter((item) => item.isButton).map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 py-2 rounded-lg font-semibold
                transition hover:bg-secondary hover:scale-105"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary text-3xl transition hover:text-secondary hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <TiThMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-4/5 max-w-xs transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 100 }} // Ensure it's above other content
      >
        <button
          className="text-primary text-3xl absolute top-4 right-6 transition hover:text-secondary"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose />
        </button>

        <ul className="flex flex-col gap-6 mt-12 p-6">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                target={item.isButton ? "_blank" : "_self"}
                rel={item.isButton ? "noopener noreferrer" : ""}
                className={`block py-3 px-4 text-center font-semibold text-lg transition ${
                  item.isButton
                    ? "bg-primary text-white rounded-lg hover:bg-secondary hover:scale-105"
                    : "text-primary hover:text-secondary hover:scale-105"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
