"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Business Owner",
    avatar: "/professional-woman-portrait.png",
    rating: 5,
    text: "CarMart made finding my dream car incredibly easy. The AI search understood exactly what I was looking for, and I found my perfect BMW within hours!",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Software Engineer",
    avatar: "/professional-man-portrait.png",
    rating: 5,
    text: "I was skeptical about buying a car online, but CarMart's verification process gave me complete confidence. Best car buying experience I've ever had.",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Director",
    avatar: "/asian-woman-professional-portrait.png",
    rating: 5,
    text: "The test drive booking feature is a game changer. I scheduled three test drives in one afternoon and found my Audi the same week. Highly recommend!",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join thousands of happy car buyers who found their perfect vehicle
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-orange-500/20" />

            <div className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src={testimonials[current].avatar || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  fill
                  className="rounded-full object-cover border-2 border-orange-500/50"
                />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                "{testimonials[current].text}"
              </p>

              <div>
                <h4 className="text-white font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-gray-500">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current ? "bg-orange-500 w-8" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
