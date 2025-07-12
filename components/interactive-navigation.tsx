"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Smartphone } from "lucide-react"

export function InteractiveNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const observerRef = useRef<IntersectionObserver | null>(null)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolled(window.scrollY > 50)
    }, 10)
  }, [])

  const smoothScrollTo = useCallback((elementId: string) => {
    try {
      const element = document.getElementById(elementId.substring(1))
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } catch (error) {
      console.warn("Scroll failed:", error)
    }
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  // Setup scroll listener
  useEffect(() => {
    if (typeof window === "undefined") return

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll])

  // Setup intersection observer for active section
  useEffect(() => {
    if (typeof window === "undefined") return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      },
    )

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1))
      if (element && observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [navItems])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass-header backdrop-blur-xl border-b" : "bg-transparent"
      }`}
    >
      <div className="container pl-6 flex h-16 items-center justify-between">
        <button
          className="flex  items-center space-x-2 group cursor-pointer bg-transparent border-none"
          onClick={() => smoothScrollTo("#home")}
          aria-label="Go to home"
        >
          <div className="relative">
            <Smartphone className="h-6 w-6 text-primary animate-pulse-glow group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 animate-ping opacity-20">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
          </div>
          <span className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">YashMobile</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" role="navigation">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => smoothScrollTo(item.href)}
              className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative bg-transparent border-none cursor-pointer ${
                activeSection === item.href.substring(1) ? "text-primary" : "text-gray-700 hover:text-primary"
              }`}
              aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

{/* Call Button */}
{/* Call & WhatsApp Buttons - Desktop */}
<div className="hidden md:flex items-center gap-3">
  <a
    href="tel:999990486"
    className="flex rounded-full items-center px-4 py-2 glass-card glass-card-hover animate-pulse-glow text-sm font-medium"
  >
    <Phone className="w-4 h-4 mr-2" />
    Call Now
  </a>

  <a
    href="https://wa.me/919929990486"
    target="_blank"
    rel="noopener noreferrer"
    className="flex rounded-full items-center px-4 py-2 glass-card glass-card-hover animate-pulse-glow text-sm font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-4 h-4 mr-2 text-green-600"
    >
      <path d="M16 .396C7.163.396.001 7.56.001 16.396c0 2.896.768 5.656 2.224 8.09L0 32l7.763-2.007A15.85 15.85 0 0016 31.396c8.837 0 16-7.163 16-16.001C32 7.56 24.837.396 16 .396zm0 29.063a13.02 13.02 0 01-6.594-1.783l-.471-.271-4.607 1.189 1.227-4.487-.306-.46a12.988 12.988 0 01-2.021-6.998c0-7.18 5.835-13.015 13.016-13.015 7.181 0 13.016 5.835 13.016 13.015 0 7.182-5.835 13.017-13.016 13.017zm7.217-9.93c-.396-.198-2.343-1.157-2.707-1.288-.363-.132-.627-.198-.892.198-.264.396-1.024 1.288-1.256 1.552-.231.264-.462.297-.858.099-.396-.198-1.671-.616-3.18-1.963-1.176-1.05-1.97-2.347-2.201-2.743-.231-.396-.024-.61.173-.807.178-.177.396-.462.594-.693.198-.231.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.892-2.148-1.223-2.946-.321-.772-.648-.66-.892-.66h-.762c-.264 0-.693.099-1.056.495s-1.39 1.36-1.39 3.301c0 1.941 1.422 3.816 1.62 4.086.198.264 2.794 4.267 6.767 5.981.946.409 1.684.654 2.26.838.95.303 1.815.261 2.5.159.763-.114 2.343-.957 2.672-1.88.33-.924.33-1.715.231-1.88-.099-.165-.363-.264-.759-.462z" />
    </svg>
    WhatsApp
  </a>
</div>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-t" role="navigation">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => smoothScrollTo(item.href)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 bg-transparent border-none cursor-pointer ${
                  activeSection === item.href.substring(1)
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
  <a
    href="tel:999990486"
    className="w-full rounded-full flex items-center justify-center px-4 py-2 glass-card text-sm font-medium"
  >
    <Phone className="w-4 h-4 mr-2" />
    Call Now
  </a>

  <a
    href="https://wa.me/919929990486"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full rounded-full flex items-center justify-center px-4 py-2 glass-card text-sm font-medium"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-4 h-4 mr-2 text-green-600"
    >
      <path d="M16 .396C7.163.396.001 7.56.001 16.396c0 2.896.768 5.656 2.224 8.09L0 32l7.763-2.007A15.85 15.85 0 0016 31.396c8.837 0 16-7.163 16-16.001C32 7.56 24.837.396 16 .396zm0 29.063a13.02 13.02 0 01-6.594-1.783l-.471-.271-4.607 1.189 1.227-4.487-.306-.46a12.988 12.988 0 01-2.021-6.998c0-7.18 5.835-13.015 13.016-13.015 7.181 0 13.016 5.835 13.016 13.015 0 7.182-5.835 13.017-13.016 13.017zm7.217-9.93c-.396-.198-2.343-1.157-2.707-1.288-.363-.132-.627-.198-.892.198-.264.396-1.024 1.288-1.256 1.552-.231.264-.462.297-.858.099-.396-.198-1.671-.616-3.18-1.963-1.176-1.05-1.97-2.347-2.201-2.743-.231-.396-.024-.61.173-.807.178-.177.396-.462.594-.693.198-.231.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.892-2.148-1.223-2.946-.321-.772-.648-.66-.892-.66h-.762c-.264 0-.693.099-1.056.495s-1.39 1.36-1.39 3.301c0 1.941 1.422 3.816 1.62 4.086.198.264 2.794 4.267 6.767 5.981.946.409 1.684.654 2.26.838.95.303 1.815.261 2.5.159.763-.114 2.343-.957 2.672-1.88.33-.924.33-1.715.231-1.88-.099-.165-.363-.264-.759-.462z" />
    </svg>
    WhatsApp
  </a>
</div>

          </div>
        </div>
      )}
    </header>
  )
}
