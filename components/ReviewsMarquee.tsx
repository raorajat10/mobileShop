"use client";

import { Star } from "lucide-react";
import React from "react";

const reviewsTop = [
  { text: "Absolutely love this product!", rating: 5 },
  { text: "Exceeded my expectations in every way.", rating: 5 },
  { text: "Fast shipping and well packaged.", rating: 4 },
  { text: "Really impressed with the battery life.", rating: 5 },
  { text: "Sleek design and very user-friendly.", rating: 4 },
  { text: "Support team was super helpful.", rating: 5 },
  { text: "Exactly as described, no complaints!", rating: 4 },
  { text: "Quality is top-notch for the price.", rating: 5 },
];

const reviewsBottom = [
  { text: "Very satisfied with my purchase.", rating: 5 },
  { text: "Stylish, reliable, and affordable.", rating: 4 },
  { text: "Customer service responded quickly!", rating: 5 },
  { text: "Love how lightweight it feels.", rating: 4 },
  { text: "Way better than I expected.", rating: 5 },
  { text: "Top marks for performance and speed.", rating: 5 },
  { text: "Perfect gift for my partner!", rating: 5 },
  { text: "Build quality feels solid.", rating: 4 },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center space-x-0.5 text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-yellow-500" : "text-gray-300"}
          strokeWidth={1.2}
        />
      ))}
    </div>
  );
}

export default function ReviewsMarquee() {
  return (
    <div className="overflow-hidden w-full py-4 select-none">
      {/* Top row - left to right */}
      <div className="relative whitespace-nowrap animate-marquee-left mb-3">
        <div className="flex">
          {[...reviewsTop, ...reviewsTop].map((review, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm mx-3 flex-shrink-0"
            >
              <span>{review.text}</span>
              <StarRating count={review.rating} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - right to left */}
      <div className="relative whitespace-nowrap animate-marquee-right">
        <div className="flex">
          {[...reviewsBottom, ...reviewsBottom].map((review, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm mx-3 flex-shrink-0"
            >
              <span>{review.text}</span>
              <StarRating count={review.rating} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
