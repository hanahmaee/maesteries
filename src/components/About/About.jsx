import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import bg from "../../assets/bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../../constants/index";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";

const About = () => {
  const swiperRef = useRef(null);
  const slicedServiceData = ServiceData.slice(0, 9);

  const prevSlide = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slideNext();
    }
  };

  return (
    <>
      {/* Writer's Info Section */}
      <div className="bg-gradient-to-b from-gray-200 to-white text-center pt-22">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-primary text-lg mb-1"
        >
          Hi, I’m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-primary leading-tight mt-[-18px]"
        >
          Maesteries
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary text-lg italic mt-[-5px]"
        >
          /w-r-IT-er/ • noun
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-[550px] px-6 lg:px-16">
        {/* Quote & Social Media */}
        <div className="flex flex-col justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl md:text-5xl font-semibold text-primary leading-tight"
          >
            Exploring every moment, experiences, and unsaid thoughts through different stories.
          </motion.h1>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 justify-center mt-6"
          >
            <a href="https://twitter.com/maesteries" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-opacity-80 cursor-pointer">
              <FaSquareXTwitter />
            </a>
            <a href="https://instagram.com/maesteries" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-opacity-80 cursor-pointer">
              <FaInstagramSquare />
            </a>
            <a href="https://www.facebook.com/neifile.steinitz" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-opacity-80 cursor-pointer">
              <FaFacebookSquare />
            </a>
            <a href="https://tiktok.com/@maesteries" target="_blank" rel="noopener noreferrer" className="text-primary text-3xl hover:text-opacity-80 cursor-pointer">
              <AiFillTikTok />
            </a>
          </motion.div>
        </div>

        {/* About Image */}
        <div className="flex justify-center mt-6 md:mt-0">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 }}
            src={bg}
            alt="Books Display"
            className="w-[350px] md:w-[500px] lg:w-[650px]"
          />
        </div>
      </div>

      {/* Story Carousel */}
      <div className="flex flex-col items-center py-8 px-4 w-full">
        <h2 className="text-brown-700 text-xl font-semibold mb-4 text-center">
          Read the <span className="font-bold">maesterious</span> stories now!
        </h2>

        <div className="relative flex flex-col justify-center items-center w-full max-w-4xl">
          {/* Swiper Carousel */}
          <div className="relative w-full">
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}
              pagination={{ clickable: true }} // Using Swiper's built-in pagination
              modules={[FreeMode, Pagination]}
              className="w-full"
            >
              {slicedServiceData.map((story, index) => (
                <SwiperSlide key={index} className="p-7 flex justify-center">
                  <div className="p-4 rounded-xl shadow-md transition-all duration-500 w-60">
                    <img 
                      src={story.backgroundImage} 
                      alt={`Story ${index}`} 
                      className="w-full h-85 object-cover rounded-md" 
                    />
                    <h3 className="text-lg font-bold mt-2 text-center">{story.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Left Arrow */}
            <button 
              onClick={prevSlide} 
              className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 p-2
              rounded-full text-4xl text-primary hover:text-secondary transition"
            >
              <BiSolidLeftArrowSquare />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide} 
              className="absolute right-[-50px] top-1/2 transform -translate-y-1 p-2
              rounded-full text-4xl text-primary hover:text-secondary transition"
            >
              <BiSolidRightArrowSquare />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
