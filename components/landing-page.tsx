'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { PiggyBank, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"
import { OnboardingFlow } from './onboarding-flow'

export function LandingPage() {
  const [showOnboarding, setShowOnboarding] = useState(false)

  return (
    <div className="min-h-screen bg-[#CCFF99] text-black">
      {showOnboarding ? (
        <OnboardingFlow />
      ) : (
        <>
          {/* Header */}
          <header className="bg-[#00CC66] py-4 sticky top-0 z-10 shadow-md">
            <div className="container mx-auto px-4">
              <nav className="flex justify-center items-center space-x-6">
                <Link href="/" className="text-white hover:text-[#CCFF99] transition-colors">Home</Link>
                <Link href="#courses" className="text-white hover:text-[#CCFF99] transition-colors">Courses</Link>
                <Link href="#testimonials" className="text-white hover:text-[#CCFF99] transition-colors">Testimonials</Link>
                <Link href="#signup" className="text-white hover:text-[#CCFF99] transition-colors">Sign Up</Link>
              </nav>
            </div>
          </header> 

          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl font-bold mb-6">Learn Money Skills, Change Your Future</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Empower Economy empowers young minds with essential financial knowledge for a brighter tomorrow.
            </p>
            <Button 
              className="bg-[#FF6B6B] hover:bg-[#FF4F4F] text-white text-lg py-6 px-8 rounded-full transition-colors"
              onClick={() => setShowOnboarding(true)}
            >
              Start Learning Now
            </Button>
          </section>

          {/* Featured Courses Section */}
          <section id="courses" className="bg-white py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Budgeting Basics", icon: <PiggyBank size={40} /> },
                  { title: "Investing 101", icon: <TrendingUp size={40} /> },
                  { title: "Smart Spending", icon: <DollarSign size={40} /> },
                ].map((course, index) => (
                  <Card key={index} className="bg-[#CCFF99] border-none hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="mb-4 text-[#00CC66]">{course.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-center">Learn essential skills to manage your money wisely.</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-16 bg-[#00CC66]">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">What Our Students Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Alex, 16",
                    quote: "Empower Economy taught me how to save for my first car. It's amazing!",
                  },
                  {
                    name: "Mia, 14",
                    quote: "I never knew learning about money could be so fun and easy!",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <p className="mb-4 italic">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Sign-up Form Section */}
          <section id="signup" className="bg-[#CCFF99] py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Join Empower Economy</h2>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" className="w-full" />
                  <Input type="email" placeholder="Your Email" className="w-full" />
                  <Button 
                    className="w-full bg-[#FF6B6B] hover:bg-[#FF4F4F] text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      setShowOnboarding(true)
                    }}
                  >
                    Sign Up for Free
                  </Button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#00CC66] text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; {new Date().getFullYear()} Empower Economy. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}