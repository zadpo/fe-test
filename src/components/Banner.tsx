"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BellIcon } from "./icon/bell";

const bannerImages = ["/images/banner.png", "/images/banner2.png", "/images/banner3.png"];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-40">
      {bannerImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000   ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Casino Banner ${index + 1}`}
            layout="fill"
            priority={index === 0}
            className="p-2 rounded-lg "
          />
        </div>
      ))}
      <div className="absolute inset-0  bg-opacity-30" />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="absolute -bottom-6 left-4 ">
        <p className="flex items-center gap-1 text-blue-500">
          <BellIcon />
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
        </p>
      </div>
    </div>
  );
};

export default Banner;
