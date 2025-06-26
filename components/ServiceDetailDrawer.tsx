// components/ServiceDetailDrawer.tsx
"use client"

import React, { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, Mail } from "lucide-react"

interface ServiceDetailDrawerProps {
  service: {
    icon: React.JSX.Element
    title: string
    description: string
    color: string
    features?: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export function ServiceDetailDrawer({ service, isOpen, onClose }: ServiceDetailDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)

  // Close the drawer if the user clicks outside or presses Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="fixed inset-x-0 top-0 z-50 h-auto max-h-[90vh] overflow-y-auto glass-card border-b-2 border-primary shadow-xl p-6 lg:p-10"
          ref={drawerRef}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-gray-600 hover:text-red-500 transition-colors"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="max-w-4xl mx-auto py-8">
            <div className="flex items-center justify-center mb-6">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${service.color} text-white`}
              >
                {React.cloneElement(service.icon, { className: "w-10 h-10" })}
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{service.title} Details</h2>
            <p className="text-lg text-center text-gray-700 mb-8">{service.description}</p>

            {service.features && service.features.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-gray-800 glass-card p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-md font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center mt-10">
              <Button size="lg" className="h-12 glass-card glass-card-hover group">
                Contact Us About This Service
                <Mail className="w-4 h-4 ml-2 group-hover:rotate-6 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}