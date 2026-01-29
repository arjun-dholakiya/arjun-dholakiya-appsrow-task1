import React from 'react';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Soft vignette background */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-16 items-start">
          {/* Logo + Newsletter */}
          <div className="md:col-span-2">
            <img src={logo} alt="Pelotech" className="w-28 mb-8 opacity-90" />

            <p className="text-sm text-white/90 mb-4">Join our newsletter</p>

            <div className="flex items-center gap-3">
              {/* Input */}
              <input
                type="email"
                placeholder="Company email"
                className="
      w-64
      px-4
      py-2.5
      text-sm
      text-[#9a9a9a]
      bg-white
      rounded-md
      outline-none
      shadow-[0_0_0_1px_rgba(255,255,255,0.15)]
      placeholder:text-[#9a9a9a]
    "
              />

              {/* Button */}
              <button
                className="
      px-5
      py-2.5
      text-sm
      font-medium
      text-white
      bg-[#2b2b2b]
      rounded-md
      hover:bg-[#3a3a3a]
      transition
    "
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-medium mb-4 text-white/60">Company</p>
            <ul className="space-y-2 text-[16px] text-white/90">
              <li>About us</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-sm font-medium mb-4 text-white/60">Resources</p>
            <ul className="space-y-2 text-[16px] text-white/90">
              <li>Blog</li>
              <li>Content Hub</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-medium mb-4 text-white/60">Services</p>
            <ul className="space-y-2 text-[16px] text-white/90">
              <li>Kubernetes Expertise</li>
              <li>AWS Expertise</li>
              <li>Cloud services</li>
              <li>Software Development</li>
              <li>& Data Solutions</li>
              <li>Trainings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium mb-4 text-white/60">
              Something in mind?
            </p>
            <ul className="space-y-2 text-[16px] text-white/90">
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="border-t border-white/10" />
    </footer>
  );
}
