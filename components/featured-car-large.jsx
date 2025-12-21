"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Fuel, Gauge, Zap, ArrowRight, Star } from "lucide-react"

export function FeaturedCarLarge({ car }) {
  return (
    <div className="glass-card overflow-hidden group glass-hover h-full flex flex-col">
      {/* Image Container - Large */}
      <div className="relative h-72 lg:h-[700px] overflow-hidden">
        <Image
          src={car.images[0] || "/placeholder.svg"}
          alt={`${car.year} ${car.make} ${car.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Top Row */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold">
            <Star className="h-4 w-4 fill-white" />
            Top Pick
          </div>
          <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
            <Heart className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-orange-400 text-sm font-medium mb-1">{car.year}</p>
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                {car.make} {car.model}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">Starting at</p>
              <p className="text-3xl font-bold text-white">${car.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Specs */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <Gauge className="h-5 w-5 text-orange-400" />
            <span className="text-gray-300">{car.mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            {car.fuelType === "Electric" ? (
              <Zap className="h-5 w-5 text-orange-400" />
            ) : (
              <Fuel className="h-5 w-5 text-orange-400" />
            )}
            <span className="text-gray-300">{car.fuelType}</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-gray-300">{car.transmission}</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-gray-300">{car.bodyType}</span>
          </div>
        </div>

        {/* Action */}
        <div className="mt-auto flex gap-4">
          <Link
            href={`/cars/${car.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold transition-all duration-300 group/link"
          >
            <span>View Details</span>
            <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <button className="px-6 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 font-semibold transition-all duration-300">
            Schedule Test Drive
          </button>
        </div>
      </div>
    </div>
  )
}
