"use client"

import { useEffect, useRef, useState } from "react"

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up", // up, down, left, right, scale
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(40px)"
      case "down":
        return "translateY(-40px)"
      case "left":
        return "translateX(40px)"
      case "right":
        return "translateX(-40px)"
      case "scale":
        return "scale(0.9)"
      default:
        return "translateY(40px)"
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getInitialTransform(),
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
