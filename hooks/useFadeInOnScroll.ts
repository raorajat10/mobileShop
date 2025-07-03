"use client";

import { useEffect } from "react";

export function useFadeInOnScroll() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
      rootMargin: "0px 0px -100px 0px", // Adjust for desired trigger point
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, observerOptions);

    fadeInSections.forEach((section) => observer.observe(section));

    return () => {
      fadeInSections.forEach((section) => observer.unobserve(section));
    };
  }, []);
}
