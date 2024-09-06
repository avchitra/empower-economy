'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, User, Mail, Target, BookOpen, CheckCircle } from 'lucide-react'

const steps = [
  { title: 'Welcome', icon: User },
  { title: 'Details', icon: Mail },
  { title: 'Goals', icon: Target },
  { title: 'Experience', icon: BookOpen },
  { title: 'Confirm', icon: CheckCircle },
]

const financialGoals = [
  'Save for emergencies',
  'Invest for the future',
  'Pay off debt',
  'Budget effectively',
  'Understand credit',
]

const experienceLevels = ['Beginner', 'Intermediate', 'Advanced']

export function OnboardingFlow() {
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState({
    age: '',
    name: '',
    email: '',
    goals: [],
    experience: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleGoalToggle = (goal: string) => {
    setUserData({
      ...userData,
      goals: userData.goals.includes(goal)
        ? userData.goals.filter((g) => g !== goal)
        : [...userData.goals, goal],
    })
  }

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const ProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        className="bg-[#00CC66] h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${((step + 1) / steps.length) * 100}%` }}
      ></div>
    </div>
  )

  const StepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00CC66]">Welcome to Empower Economy!</h2>
            <p className="text-gray-600">Let's start by verifying your age.</p>
            <input
              type="number"
              name="age"
              value={userData.age}
              onChange={handleInputChange}
              placeholder="Enter your age"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00CC66]"
            />
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00CC66]">Personal Details</h2>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00CC66]"
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00CC66]"
            />
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00CC66]">Financial Goals</h2>
            <p className="text-gray-600">Select your financial goals:</p>
            <div className="grid grid-cols-2 gap-2">
              {financialGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  className={`p-2 rounded-md transition-colors ${
                    userData.goals.includes(goal)
                      ? 'bg-[#CCFF99] text-[#00CC66]'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00CC66]">Experience Level</h2>
            <p className="text-gray-600">Select your experience level with finance:</p>
            <div className="flex flex-col space-y-2">
              {experienceLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setUserData({ ...userData, experience: level })}
                  className={`p-2 rounded-md transition-colors ${
                    userData.experience === level
                      ? 'bg-[#CCFF99] text-[#00CC66]'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#00CC66]">Confirmation</h2>
            <p className="text-gray-600">Great job! Here's your personalized course recommendation:</p>
            <div className="bg-[#CCFF99] p-4 rounded-md">
              <h3 className="text-xl font-semibold text-[#00CC66]">
                {userData.experience} Financial Management
              </h3>
              <p className="text-gray-700">
                This course is tailored to your goals and experience level. Get ready to empower your
                financial future!
              </p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <ProgressBar />
        <div className="flex items-center justify-between mb-6">
          {steps.map((s, index) => {
            const Icon = s.icon
            return (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index <= step ? 'text-[#00CC66]' : 'text-gray-400'
                }`}
              >
                <div
                  className={`rounded-full p-2 ${
                    index <= step ? 'bg-[#CCFF99]' : 'bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span className="text-xs mt-1 text-center w-16 truncate">{s.title}</span>
              </div>
            )
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <StepContent />
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              step === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#FF6B6B] text-white hover:bg-opacity-80'
            }`}
          >
            <ChevronLeft size={20} className="mr-2" />
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex items-center px-4 py-2 bg-[#00CC66] text-white rounded-md hover:bg-opacity-80 transition-colors"
          >
            {step === steps.length - 1 ? 'Finish' : 'Next'}
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}