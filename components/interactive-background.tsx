"use client"

import { useEffect, useState, useCallback, useRef } from "react"

interface ClickEffect {
  id: number
  x: number
  y: number
  timestamp: number
}

export function InteractiveBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [colorPhase, setColorPhase] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([])
  const [currentPalette, setCurrentPalette] = useState(0)

  const animationFrameRef = useRef<number>()
  const colorIntervalRef = useRef<NodeJS.Timeout>()
  const paletteIntervalRef = useRef<NodeJS.Timeout>()

  const colorPalettes = [
    { primary: [255, 183, 153], secondary: [255, 206, 153], tertiary: [255, 229, 153], name: "Sunset" },
    { primary: [153, 204, 255], secondary: [153, 255, 255], tertiary: [204, 255, 255], name: "Ocean" },
    { primary: [153, 255, 153], secondary: [204, 255, 204], tertiary: [229, 255, 229], name: "Forest" },
    { primary: [204, 153, 255], secondary: [229, 204, 255], tertiary: [242, 229, 255], name: "Purple" },
    { primary: [255, 204, 153], secondary: [255, 229, 204], tertiary: [255, 242, 229], name: "Peach" },
    { primary: [153, 183, 255], secondary: [204, 219, 255], tertiary: [229, 237, 255], name: "Sky" },
  ]

  // Optimized mouse movement handler
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!mounted) return

      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      setMousePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) })
    },
    [mounted],
  )

  // Click handler with cleanup
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!mounted) return

      const newEffect: ClickEffect = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      }

      setClickEffects((prev) => [...prev.slice(-4), newEffect]) // Keep only last 5 effects

      // Auto cleanup
      setTimeout(() => {
        setClickEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id))
      }, 1000)
    },
    [mounted],
  )

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    if (!mounted) return
    setScrollY(window.scrollY)
  }, [mounted])

  // Initialize component
  useEffect(() => {
    setMounted(true)

    return () => {
      setMounted(false)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (colorIntervalRef.current) {
        clearInterval(colorIntervalRef.current)
      }
      if (paletteIntervalRef.current) {
        clearInterval(paletteIntervalRef.current)
      }
    }
  }, [])

  // Color phase animation with proper cleanup
  useEffect(() => {
    if (!mounted) return

    colorIntervalRef.current = setInterval(() => {
      setColorPhase((prev) => (prev + 0.5) % 360)
    }, 100)

    return () => {
      if (colorIntervalRef.current) {
        clearInterval(colorIntervalRef.current)
      }
    }
  }, [mounted])

  // Palette switching with proper cleanup
  useEffect(() => {
    if (!mounted) return

    paletteIntervalRef.current = setInterval(() => {
      setCurrentPalette((prev) => (prev + 1) % colorPalettes.length)
    }, 25000)

    return () => {
      if (paletteIntervalRef.current) {
        clearInterval(paletteIntervalRef.current)
      }
    }
  }, [mounted, colorPalettes.length])

  // Event listeners with proper cleanup
  useEffect(() => {
    if (!mounted) return

    const throttledMouseMove = (e: MouseEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      animationFrameRef.current = requestAnimationFrame(() => handleMouseMove(e))
    }

    window.addEventListener("mousemove", throttledMouseMove, { passive: true })
    window.addEventListener("click", handleClick, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("scroll", handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mounted, handleMouseMove, handleClick, handleScroll])

  // Apply background with error handling
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return

    try {
      const palette = colorPalettes[currentPalette]
      const scrollFactor = Math.min(scrollY / 2000, 0.2)
      const mouseFactor = { x: mousePosition.x / 100, y: mousePosition.y / 100 }

      const primary = palette.primary.map((color, i) =>
        Math.round(Math.max(0, Math.min(255, color + Math.sin(((colorPhase + i * 60) * Math.PI) / 180) * 20))),
      )
      const secondary = palette.secondary.map((color, i) =>
        Math.round(Math.max(0, Math.min(255, color + Math.cos(((colorPhase + i * 60) * Math.PI) / 180) * 15))),
      )
      const tertiary = palette.tertiary.map((color, i) =>
        Math.round(Math.max(0, Math.min(255, color + Math.sin(((colorPhase + i * 30) * Math.PI) / 180) * 10))),
      )

      const gradient = `
        radial-gradient(circle at ${50 + mouseFactor.x * 15}% ${50 + mouseFactor.y * 15}%, 
          rgba(${primary.join(",")}, ${Math.max(0, 0.25 - scrollFactor * 0.05)}) 0%, 
          rgba(${secondary.join(",")}, ${Math.max(0, 0.15 - scrollFactor * 0.03)}) 40%,
          rgba(${tertiary.join(",")}, ${Math.max(0, 0.08 - scrollFactor * 0.02)}) 80%,
          rgba(255, 255, 255, 0.97) 100%
        ),
        linear-gradient(${135 + colorPhase * 0.1}deg, 
          rgba(${secondary.join(",")}, 0.1) 0%, 
          rgba(${tertiary.join(",")}, 0.05) 50%,
          rgba(${primary.join(",")}, 0.03) 100%
        ),
        linear-gradient(to bottom, 
          rgba(255, 255, 255, 0.98) 0%,
          rgba(255, 255, 255, 0.96) 100%
        )
      `

      if (document.body && document.documentElement) {
        document.body.style.background = gradient
        document.body.style.backgroundAttachment = "fixed"
        document.body.style.transition = "background 0.3s ease-out"
        document.documentElement.style.background = gradient
        document.documentElement.style.backgroundAttachment = "fixed"
      }
    } catch (error) {
      console.warn("Background update failed:", error)
    }
  }, [mounted, colorPhase, currentPalette, mousePosition, scrollY, colorPalettes])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        try {
          document.body.style.background = ""
          document.body.style.backgroundAttachment = ""
          document.documentElement.style.background = ""
          document.documentElement.style.backgroundAttachment = ""
        } catch (error) {
          console.warn("Cleanup failed:", error)
        }
      }
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Click Effects */}
      {clickEffects.map((effect) => (
        <div
          key={effect.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: Math.max(0, effect.x - 25),
            top: Math.max(0, effect.y - 25),
          }}
        >
          <div className="w-12 h-12 border-2 border-primary rounded-full animate-ping opacity-75" />
          <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full animate-pulse" />
        </div>
      ))}

      {/* Palette Indicator */}
      <div className="fixed top-20 right-4 z-40 glass-card px-3 py-2 rounded-full">
        <div className="text-xs text-gray-600 font-medium">{colorPalettes[currentPalette]?.name || "Default"}</div>
      </div>
    </>
  )
}
