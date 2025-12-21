"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Search,
  Heart,
  CarFront,
  Layout,
  ArrowLeft,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function HeaderClient({ isAdmin, isAdminPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "glass border-b border-white/10 shadow-lg shadow-black/20"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO / NAME (Design priority) */}
          <Link href={isAdminPage ? "/admin" : "/"} className="flex items-center gap-3">
            <span className="text-xl font-bold text-white">CarMart</span>
            {isAdminPage && (
              <span className="text-xs text-orange-400">admin</span>
            )}
          </Link>

          {/* DESKTOP NAV */}
          {!isAdminPage && (
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
              <Link href="/cars" className="text-gray-400 hover:text-white">
                Browse Cars
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </nav>
          )}

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            <SignedIn>
              {!isAdminPage && (
                <Link href="/reservations">
                  <Button className="px-6 py-4 border border-white/20 text-black hover:bg-white/10 hover:text-white font-semibold transition-all duration-300">
                    <CarFront className="h-4 w-4 mr-2" />
                    My Reservations
                  </Button>
                </Link>
              )}

              {!isAdminPage && (
                <Link href="/saved-cars">
                  <Button className="px-6 py-4 border border-white/20 text-black hover:bg-white/10 hover:text-white font-semibold transition-all duration-300">
                    <Heart className="h-4 w-4 mr-2" />
                    Saved Cars
                  </Button>
                </Link>
              )}

              {isAdminPage && (
                <Link href="/">
                  <Button className="bg-black text-white">
                    <ArrowLeft size={18} />
                    <span>Back to App</span>
                  </Button>
                </Link>
              )}

              {isAdmin && !isAdminPage && (
                <Link href="/admin">
                  <Button variant="ghost" >
                    <Layout className="h-4 w-4 mr-2" />
                    Admin Portal
                  </Button>
                </Link>
              )}
            </SignedIn>

            <SignedOut>
              {!isAdminPage && (
                <SignInButton forceRedirectUrl="/">
                  <Button className="bg-gradient-to-right from-orange-500 to-amber-500 text-white border-0">
                    Sign In
                  </Button>
                </SignInButton>
              )}
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: { avatarBox: "w-9 h-9" },
                }}
              />
            </SignedIn>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {!isAdminPage && (
                <>
                  <Link href="/cars" className="text-gray-400 hover:text-white transition-colors">
                    Browse Cars
                  </Link>
                  <Link href="/sell" className="text-gray-400 hover:text-white transition-colors">
                    Sell Your Car
                  </Link>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </>
              )}

              <SignedOut>
                <SignInButton forceRedirectUrl="/">
                  <Button className="w-full bg-gradient-to-right from-orange-500 to-amber-500 text-white border-0">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
            </nav>
          </div>
        )}
      </div>
    </header >
  );
}
