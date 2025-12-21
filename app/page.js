import {
  ChevronRight,
  Car,
  Calendar,
  Shield,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CarCard } from "@/components/car-card";
import { HomeSearch } from "@/components/home-search";
import Link from "next/link";
import Image from "next/image";
import { bodyTypes, carMakes, faqItems, featuredCars } from "@/lib/data";
import { FeaturedCarLarge } from "@/components/featured-car-large";
import { StatsCounter } from "@/components/stats-counter";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getFeaturedCars } from "@/actions/home";

export default async function Home() {
  const featuredCars = await getFeaturedCars();
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-gradient overflow-hidden grid-pattern">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-500/40 rounded-full animate-pulse" />
          <div
            className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-amber-400/30 rounded-full animate-pulse"
            style={{ animationDelay: "300ms" }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-orange-400/50 rounded-full animate-pulse"
            style={{ animationDelay: "700ms" }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <Sparkles className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-300">
                  AI-Powered Car Discovery
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="text-white">Drive Into</span>
                <br />
                <span className="gradient-title">The Future</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Your next car is just a search away. Explore premium vehicles,
                compare prices, and make smarter decisions with CarMart&apos;s
                intelligent marketplace.
              </p>
            </ScrollReveal>

            {/* Search Component */}
            <ScrollReveal direction="up" delay={300}>
              <HomeSearch />
            </ScrollReveal>

            {/* Quick stats under search */}
            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                <div className="flex items-center gap-2 text-gray-400">
                  <Zap className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">15,000+ Vehicles</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">Verified Sellers</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <TrendingUp className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">Best Prices</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Featured Cars */}
      <section className="py-20 bg-zinc-950 dot-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Featured Vehicles
                </h2>
                <p className="text-gray-500">
                  Hand-picked premium cars for you
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-orange-400 hover:text-orange-300 hover:bg-white/5"
                asChild
              >
                <Link href="/cars">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ScrollReveal
              direction="scale"
              delay={100}
              className="lg:col-span-2 lg:row-span-2"
            >
              <FeaturedCarLarge car={featuredCars[0]} />
            </ScrollReveal>
            {featuredCars.slice(1, 3).map((car, index) => (
              <ScrollReveal
                key={car.id}
                direction="right"
                delay={200 + index * 100}
              >
                <CarCard car={car} />
              </ScrollReveal>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {featuredCars.slice(3, 6).map((car, index) => (
              <ScrollReveal
                key={car.id}
                direction="up"
                delay={100 + index * 100}
              >
                <CarCard car={car} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Make */}
      <section className="py-20 bg-zinc-900/50 lines-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Browse by Make
                </h2>
                <p className="text-gray-500">
                  Explore vehicles from top manufacturers
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-orange-400 hover:text-orange-300 hover:bg-white/5"
                asChild
              >
                <Link href="/cars">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carMakes.map((make, index) => (
              <ScrollReveal
                key={make.name}
                href={`/cars?make=${make.name}`}
                direction="up"
                delay={50 + index * 50}
              >
                <Link
                  href={`/cars?make=${make.name}`}
                  className="glass-card p-6 text-center glass-hover cursor-pointer group block"
                >
                  <div className="h-16 w-16 mx-auto mb-4 relative rounded-full bg-white/5 flex items-center justify-center">
                    <Image
                      src={make.imageUrl}
                      alt={make.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-white group-hover:text-orange-400 transition-colors">
                    {make.name}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ScrollReveal direction="up">
        <Testimonials />
      </ScrollReveal>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-950 grid-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose CarMart
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We&apos;re revolutionizing the way you buy and sell cars with
                cutting-edge technology
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="glass-card p-8 text-center glass-hover">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-6">
                  <Car className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Wide Selection
                </h3>
                <p className="text-gray-400">
                  Thousands of verified vehicles from trusted dealerships and
                  private sellers across the country.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className="glass-card p-8 text-center glass-hover">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Easy Test Drive
                </h3>
                <p className="text-gray-400">
                  Book a test drive online in minutes with flexible scheduling
                  options at your convenience.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <div className="glass-card p-8 text-center glass-hover">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Secure Process
                </h3>
                <p className="text-gray-400">
                  Verified listings and secure transactions with our buyer
                  protection guarantee.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Browse by Body Type */}
      <section className="py-20 bg-zinc-900/50 dot-pattern">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Browse by Body Type
                </h2>
                <p className="text-gray-500">
                  Find the perfect style for your lifestyle
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-orange-400 hover:text-orange-300 hover:bg-white/5"
                asChild
              >
                <Link href="/cars">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bodyTypes.map((type, index) => (
              <ScrollReveal
                key={type.name}
                direction="up"
                delay={100 + index * 75}
              >
                <Link
                  href={`/cars?bodyType=${type.name}`}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl block"
                >
                  <div className="h-40 md:h-48 relative">
                    <Image
                      src={type.imageUrl || "/placeholder.svg"}
                      alt={type.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-orange-500/50 transition-colors" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {type.name}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <ScrollReveal direction="up">
        <Newsletter />
      </ScrollReveal>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-950 lines-pattern">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500">
                Everything you need to know about buying and selling on CarMart
              </p>
            </div>
          </ScrollReveal>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={50 + index * 50}>
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card border-white/10 px-6 rounded-2xl overflow-hidden"
                >
                  <AccordionTrigger className="text-white hover:text-orange-400 hover:no-underline py-5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your{" "}
              <span className="gradient-title">Dream Car</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their perfect
              vehicle through CarMart.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <Link href="/cars">Browse All Cars</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl bg-transparent"
                asChild
              >
                <Link href="/sell">Sell Your Car</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-zinc-950">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <Car className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">CarMart</span>
                </div>
                <p className="text-gray-500 text-sm">
                  The smartest way to buy and sell cars. Powered by AI, trusted
                  by thousands.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <Link
                    href="/cars"
                    className="hover:text-white transition-colors"
                  >
                    Browse Cars
                  </Link>
                  <Link
                    href="/sell"
                    className="hover:text-white transition-colors"
                  >
                    Sell Your Car
                  </Link>
                  <Link
                    href="/dealers"
                    className="hover:text-white transition-colors"
                  >
                    For Dealers
                  </Link>
                  <Link
                    href="/financing"
                    className="hover:text-white transition-colors"
                  >
                    Financing
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/safety"
                    className="hover:text-white transition-colors"
                  >
                    Safety Tips
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 CarMart. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 2.281.069 2.689.069 5.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
