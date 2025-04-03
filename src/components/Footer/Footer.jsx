import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {/* Shadow Line Before Footer */}
      <div className="w-full h-1 bg-gray-400 shadow-lg opacity-10"></div>
      
      <footer className="bg-white py-6 text-center shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Title Section */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Writer’s Haven</h2>
            <p className="text-gray-600 text-sm md:text-base mt-1">A sanctuary for the works of Maesteries.</p>
          </div>

          {/* Description Section */}
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-700 text-sm md:text-md">
              Communicate with Maesteries <br /> and give feedback on her stories!
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex justify-center gap-6 sm:gap-8 md:gap-10">
            <a
              href="https://www.instagram.com/maesteries"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-primary text-white px-4 py-2 rounded-md text-xs font-semibold transition hover:bg-secondary hover:scale-105"
            >
              <FaInstagram className="text-white text-lg mb-1" />
              <span>@maesteries</span>
            </a>

            <a
              href="https://www.facebook.com/NeifileSteinitz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-primary text-white px-4 py-2 rounded-md text-xs font-semibold transition hover:bg-secondary hover:scale-105"
            >
              <FaFacebookF className="text-white text-lg mb-1" />
              <span>Neifile Steinitz</span>
            </a>

            <a
              href="mailto:neifilethedreamer@gmail.com"
              className="flex flex-col items-center bg-primary text-white px-4 py-2 rounded-md text-xs font-semibold transition hover:bg-secondary hover:scale-105"
            >
              <MdEmail className="text-white text-lg mb-1" />
              <span>neifilethedreamer@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="text-gray-700 text-xs md:text-sm">All Rights Reserved &copy; 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
