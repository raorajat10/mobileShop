"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  brand: string
  // price: string
  // originalPrice: string
  image: string
  features: string[]
  badge: string
  rating: number
  reviews: number
  color: string
}

const premiumProducts: Product[] = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    // price: "$1199",
    // originalPrice: "$1299",
    image: "/16promax.webp?height=400&width=300",
    features: ["A17 Pro Chip", "Titanium Design", "48MP Camera", "Action Button"],
    badge: "Latest",
    rating: 4.9,
    reviews: 1250,
    color: "from-gray-800 to-gray-900",
  },
  {
    id: 2,
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    // price: "$1199",
    // originalPrice: "$1399",
    image: "/s25ultra.jpg?height=400&width=300",
    features: ["S Pen Included", "200MP Camera", "AI Features", "Titanium Frame"],
    badge: "Popular",
    rating: 4.8,
    reviews: 980,
    color: "from-blue-600 to-purple-600",
  },
  {
    id: 3,
    name: "Samsung Fold 7",
    brand: "Samsung",
    // price: "$899",
    // originalPrice: "$999",
    image: "/fold7.webp?height=400&width=300",
    features: ["Magic Eraser", "Pure Android", "AI Photography", "Titan M Security"],
    badge: "Best Value",
    rating: 4.7,
    reviews: 756,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    name: "OnePlus 13 Pro",
    brand: "OnePlus",
    // price: "$699",
    // originalPrice: "$799",
    image: "/1+pro.webp?height=400&width=300",
    features: ["Fast Charging", "Flagship Specs", "OxygenOS", "Hasselblad Camera"],
    badge: "Fast Charging",
    rating: 4.6,
    reviews: 432,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 5,
    name: "Moto Flip",
    brand: "Motorola",
    // price: "$899",
    // originalPrice: "$999",
    image: "/motoflp.webp?height=400&width=300",
    features: ["Leica Camera", "Snapdragon 8 Gen 3", "120W Charging", "MIUI 15"],
    badge: "Camera Pro",
    rating: 4.5,
    reviews: 324,
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 6,
    name: "Nothing Phone 3A Pro",
    brand: "Nothing",
    // price: "599",
    // originalPrice: "$699",
    image: "/nothng3.webp?height=350&width=250",
    features: ["Glyph Interface", "Transparent Design", "Snapdragon 8+ Gen 1", "Nothing OS"],
    badge: "Unique",
    rating: 4.4,
    reviews: 256,
    color: "from-gray-600 to-gray-800",
  },
]

export function PremiumSmartphoneSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % premiumProducts.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + premiumProducts.length) % premiumProducts.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getVisibleProducts = () => {
    const products = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % premiumProducts.length
      products.push({ ...premiumProducts[index], position: i })
    }
    return products
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Main Slider Container */}
      <div
        className="relative h-[600px] overflow-hidden rounded-3xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background with 3D Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm" />

        {/* Products Display */}
        <div className="relative h-full flex items-center justify-center flex-col bg-violet-300">
          {getVisibleProducts().map((product, index) => {
            const isCenter = index === 1
            const isLeft = index === 0
            const isRight = index === 2

            return (
              <div
                key={`${product.id}-${currentIndex}`}
                className={`absolute transition-all duration-700 ease-out transform-gpu ${
                  isCenter
                    ? "z-30 scale-110 translate-x-0"
                    : isLeft
                      ? "z-20 scale-90 -translate-x-80 opacity-70"
                      : "z-20 scale-90 translate-x-80 opacity-70"
                }`}
                style={{
                  transform: `
                    translateX(${isCenter ? "0" : isLeft ? "-320px" : "320px"}) 
                    scale(${isCenter ? "1.1" : "0.9"}) 
                    rotateY(${isCenter ? "0" : isLeft ? "25deg" : "-25deg"})
                  `,
                }}
              >
                <Card
                  className={`w-80 h-96 glass-card overflow-hidden group cursor-pointer transform-gpu perspective-1000 ${
                    isCenter ? "animate-glow-pulse" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <CardContent className="p-0 h-full relative">
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Floating Badge */}
                      <Badge
                        className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} text-white border-0 animate-bounce-subtle`}
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        {product.badge}
                      </Badge>

                      {/* Rating */}
                      <div className="absolute top-4 right-4 glass-card px-2 py-1 rounded-full">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{product.rating}</span>
                        </div>
                      </div>

                      {/* 3D Floating Elements */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div
                          className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float-3d"
                          style={{ animationDelay: "0s" }}
                        />
                        <div
                          className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-float-3d"
                          style={{ animationDelay: "2s" }}
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {product.name}
                        </h3>
                        <p className="text-gray-300 text-sm">{product.brand}</p>
                      </div>

                      {/* Price */}
                      {/* <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold font-sans text-yellow-950">{product.price}</span>
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      </div> */}

                      {/* Features */}
                      <div className="space-y-1">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-2 animate-pulse" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      

                      {/* Action Buttons */}
                      {isCenter && (
                        <div className="flex gap-2 pt-2 animate-fadeIn">
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0 transform hover:scale-105 transition-all duration-300"
                          >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Buy Now
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="glass-card border-white/20 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 bg-transparent"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {premiumProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentIndex
                ? "bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Product Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-orange-600">
          {currentIndex + 1} of {premiumProducts.length}
        </span>
      </div>
    </div>
  )
}
