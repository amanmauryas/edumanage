import React from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-8 h-8" />
              <span className="text-2xl font-bold">EduManage</span>
            </div>
            <p className="text-blue-200">
              Empowering educational institutions with modern management solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Features</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Fatehpur</li>
              <li>Uttar Pradesh, 212622</li>
              <li>info@edumanage.com</li>
              <li>+91 9999999999</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">Stay updated with our latest features and news.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-blue-300 border border-blue-700 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full bg-white text-blue-900 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200">© 2025 EduManage. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-200 hover:text-white"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-blue-200 hover:text-white"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-blue-200 hover:text-white"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-blue-200 hover:text-white"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}