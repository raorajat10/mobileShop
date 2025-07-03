import { Product } from "@/components/interactive-product-card";
import { CreditCard, Headphones, RefreshCw, Shield, ShieldCheck, Smartphone, Truck, Users } from "lucide-react";

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
// lib/data.ts
import type { Service } from "./types";

export const services: Service[] = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Device Setup",
    description: "Personalized setup for your new devices, ensuring everything is ready before you leave.",
    color: "from-blue-500 to-blue-400",
    features: [
      "SIM installation",
      "App configuration",
      "Data migration"
    ]
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Data Transfer",
    description: "Fast and secure transfer of contacts, photos, and apps from your old device to your new one.",
    color: "from-green-500 to-green-400",
    features: [
      "Cross-platform transfers",
      "Secure handling",
      "No data loss"
    ]
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Repairs",
    description: "Certified repairs with genuine parts to keep your devices running like new.",
    color: "from-yellow-500 to-yellow-400",
    features: [
      "Screen replacement",
      "Battery replacement",
      "Hardware diagnostics"
    ]
  },
]
// lib/companySupporters.ts

export const companySupporters = [
  {
    id: "apple",
    name: "Apple",
    supporters: [
      {
        name: "Deepak Shetti",
        designation: "Apple executive",
        experience: "8 years",
        bio: "Expert in Apple retail operations with a focus on customer experience and premium store layouts.",
        photo: "/supporters/apple_supporter.jpg",
      },
    ],
  },
  {
    id: "samsung",
    name: "Samsung",
    supporters: [
      {
        name: "Jitendra Yadav",
        designation: "Samsung executive",
        experience: "6 years",
        bio: "Specialist in Samsung product lineup, ensuring updated availability and customer guidance.",
        photo: "/supporters/samsung_supporter_1.jpg",
      },
      {
        name: "Sumit",
        designation: "Samsung executive",
        experience: "3 years",
        bio: "Assists customers with technical support and store-level training for Samsung products.",
        photo: "/supporters/samsung_supporter_2.jpg",
      },
    ],
  },
  {
    id: "oppo",
    name: "Oppo",
    supporters: [
      {
        name: "Mangi Lal Yadav",
        designation: "Oppo executive",
        experience: "5 years",
        bio: "Dedicated to Oppo sales and after-sales support, ensuring high customer satisfaction.",
        photo: "/supporters/oppo_supporter.jpg",
      },
    ],
  },
  {
    id: "vivo",
    name: "Vivo",
    supporters: [
      {
        name: "Anita Yadav",
        designation: "Vivo Zone Manager",
        experience: "4 years",
        bio: "Focused on Vivo's latest offerings, tech support, and in-store demos.",
        photo: "/supporters/vivo_supporter.jpg",
      },
    ],
  },
  
  {
    id: "1+",
    name: "1+",
    supporters: [
      {
        name: "Deepak Kumar",
        designation: "1+ Zone Manager",
        experience: "7 years",
        bio: "Experienced in Xiaomi's range and ecosystem, providing personalized recommendations to customers.",
        photo: "/supporters/xiaomi_supporter.jpg",
      },
    ],
  },
];
