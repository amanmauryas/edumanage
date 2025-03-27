import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900">
          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            backgroundPosition: 'center center',
          }}
        ></div>

        {/* Moving Stars */}
        <div className="stars absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400">
            Transform Your Educational Journey with AI
            
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-200">
            Empower your institution with our AI-driven school management system. 
            Streamline operations, enhance learning experiences, and drive success.
            
          </p>
          <div className="flex gap-4 animate-fade-in delay-300">
            <button className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-white/20">
              Get Started 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute right-10 top-1/4 w-32 h-32 border border-white/20 rounded-full animate-float delay-300"></div>
      <div className="absolute left-1/4 bottom-1/4 w-24 h-24 border border-white/20 rounded-full animate-float"></div>
      <div className="absolute right-1/3 bottom-1/3 w-16 h-16 border border-white/20 rounded-full animate-float delay-700"></div>
    </div>
  );
}