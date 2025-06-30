"use client"

import { useEffect, useState } from "react"
import { Users, ShoppingCart, Star, CheckCircle } from "lucide-react"

export function InteractiveStats() {
  const [stats, setStats] = useState([
    { label: "Happy Customers", value: "10,0000+", icon: Users },
    { label: "Products Sold", value: "10,0000+", icon: ShoppingCart },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Orders Delivered", value: "75,000+", icon: CheckCircle },
  ])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 glass-card p-3 rounded-lg glass-card-hover cursor-pointer group transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
            <stat.icon className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-gray-800 group-hover:text-primary transition-colors">{stat.label}</p>
            <p className="text-sm text-gray-600">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
