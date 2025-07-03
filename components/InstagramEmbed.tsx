"use client";

import { useEffect } from "react";

const instagramPosts = [
  "https://www.instagram.com/reel/DLHICs9Txka/",
  "https://www.instagram.com/reel/DK4D0SYz0eb/",
  "https://www.instagram.com/reel/DLFCw8hTVys/",
];

export default function InstagramSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="instagram" className="container px-4 md:px-6 py-20 fade-in-section relative">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center text-gray-800">
        Follow Us on Instagram
      </h2>
      <p className="text-center text-gray-600 mb-10">
        See our latest updates, offers, and happy customer stories.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instagramPosts.map((link, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden glass-card shadow-md flex justify-center"
          >
             <div className="max-h-[400px] overflow-hidden rounded-lg w-full">
    <blockquote
      className="instagram-media w-full"
      data-instgrm-permalink={link}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 8,
        boxShadow:
          "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        width: "100%",
      }}
    ></blockquote>
  </div>
          </div>
        ))}
      </div>
    </section>
  );
}
