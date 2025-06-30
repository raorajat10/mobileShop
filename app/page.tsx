"use client";
import Link from "next/link";
import { ProductCategoryCarousel } from "@/components/ProductCategoryCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

import {
  Mail,
  MapPin,
  Clock,
  Shield,
  Truck,
  CreditCard,
  Users,
  Star,
  Smartphone,
  Headphones,
  Zap,
  Award,
  Heart,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { InteractiveBackground } from "@/components/interactive-background";
import { InteractiveNavigation } from "@/components/interactive-navigation";
import { InteractiveStats } from "@/components/interactive-stats";
import { InteractiveProductCard } from "@/components/interactive-product-card";
import { InteractiveServiceCard } from "@/components/interactive-service-card";
import { useEffect, useState, useCallback } from "react";
import { ServiceDetailDrawer } from "@/components/ServiceDetailDrawer";
import AboutCarousel from "@/components/AboutCarousel";
import ProductCarousel from "@/components/ProductCarousel";

export default function MobileShowroomPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isServiceDrawerOpen, setIsServiceDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any | null>(null); // State to hold selected service data

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsVisible(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      price: "₹1199",
      originalPrice: "₹1299",
      image: "/placeholder.svg?height=300&width=250",
      features: ["A17 Pro Chip", "Titanium Design", "48MP Camera"],
      badge: "Latest",
      rating: 4.9,
      reviews: 1250,
    },
    {
      id: 2,
      name: "Galaxy S24 Ultra",
      brand: "Samsung",
      price: "₹1199",
      originalPrice: "₹1399",
      image: "/placeholder.svg?height=300&width=250",
      features: ["S Pen Included", "200MP Camera", "AI Features"],
      badge: "Popular",
      rating: 4.8,
      reviews: 980,
    },
    {
      id: 3,
      name: "Pixel 8 Pro",
      brand: "Google",
      price: "₹899",
      originalPrice: "₹999",
      image: "/placeholder.svg?height=300&width=250",
      features: ["Magic Eraser", "Pure Android", "AI Photography"],
      badge: "Best Value",
      rating: 4.7,
      reviews: 756,
    },
    {
      id: 4,
      name: "OnePlus 12",
      brand: "OnePlus",
      price: "₹699",
      originalPrice: "₹799",
      image: "/placeholder.svg?height=300&width=250",
      features: ["Fast Charging", "Flagship Specs", "OxygenOS"],
      badge: "Fast Charging",
      rating: 4.6,
      reviews: 432,
    },
  ];

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Device Sales",
      description:
        "Latest smartphones from all major brands with competitive pricing and genuine warranties.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Authorized dealer",
        "Price matching",
        "Genuine products",
        "Warranty included",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Extended Warranty",
      description:
        "Comprehensive protection plans to keep your device safe from accidents and defects.",
      color: "from-green-500 to-emerald-500",
      features: [
        "Accident protection",
        "Water damage cover",
        "Screen replacement",
        "Battery replacement",
      ],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Delivery",
      description:
        "Fast and secure delivery to your doorstep within 24 hours of purchase. Delivery only possible in select areas. Call us to check availability.",
      color: "from-purple-500 to-violet-500",
      features: [
        "Same day delivery",
        "Secure packaging",
        "Real-time tracking",
        "Contactless delivery",
      ],
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Easy EMI Options",
      description:
        "Flexible payment plans with 0% interest EMI options available on all devices.",
      color: "from-orange-500 to-red-500",
      features: [
        "0% interest",
        "Flexible tenure",
        "Quick approval",
        "No hidden charges",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Consultation",
      description:
        "Our tech experts help you choose the perfect device based on your needs and budget.",
      color: "from-pink-500 to-rose-500",
      features: [
        "Free consultation",
        "Personalized recommendations",
        "Comparison guides",
        "Technical support",
      ],
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for all your queries and technical assistance.",
      color: "from-indigo-500 to-blue-500",
      features: [
        "Live chat support",
        "Phone support",
        "Email support",
        "Remote assistance",
      ],
    },
  ];

  function smoothScrollTo(selector: string): void {
    if (typeof window === "undefined") return;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  const handleLearnMoreService = useCallback((service: any) => {
    setSelectedService(service);
    setIsServiceDrawerOpen(true);
  }, []);

  const handleCloseServiceDrawer = useCallback(() => {
    setIsServiceDrawerOpen(false);
    setSelectedService(null);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <InteractiveBackground />
      <InteractiveNavigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative mt-4 pt-2 pb-20 lg:mt-8 lg:pt-4 lg:pb-32 overflow-hidden"
      >
        <div
          className="mx-auto px-6 lg:px-12 max-w-7xl"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="glass-card animate-shimmer"
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    Premium Mobile Destination
                  </Badge>
                </div>
                <h1 className="text-3xl py-4 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                  Discover Tomorrow's Technology Today
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl font-medium">
                  Experience the latest smartphones, cutting-edge accessories,
                  and revolutionary tech gadgets. We offer authentic products,
                  unbeatable prices, and exceptional customer service.
                </p>
              </div>

              <InteractiveStats />

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="h-12 glass-card glass-card-hover group"
                >
                  <Smartphone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Browse Products
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 glass-card glass-card-hover group"
                >
                  <MapPin className="w-4 h-4 mr-2 group-hover:bounce transition-transform" />
                  Visit Store
                </Button>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse cursor-pointer hover:scale-125 transition-transform"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  4.9/5 from 1M+ customers
                </span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse cursor-pointer hover:scale-125 transition-transform" />
              </div>
            </div>

            <div
              className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Image
                  src="iphone-16se.png?height=500&width=400"
                  alt="Latest Smartphones"
                  width={400}
                  height={500}
                  className="relative rounded-lg object-cover glass-card group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce cursor-pointer hover:scale-110 transition-transform">
                  New Arrivals
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-lg group-hover:scale-110 transition-transform cursor-pointer">
                  <div className="text-xs text-gray-600">Starting from</div>
                  <div className="text-lg font-bold text-primary">₹299</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*we deal with */}

      <section id="brands" className="py-8 mb-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800">
            Brands We Deal With
          </h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            We offer the latest smartphones and accessories from top global
            brands.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              "Samsung",
              "Apple",
              "Nothing",
              "Oppo",
              "Vivo",
              "MI",
              "Motorola",
              "OnePlus",
              "Realme",
              "iQOO",
            ].map((brand, index) => (
              <Link
                key={index}
                href={`/brand/${encodeURIComponent(brand.toLowerCase())}`}
                className="glass-card glass-card-hover p-4 rounded-xl text-center text-gray-800 font-semibold hover:text-primary transition-colors cursor-pointer"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
        <ProductCategoryCarousel />
      </section>

      {/* Featured Products */}
      <section id="products" className="py-10 relative">
        <div className="mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 glass-card animate-shimmer"
            >
              <Star className="w-3 h-3 mr-1" />
              Featured Collection
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800">
              Premium Smartphones
            </h2>
            <p className="text-gray-700 md:text-lg max-w-2xl mx-auto font-medium">
              Discover our handpicked selection of the latest and greatest
              smartphones, each offering cutting-edge technology and exceptional
              value.
            </p>
          </div>

           <div className="max-w-7xl mx-auto px-4">
        <ProductCarousel />
      </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 relative">
        <div className="mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 glass-card animate-shimmer"
            >
              <Shield className="w-3 h-3 mr-1" />
              Complete Solutions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800">
              Our Services
            </h2>
            <p className="text-gray-700 md:text-lg max-w-2xl mx-auto font-medium">
              From sales to support, we provide comprehensive mobile solutions
              to meet all your technology needs under one roof.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <InteractiveServiceCard
                key={index}
                service={service}
                index={index}
                onLearnMore={handleLearnMoreService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="mb-4 glass-card w-fit animate-shimmer"
                >
                  <Award className="w-3 h-3 mr-1" />
                  Trusted Since 2009
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  text-gray-800">
                  About YashMobiles
                </h2>
                <p className="max-w-[600px] text-gray-700 md:text-lg font-medium">
                  With over 16 years of experience in the mobile industry,
                  YashMobile has become the trusted destination for smartphone
                  enthusiasts and everyday users alike. We pride ourselMves on
                  offering authentic products, competitive prices, and
                  exceptional customer service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  "Authorized dealer for all major brands",
                  "1M+ satisfied customers",
                  "Expert technical support team",
                  "Competitive pricing and genuine products",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 glass-card p-3 rounded-lg glass-card-hover cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm text-gray-700 font-medium group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="flex items-center justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="About MobileHub"
                  width={400}
                  height={400}
                  className="relative rounded-lg object-cover glass-card group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div> */}
            <div className="relative rounded-lg object-cover glass-card group-hover:scale-105 transition-transform duration-300">
              <AboutCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Other content */}

      {/* Customer Reviews Marquee */}
      <section className="mx-auto px-6 lg:px-12 max-w-7xl my-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center text-gray-800">
          Customer Reviews
        </h2>
        <ReviewsMarquee />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 glass-card animate-shimmer"
            >
              <MapPin className="w-3 h-3 mr-1" />
              Visit Us Today
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800">
              Visit Our Showroom
            </h2>
            <p className="text-gray-700 md:text-lg max-w-2xl mx-auto font-medium">
              Experience our products firsthand at our premium showroom. Our
              expert team is ready to help you find the perfect device.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card glass-card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Get in touch with us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: <MapPin className="w-5 h-5 text-primary" />,
                    title: "Address",
                    content:
                      "BadKeBalaji, Ajmer Road, Jaipur, Rajasthan 302026",
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-primary" />,
                    title: "Phone",
                    content: "+91 99299 90486",
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-primary" />,
                    title: "Email",
                    content: "info@mobilehub.com",
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-primary" />,
                    title: "Hours",
                    content:
                      "Mon-Sun: 10AM-9PM, Last day of all months: Closed",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 glass-card p-3 rounded-lg glass-card-hover cursor-pointer group"
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-800">{item.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card glass-card-hover">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Store Location
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Find us on the map
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.google.com/maps/place/BadKeBalaji,+Ajmer+Road,+Jaipur,+Rajasthan+302026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video rounded-lg overflow-hidden relative group"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7041301797167!2d75.63330217461935!3d26.849361276684885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a3173d057f7%3A0x790838ce0e135887!2sYASH%20MOBILE%20NEW!5e0!3m2!1sen!2sin!4v1750984178405!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t glass-header">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

            {[
              {
                title: "Products",
                items: [
                  "Smartphones",
                  "Accessories",
                  "Tablets",
                  "Smartwatches",
                ],
              },
              {
                title: "Services",
                items: ["Device Setup", "Data Transfer", "Repairs", "Trade-in"],
              },
              {
                title: "Support",
                items: ["Contact Us", "FAQ", "Warranty", "Returns"],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-3">
                <h4
                  onClick={() =>
                    smoothScrollTo(`#${section.title.toLowerCase()}`)
                  }
                  className="text-sm font-medium text-gray-800 cursor-pointer hover:text-primary"
                >
                  {section.title}
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 transform duration-200 text-gray-900"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>
              &copy; 2024 YashMobiles. All rights reserved. Made with{" "}
              <Heart className="w-3 h-3 inline text-red-500 animate-pulse" />{" "}
              for mobile enthusiasts.
            </p>
          </div>
        </div>
        <div className="mb-2 flex justify-center space-x-6">
          <a
            href="https://facebook.com/YashMobiles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/yashmobilejpr?igsh=MW8xejJmNjVxa3dwcw=="
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
      </footer>
      <ServiceDetailDrawer
        service={selectedService}
        isOpen={isServiceDrawerOpen}
        onClose={handleCloseServiceDrawer}
      />
    </div>
  );
}
