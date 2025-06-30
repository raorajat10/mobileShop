"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InteractiveProductCard } from "./interactive-product-card";
import type { Product } from "./interactive-product-card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Sample products (add real images in /public/products/)
const products: Product[] = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: "$1199",
    originalPrice: "$1299",
    image: "/products/samsung_s24_ultra.jpg",
    features: ["200MP Camera", "Snapdragon 8 Gen 3", "5000mAh Battery"],
    badge: "Best Seller",
    rating: 4.8,
    reviews: 3200,
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "$1099",
    originalPrice: "$1199",
    image: "/products/iphone_15_pro_max.jpg",
    features: ["A17 Pro Chip", "48MP Camera", "Dynamic Island"],
    badge: "Trending",
    rating: 4.9,
    reviews: 4500,
  },
  {
    id: 3,
    name: "Nothing Phone 2",
    brand: "Nothing",
    price: "$699",
    originalPrice: "$749",
    image: "/products/nothing_phone_2.jpg",
    features: ["Glyph Interface", "50MP Dual Camera", "Snapdragon 8+"],
    badge: "Unique Design",
    rating: 4.5,
    reviews: 1500,
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: "$799",
    originalPrice: "$899",
    image: "/products/oneplus_12.jpg",
    features: ["Hasselblad Camera", "SuperVOOC Charging", "Snapdragon 8 Gen 3"],
    badge: "Fast Charging",
    rating: 4.7,
    reviews: 2100,
  },
  {
    id: 5,
    name: "Google Pixel 9 Pro",
    brand: "Google",
    price: "$999",
    originalPrice: "$1099",
    image: "/products/pixel_9_pro.jpg",
    features: ["Tensor G3", "AI Camera", "Stock Android"],
    badge: "Pure Android",
    rating: 4.8,
    reviews: 1800,
  },
  {
    id: 6,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: "$899",
    originalPrice: "$999",
    image: "/products/xiaomi_14_ultra.jpg",
    features: ["Leica Camera", "120W Fast Charging", "Snapdragon 8 Gen 3"],
    badge: "Value Pick",
    rating: 4.6,
    reviews: 1700,
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const getVisibleIndexes = () => {
    const left = (currentIndex - 1 + products.length) % products.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % products.length;
    return [left, center, right];
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <div className="w-full flex flex-col items-center gap-4 py-6 relative">
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="flex items-center justify-center gap-4 max-w-full">
          {visibleIndexes.map((index, position) => (
            <motion.div
              key={products[index].id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: position === 1 ? 1 : 0.6,
                scale: position === 1 ? 1 : 0.85,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`w-[280px] sm:w-[300px] md:w-[320px]`}
            >
              <InteractiveProductCard product={products[index]} index={index} />
            </motion.div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
