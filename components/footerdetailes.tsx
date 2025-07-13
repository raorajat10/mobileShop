"use client";

import { useState } from "react";
import {
  Smartphone,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";


function toggleSupportInfo(infoType: string) {
  const supportUrls: Record<string, string> = {
    "contact us": "/support/contact",
    faq: "/support/faq",
    warranty: "/support/warranty",
    returns: "/support/returns",
  };
  const url = supportUrls[infoType];
  if (url) {
    window.open(url, "_blank");
  }
}

function smoothScrollTo(selector: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function FooterSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="border-b border-gray-200 md:border-none pb-2">
      <button
        onClick={toggleSection}
        className="w-full flex justify-between items-center md:cursor-default"
      >
        <span className="text-sm font-medium text-gray-800">{title}</span>
        {isMobile && (
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      <ul
        className={`mt-2 space-y-1 text-sm text-gray-600 ${
          isMobile ? (isOpen ? "block" : "hidden") : "block"
        }`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transform duration-200 text-gray-900"
            onClick={() => {
              if (title === "Support") {
                toggleSupportInfo(item.toLowerCase());
              } else {
                smoothScrollTo(`#${item.toLowerCase().replace(/\s+/g, "-")}`);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t fade-in-section glass-header">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="md:grid md:grid-cols-4 md:gap-6 space-y-4 md:space-y-0">
          {/* Logo and tagline */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Smartphone className="h-6 w-6 text-primary animate-pulse-glow group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                YashMobiles
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Your trusted partner for all mobile technology needs.
            </p>
          </div>

          {/* Products, Services, Support sections */}
          <FooterSection
            title="Products"
            items={["Smartphones", "Accessories", "Tablets", "Smartwatches"]}
          />
          <FooterSection
            title="Services"
            items={["Device Setup", "Data Transfer", "Repairs", "Trade-in"]}
          />
          <FooterSection
            title="Support"
            items={["Contact Us", "FAQ", "Warranty", "Returns"]}
          />
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://facebook.com/YashMobiles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/yashmobilejpr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/YashMobiles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-500 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/company/YashMobiles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-5 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} YashMobiles. All rights reserved. {/*Made with{" "}*/}
            {/* <Heart className="w-3 h-3 inline text-red-500 animate-pulse" /> for
            mobile enthusiasts. */}
          </p>
        </div>
      </div>
    </footer>
  );
}
