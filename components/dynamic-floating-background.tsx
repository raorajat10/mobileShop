"use client"

import { useEffect, useState, useCallback } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export function DynamicFloatingBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [colorPhase, setColorPhase] = useState(0)

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    }))
    setParticles(initialParticles)
    setMounted(true)
  }, [])

  // Mouse movement handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  // Color phase animation
  useEffect(() => {
    const interval = setInterval(() => {
      setColorPhase((prev) => (prev + 1) % 360)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Mouse event listeners
  useEffect(() => {
    if (mounted) {
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mounted, handleMouseMove])

  // Animate particles
  useEffect(() => {
    if (!mounted) return

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            particle.speedX *= -1
            newX = Math.max(0, Math.min(window.innerWidth, newX))
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            particle.speedY *= -1
            newY = Math.max(0, Math.min(window.innerHeight, newY))
          }

          // Mouse interaction
          const dx = mousePosition.x - newX
          const dy = mousePosition.y - newY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const force = (100 - distance) / 100
            newX -= (dx / distance) * force * 2
            newY -= (dy / distance) * force * 2
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const interval = setInterval(animateParticles, 16) // ~60fps
    return () => clearInterval(interval)
  }, [mounted, mousePosition])

  if (!mounted) return null

  const primaryColor = `hsl(${colorPhase}, 70%, 60%)`
  const secondaryColor = `hsl(${(colorPhase + 120) % 360}, 70%, 60%)`
  const tertiaryColor = `hsl(${(colorPhase + 240) % 360}, 70%, 60%)`

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, ${primaryColor}15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${secondaryColor}15 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${tertiaryColor}10 0%, transparent 50%),
            linear-gradient(135deg, 
              hsl(${colorPhase}, 30%, 95%) 0%, 
              hsl(${(colorPhase + 60) % 360}, 25%, 97%) 25%,
              hsl(${(colorPhase + 120) % 360}, 20%, 98%) 50%,
              hsl(${(colorPhase + 180) % 360}, 25%, 96%) 75%,
              hsl(${(colorPhase + 240) % 360}, 30%, 94%) 100%
            )
          `,
        }}
      />

      {/* Animated Mesh Gradient Orbs */}
      <div className="absolute inset-0">
        {/* Large Orb 1 */}
        <div
          className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-20 animate-float-large"
          style={{
            background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
            left: "10%",
            top: "20%",
            animationDuration: "20s",
          }}
        />

        {/* Large Orb 2 */}
        <div
          className="absolute w-80 h-80 rounded-full filter blur-3xl opacity-25 animate-float-large"
          style={{
            background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
            right: "15%",
            top: "10%",
            animationDelay: "10s",
            animationDuration: "25s",
          }}
        />

        {/* Large Orb 3 */}
        <div
          className="absolute w-72 h-72 rounded-full filter blur-3xl opacity-15 animate-float-large"
          style={{
            background: `radial-gradient(circle, ${tertiaryColor} 0%, transparent 70%)`,
            left: "60%",
            bottom: "20%",
            animationDelay: "15s",
            animationDuration: "30s",
          }}
        />
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full transition-all duration-75 ease-out"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              transform: `translate(-50%, -50%)`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating Phones */}
        <div className="absolute animate-float-phone" style={{ left: "15%", top: "30%" }}>
          <div
            className="w-12 h-20 rounded-lg border-2 transition-colors duration-1000"
            style={{
              borderColor: `${primaryColor}40`,
              background: `linear-gradient(135deg, ${primaryColor}10, ${secondaryColor}10)`,
            }}
          />
        </div>

        <div className="absolute animate-float-phone animation-delay-5000" style={{ right: "20%", top: "60%" }}>
          <div
            className="w-10 h-16 rounded-md border-2 transition-colors duration-1000"
            style={{
              borderColor: `${secondaryColor}40`,
              background: `linear-gradient(135deg, ${secondaryColor}10, ${tertiaryColor}10)`,
            }}
          />
        </div>

        {/* Floating Circles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-circle"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            <div
              className="w-6 h-6 rounded-full transition-colors duration-1000"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? primaryColor : secondaryColor}30, transparent)`,
                border: `1px solid ${i % 2 === 0 ? primaryColor : secondaryColor}20`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5 transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(${primaryColor}20 1px, transparent 1px),
            linear-gradient(90deg, ${primaryColor}20 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-noise" />
    </div>
  )
}
