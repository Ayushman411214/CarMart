"use client"

import { useEffect, useState, useRef } from "react"
import { Car, Users, Building2, Award } from "lucide-react"

const stats = [
  { icon: Car, value: 15000, suffix: "+", label: "Cars Listed" },
  { icon: Users, value: 50000, suffix: "+", label: "Happy Customers" },
  { icon: Building2, value: 500, suffix: "+", label: "Trusted Dealers" },
  { icon: Award, value: 99, suffix: "%", label: "Satisfaction Rate" },
]

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-zinc-900/80 border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-orange-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
