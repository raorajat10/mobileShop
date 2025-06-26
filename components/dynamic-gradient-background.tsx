"use client"

import { useEffect, useState, useCallback } from "react"

export function DynamicGradientBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [colorPhase, setColorPhase] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // Softer color palettes for better readability
  const colorPalettes = [
    // Soft Sunset
    { primary: [255, 183, 153], secondary: [255, 206, 153], tertiary: [255, 229, 153] },
    // Soft Ocean
    { primary: [153, 204, 255], secondary: [153, 255, 255], tertiary: [204, 255, 255] },
    // Soft Forest
    { primary: [153, 255, 153], secondary: [204, 255, 204], tertiary: [229, 255, 229] },
    // Soft Purple
    { primary: [204, 153, 255], secondary: [229, 204, 255], tertiary: [242, 229, 255] },
    // Soft Peach
    { primary: [255, 204, 153], secondary: [255, 229, 204], tertiary: [255, 242, 229] },
    // Soft Blue
    { primary: [153, 183, 255], secondary: [204, 219, 255], tertiary: [229, 237, 255] },
  ]

  const [currentPalette, setCurrentPalette] = useState(0)

  // Mouse movement handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    })
  }, [])

  // Scroll handler
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  // Color phase animation (slower)
  useEffect(() => {
    const interval = setInterval(() => {
      setColorPhase((prev) => (prev + 0.5) % 360)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Palette switching (longer intervals)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPalette((prev) => (prev + 1) % colorPalettes.length)
    }, 20000) // Change every 20 seconds
    return () => clearInterval(interval)
  }, [colorPalettes.length])

  // Event listeners
  useEffect(() => {
    if (mounted) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [mounted, handleMouseMove, handleScroll])

  // Apply dynamic background to body
  useEffect(() => {
    if (!mounted) {
      setMounted(true)
      return
    }

    const palette = colorPalettes[currentPalette]
    const scrollFactor = Math.min(scrollY / 2000, 0.3) // Reduced scroll impact
    const mouseFactor = { x: mousePosition.x / 100, y: mousePosition.y / 100 }

    // Create softer RGB values
    const primary = palette.primary.map((color, i) =>
      Math.round(color + Math.sin(((colorPhase + i * 60) * Math.PI) / 180) * 15),
    )
    const secondary = palette.secondary.map((color, i) =>
      Math.round(color + Math.cos(((colorPhase + i * 60) * Math.PI) / 180) * 10),
    )
    const tertiary = palette.tertiary.map((color, i) =>
      Math.round(color + Math.sin(((colorPhase + i * 30) * Math.PI) / 180) * 8),
    )

    // Create subtle gradient
    const gradient = `
      radial-gradient(circle at ${50 + mouseFactor.x * 10}% ${50 + mouseFactor.y * 10}%, 
        rgba(${primary.join(",")}, ${0.3 - scrollFactor * 0.1}) 0%, 
        rgba(${secondary.join(",")}, ${0.2 - scrollFactor * 0.05}) 40%,
        rgba(${tertiary.join(",")}, ${0.1 - scrollFactor * 0.02}) 80%,
        rgba(255, 255, 255, 0.95) 100%
      ),
      linear-gradient(${135 + colorPhase * 0.2}deg, 
        rgba(${secondary.join(",")}, 0.15) 0%, 
        rgba(${tertiary.join(",")}, 0.1) 50%,
        rgba(${primary.join(",")}, 0.05) 100%
      ),
      linear-gradient(to bottom, 
        rgba(255, 255, 255, 0.98) 0%,
        rgba(255, 255, 255, 0.95) 100%
      )
    `

    // Apply to body with smooth transition
    document.body.style.background = gradient
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.minHeight = "100vh"
    document.body.style.transition = "background 0.5s ease-out"

    // Also apply to html for full coverage
    document.documentElement.style.background = gradient
    document.documentElement.style.backgroundAttachment = "fixed"
  }, [mounted, colorPhase, currentPalette, mousePosition, scrollY, colorPalettes])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.background = ""
        document.body.style.backgroundAttachment = ""
        document.documentElement.style.background = ""
        document.documentElement.style.backgroundAttachment = ""
      }
    }
  }, [])

  return null
}
