"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function FounderSection() {
  return (
    <section className="py-20  relative md:py-20 bg-gradient-to-br">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tighter sm:text-4xl md:text-5xl  text-gray-800">
        Meet Our Founder
                </h2>
      <div className="max-w-6xl  mx-auto py-4 px-4">
        <Card className=" border-violet-300 bg-violet-300 p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Left: Message and Founder Info */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <Image
                src="/profile.jpg" // your founder photo
                alt="Founder Photo"
                width={290}
                height={290}
                className="rounded-full border-4 border-primary shadow-md mb-4 mx-auto md:mx-0"
              />
              <CardTitle className="text-2xl md:text-3xl text-white">KAILASH CHAND YADAV</CardTitle>
              <CardDescription className="text-gray-800 mb-4">
                Founder, Yash Mobile
              </CardDescription>
              {/* <p className="text-white text-md sm:text-center md:text-lg text-left max-w-md">
        
                               "Namaste, I am the founder of Yash Mobiles.

When we started Yash Mobiles back in 2009, we had only one dream—to deliver genuine products, fair prices, and honest service to every customer.

We began this journey with a small showroom, and today, the love and trust of thousands of customers have become our greatest strength. For us, every customer is not just a customer but a member of our family. We want you to feel not just the presence of a mobile phone at Yash Mobiles, but also experience trust and reliability.

Our team's mission is not just to sell products, but to ensure that you receive the product that is truly right for you. We offer a wide range of original mobiles and accessories to suit every budget and need. Alongside that, our technical team is always ready to help with any question or issue you might have.

Today, Yash Mobiles is not just a showroom—it has become a community. With your trust and support, we will continue to bring new technology, the best offers, and serve you with integrity in the times ahead.

We are proud to have earned the trust of thousands of families in Rajasthan. We promise to stand by you in every dream—be it your first smartphone, your children's education device, or a tool for growing your business.

This website is another step in that direction, so you can view our products and offers easily from the comfort of your home. Your trust is our biggest asset, and we will do everything to maintain it.

Heartfelt thanks to all of you. Jai Hind."
              </p> */}
            </div>


            {/* Right: Founder Video */}
            <div className="w-full md:w-1/2">
              <div className=" rounded-lg overflow-hidden relative shadow-lg">
                <div
                 // src="/founder-message.mp4" // your video path
                 // controls

                  className="w-full h-full object-cover"
                ><p className="text-white text-md md:text-lg max-w-md">
                “At Yash Mobile, we are committed to providing trusted technology solutions
                and transparent service, ensuring every customer feels valued and confident in
                their purchase.”
              </p>
              </div>
              </div>
            </div>
          </div>
        
        </Card>
      </div>
    </section>
  );
}
