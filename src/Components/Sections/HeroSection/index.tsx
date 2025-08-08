import React from 'react'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium border border-slate-700 mb-6">
            🚀 Introducing the Future
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Build Beyond
            <br />
            <span className="text-purple-400">Imagination</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your ideas into reality with our cutting-edge platform.
            Experience the perfect blend of innovation, performance, and simplicity.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-slate-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800/50 transition-all duration-300 flex items-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-slate-400" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
