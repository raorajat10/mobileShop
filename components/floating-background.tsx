"use client"

import { useEffect, useState } from "react"

export function FloatingBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full animate-float animation-delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400/30 rounded-full animate-float animation-delay-2000" />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-yellow-400/30 rounded-full animate-float animation-delay-3000" />

      {/* Floating Rectangles */}
      <div className="absolute top-1/2 left-1/6 w-8 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float-slow" />
      <div className="absolute top-2/3 right-1/6 w-6 h-3 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full animate-float-slow animation-delay-2000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Floating Phone Icons */}
      <div className="absolute top-1/5 right-1/5 animate-float-phone">
        <div className="w-8 h-12 bg-gradient-to-b from-gray-300/20 to-gray-400/20 rounded-lg border border-gray-300/30" />
      </div>
      <div className="absolute bottom-1/5 left-1/5 animate-float-phone animation-delay-3000">
        <div className="w-6 h-10 bg-gradient-to-b from-blue-300/20 to-blue-400/20 rounded-md border border-blue-300/30" />
      </div>

      {/* Particle Effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
