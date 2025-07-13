"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Award } from "lucide-react";

const testimonials = [
  {
    name: "Brijesh Saxena",
    position: "Marketing Manager, Automation Anywhere",
    message:
      "YashMobiles ensures genuine devices at the best prices while maintaining strong post-sales support. Their promptness and honesty make them a preferred partner for our zone.",
    userPhoto:
      "https://www.dreamcast.in/wp-content/uploads/2024/09/Brijesh-Saxena_Automation-Anywhere.png",
    logo:
      "./samsung-logo.png",
  },
  {
    name: "Ranjan S Munchoor",
    position: "Bigbee Experience Management Pvt Ltd",
    message:
      "Their attention to detail, fast device delivery, and consistent follow-ups help us maintain our inventory seamlessly across all zones.",
    userPhoto:
      "https://www.dreamcast.in/wp-content/uploads/2024/09/Rajan-S-Manchoor_Bigbee.png",
    logo:
      "oppo-logo.png",
  },
  {
    name: "Neeraj Deginal",
    position: "CTO - SHRM",
    message:
      "Partnering with YashMobiles has been efficient. Their streamlined logistics and genuine products have strengthened our distribution chain with minimal issues.",
    userPhoto:
      "https://www.dreamcast.in/wp-content/uploads/2024/09/Neeraj-Deginal.png",
    logo:
      "vivo-logo.png",
  },
];

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section id="testimonials" className="py-20 fade-in-section  relative bg-background">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-2 animate-gentle-bounce ">
              <Award className="w-4 h-4 mr-2 " />
              Why Our Clients Love Us!
            </Badge>
                 <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-6 text-slate-800">
              <span className="gradient-text text-slate-600 font-sans">Message From Clients</span>
            </h2>
          <p className="text-gray-700 md:text-lg max-w-2xl mx-auto font-medium mt-4">
            Hear from managers we partner with across different brands and zones.
          </p>
        </div>

        {/* Main Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          autoplay={{ delay: 4000 }}
          navigation
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          loop
          className="mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="glass-card glass-card-hover max-w-2xl mx-auto">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                      <Image
                        src={testimonial.userPhoto}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-28 h-10 mt-2">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{testimonial.position}</p>
                    <p className="text-gray-700 font-medium text-sm md:text-base">"{testimonial.message}"</p>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs, Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          watchSlidesProgress
          className="max-w-md mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden border border-gray-300 cursor-pointer">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.name} Thumbnail`}
                  fill
                  className="object-contain p-2 bg-white"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
