"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function FounderSection() {
  return (
    <section className="py-20 relative md:py-20 bg-gradient-to-br">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tighter sm:text-4xl md:text-5xl  text-gray-800">
        Meet Our Founder
                </h2>
      <div className="max-w-6xl mx-auto py-4 px-4">
        <Card className="glass-card p-6 md:p-10">
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
              <CardTitle className="text-2xl md:text-3xl text-gray-800">KAILASH CHAND YADAV</CardTitle>
              <CardDescription className="text-gray-600 mb-4">
                Founder, Yash Mobile
              </CardDescription>
              <p className="text-gray-700 text-md md:text-lg max-w-md">
                “At Yash Mobile, we are committed to providing trusted technology solutions
                and transparent service, ensuring every customer feels valued and confident in
                their purchase.”
              </p>
            </div>

            {/* Right: Founder Video */}
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden relative shadow-lg">
                <video
                  src="/founder-message.mp4" // your video path
                  controls
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
