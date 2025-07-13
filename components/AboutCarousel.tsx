"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/about1.webp", "/about2.webp", "/about3.jpg", "/about4.jpg", "/about5.webp", "/about6.webp", "/about7.webp", "/about8.webp", "/about11.webp","/about13.webp",];

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
    <div className="w-full w-xl mx-auto overflow-hidden rounded-lg shadow-lg h-[435px] relative">
      <Image
        key={index}
        src={images[index]}
        alt={`About Image ${index + 1}`}
        width={850}
        height={600}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );
}
