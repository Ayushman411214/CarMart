"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-16 bg-zinc-900/50 border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
            <Mail className="h-7 w-7 text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Stay in the Loop</h3>
          <p className="text-gray-400 mb-8">
            Get notified about new listings, price drops, and exclusive deals tailored to your preferences.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <Check className="h-5 w-5" />
              <span>Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-orange-500/50"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
