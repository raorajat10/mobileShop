// components/InteractiveProductCard.tsx
"use client";

import type React from "react";
import { useState, useCallback, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Smartphone, Heart, Eye, X, Phone } from "lucide-react";
import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice: string;
  image: string;
  features: string[];
  badge: string;
  rating: number;
  reviews: number;
}

interface InteractiveProductCardProps {
  product: Product;
  index: number;
}

export function InteractiveProductCard({
  product,
  index,
}: InteractiveProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [reviewCount, setReviewCount] = useState(product.reviews);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 86400000);
    return () => clearInterval(interval);
  }, []);

  const handleLikeToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  }, []);

  const handleQuickView = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuickView(true);
  }, []);

  const handleCloseQuickView = useCallback(() => {
    setShowQuickView(false);
  }, []);

  const calculateSavings = useCallback(() => {
    try {
      const original = Number.parseFloat(product.originalPrice.replace("$", ""));
      const current = Number.parseFloat(product.price.replace("$", ""));
      if (original > current) {
        return Math.round(((original - current) / original) * 100);
      }
      return 0;
    } catch {
      return 0;
    }
  }, [product.originalPrice, product.price]);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <>
      <Card
        className="group glass-card glass-card-hover transition-all duration-500 transform hover:scale-105 hover:rotate-1"
        style={{ animationDelay: `${index * 0.1}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="p-0 relative">
          <div className="relative overflow-hidden rounded-t-lg">
            {!imageError ? (
              <Image
                src={product.image || "/placeholder.svg?height=300&width=250"}
                alt={product.name}
                width={250}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={handleImageError}
                priority={index < 2}
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-gray-400" />
              </div>
            )}

            {/* Overlay Actions */}
            <div
              className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <Button
                size="sm"
                variant="secondary"
                className="glass-card"
                onClick={handleQuickView}
                aria-label="Quick view"
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="glass-card"
                onClick={handleLikeToggle}
                aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    isLiked ? "fill-red-500 text-red-500" : ""
                  }`}
                />
              </Button>
            </div>

            <Badge
              className="absolute top-2 left-2 glass-card animate-pulse"
              variant="secondary"
            >
              {product.badge}
            </Badge>

            <div className="absolute top-2 right-2 glass-card px-2 py-1 rounded-full">
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.round(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-600">
                  {reviewCount.toLocaleString()} reviews
                </span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="space-y-3">
            <CardTitle className="text-lg text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </CardTitle>
            <CardDescription className="text-gray-600">{product.brand}</CardDescription>

            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">{product.price}</span>
              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
              {calculateSavings() > 0 && (
                <Badge
                  variant="outline"
                  className="text-xs text-green-600 border-green-600"
                >
                  Save {calculateSavings()}%
                </Badge>
              )}
            </div>

            <div className="space-y-1">
              {product.features.slice(0, 3).map((feature, idx) => (
                <div
                  key={idx}
                  className="text-xs text-gray-600 flex items-center group-hover:text-gray-800 transition-colors"
                >
                  <div className="w-1 h-1 bg-primary rounded-full mr-2 animate-pulse"></div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href="tel:+919929990486"
                className="flex-1"
              >
                <Button
                  className="w-full glass-card glass-card-hover group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Consult / Buy
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {showQuickView && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
          onClick={handleCloseQuickView}
        >
          <div
            className="glass-card p-6 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseQuickView}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-primary">{product.price}</span>
                <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Features:</h4>
                {product.features.map((feature, idx) => (
                  <div key={idx} className="text-sm text-gray-800 flex items-center">
                    <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={handleCloseQuickView} variant="outline" className="flex-1">
                  Close
                </Button>
                <a href="tel:+919929990486" className="flex-1">
                  <Button className="w-full flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
