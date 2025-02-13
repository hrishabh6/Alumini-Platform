"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-stanford-red/95 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.svg" 
              alt="Stanford Alumni" 
              width={120} 
              height={32} 
              className="h-8 w-auto sm:h-10" 
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#" className="hover:text-gray-200">Events</Link>
            <Link href="#" className="hover:text-gray-200">Reading & Resources</Link>
            <Link href="#" className="hover:text-gray-200">Programs & Perks</Link>
            <Link href="#" className="hover:text-gray-200">Communities</Link>
            <Link href="#" className="hover:text-gray-200">Volunteer</Link>
            <Link href="#" className="hover:text-gray-200">About</Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 text-sm sm:text-base"
            >
              Log in
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 text-sm sm:text-base"
            >
              Search
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen pt-16">
        <Image
          src="/images/campus-night.jpg"
          alt="Stanford Campus at Night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 md:py-32 text-center text-white">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Calling all &apos;0s and &apos;5s
            <span className="block mt-2 sm:mt-4">Stanford Reunion</span>
            <span className="block mt-2 sm:mt-4">Homecoming</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-lg sm:text-xl">
            It&apos;s time to reunite with your classmates on October 16-19, 2025.
          </p>
          <Button className="mt-6 sm:mt-8 bg-stanford-red hover:bg-stanford-red/80">
            Reunion home
          </Button>
        </div>
      </section>

      {/* Open Minds Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Stanford Open Minds</h2>
          <p className="text-center text-lg sm:text-xl mb-8 sm:mb-12">Come Curious. Leave Connected.</p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Image
              src="/images/open-minds.jpg"
              alt="Stanford Open Minds"
              width={600}
              height={400}
              className="rounded-lg w-full"
            />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Journey With Us</h3>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">
                We&apos;re bringing Stanford&apos;s new president, leading faculty, and the latest insights—you bring
                your questions and the spirit of possibility. It&apos;s a celebration of curiosity, collaboration, and
                fun. Having you there will make it even better!
              </p>
              <Button 
                variant="link" 
                className="text-stanford-red hover:text-stanford-red/80 p-0"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="bg-light-100 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Stories</h2>
          <p className="text-center text-lg sm:text-xl mb-8 sm:mb-12">
            News, views, and perspectives from the Stanford community.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Story cards would go here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stanford-dark text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <Image 
                src="/logo-white.svg" 
                alt="Stanford Alumni" 
                width={160} 
                height={40} 
                className="mb-4 w-auto h-8 sm:h-10" 
              />
              <p className="text-sm sm:text-base">Stanford Alumni Association</p>
              <p className="text-sm sm:text-base">Frances C. Arrillaga Alumni Center</p>
              <p className="text-sm sm:text-base">326 Galvez Street</p>
              <p className="text-sm sm:text-base">Stanford, CA 94305-6105</p>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><Link href="#" className="hover:text-gray-300">Get to Know SAA</Link></li>
                <li><Link href="#" className="hover:text-gray-300">STANFORD Magazine</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Help</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Member Services</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><Link href="#" className="hover:text-gray-300">Access SAA Member Card</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Check your alumni email</Link></li>
                <li><Link href="#" className="hover:text-gray-300">My Alumni Account</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Give to Stanford</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}