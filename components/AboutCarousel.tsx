"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/about-carousel/about1.jpg", "/about-carousel/about2.jpg", "/about-carousel/about3.jpg"];

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
    <div className="w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg h-[400px] relative">
      <Image
        key={index}
        src={images[index]}
        alt={`About Image ${index + 1}`}
        width={800}
        height={500}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );
}
