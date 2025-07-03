"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useEffect, useState } from "react"

const categories = [
  {
    name: "Smartphones",
    image: "/smart.jpg",
  },
  {
    name: "Smartwatches",
    image: "/smartwatchs.jpg",
  },
  {
    name: "Tablets",
    image: "/tabs.webp",
  },
  {
    name: "Buds & AirPods",
    image: "/buds.webp",
  },
  {
    name: "Laptops",
    image: "/laptop.jpeg",
  },
]

export function ProductCategoryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    renderMode: "performance",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 3000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <section className="py-20 fade-in-section bg-gradient-to-br">
      <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-800">
        Explore Our Collections
      </h2>
      <div className="relative max-w-5xl mx-auto px-4">
        <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden shadow-xl transition-transform duration-300">
          {categories.map((item, idx) => (
            <div key={idx} className="keen-slider__slide flex items-center justify-center">
              <div className="relative w-full h-[200px] md:h-[400px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover  rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {categories.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
