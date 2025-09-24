import React from 'react';
import { SplineScene } from "./SplineScene";
import { Spotlight } from "./Spotlight";
 
export function HeroSection() {
  return (
    <section className="w-full h-[600px] bg-black relative overflow-hidden z-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={400}
      />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row h-full items-center">
          {/* Left content */}
          <div className="flex-1 relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
              Deploy Enterprise Robotics Without The <span className="font-display text-white">Enterprise Complexity</span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg mx-auto md:mx-0 text-base md:text-lg font-medium">
              Access cutting-edge robotic solutions on-demand. No massive upfront investment. No technical headaches. Just results that transform your operations from day one.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#"
                className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-br from-neutral-900/50 via-black/30 to-neutral-800/50 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative h-full w-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </section>
  )
}