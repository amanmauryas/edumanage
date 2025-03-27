import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { SignUp, useClerk } from '@clerk/clerk-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { openSignUp } = useClerk(); // Clerk function to open signup modal

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">codecollab.in</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
            <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="text-white/90 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">Testimonials</a>
            <button 
              className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all"
              onClick={() => openSignUp()} // Open Clerk's sign-up modal
            >
              Sign In
            </button>
            <button 
              className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-all"
              onClick={() => openSignUp()} // Open Clerk's sign-up modal
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="text-white/90 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">Testimonials</a>
              <button 
                className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all"
                onClick={() => openSignUp()} // Open Clerk's sign-up modal
              >
                Sign In
              </button>
              <button 
                className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-blue-50 transition-all"
                onClick={() => openSignUp()} // Open Clerk's sign-up modal
              >
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
