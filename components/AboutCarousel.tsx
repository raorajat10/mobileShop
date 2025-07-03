"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/about1.webp", "/about2.webp", "/about3.webp", "/about4.webp", "/about5.webp", "/about6.webp", "/about7.webp", "/about8.webp", "/about9.jpg", "/about10.webp", "/about11.webp", "/about12.webp", "/about13.webp", "/about14.webp", "/about15.webp", "/about16.webp", "/about17.webp", "/about18.webp", "/about19.webp", "/about20.webp"];

export default function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300); // Fade out, then switch
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full w-xl mx-auto overflow-hidden rounded-lg shadow-lg h-[410px] relative">
      <Image
        key={index}
        src={images[index]}
        alt={`About Image ${index + 1}`}
        width={850}
        height={550}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );
}
