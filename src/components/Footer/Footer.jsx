import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {/* Shadow Line Before Footer */}
      <div className="w-full h-1 bg-gray-400 shadow-lg opacity-75"></div>
      
      <footer className="bg-white py-6 text-center shadow-md">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center space-y-4 md:space-y-0">
          {/* Title Section */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Writer’s Haven</h2>
            <p className="text-gray-600 text-sm mt-1">A sanctuary for passionate writers and readers.</p>
          </div>

          {/* Description Section */}
          <div>
            <p className="text-gray-700 text-sm">
              Communicate with Maesteries <br /> and give feedback on her stories!
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/"
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
          <p className="text-gray-700 text-xs">All Rights Reserved &copy; 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
