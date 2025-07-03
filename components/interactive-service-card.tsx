"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Service } from "@/lib/types"

interface InteractiveServiceCardProps {
  service: Service
  index: number
  onLearnMore: (service: Service) => void
}

export function InteractiveServiceCard({ service, index, onLearnMore }: InteractiveServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev)
  }, [])

  const handleLearnMore = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      onLearnMore(service)
    },
    [service, onLearnMore],
  )

  return (
    <Card
      className={`text-center glass-card glass-card-hover group transition-all duration-500 cursor-pointer ${
        isExpanded ? "scale-105 shadow-2xl" : ""
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          toggleExpanded()
        }
      }}
      aria-expanded={isExpanded}
    >
      <CardHeader>
        <div
          className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-all duration-300 ${
            isHovered ? "animate-pulse" : ""
          }`}
        >
          {service.icon}
        </div>
        <CardTitle className="text-gray-800 group-hover:text-primary transition-colors">
          {service.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-center text-gray-600 mb-4">
          {service.description}
        </CardDescription>

        {isExpanded && service.features && (
          <div className="space-y-2 mb-4 animate-fadeIn">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-left">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <Button
          variant="outline"
          className="glass-card glass-card-hover group-hover:bg-primary group-hover:text-white transition-all duration-300"
          onClick={handleLearnMore}
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  )
}
