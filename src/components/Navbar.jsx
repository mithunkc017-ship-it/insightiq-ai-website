import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export default function Navbar({ onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Agent Engine', href: '#agent-simulator' },
    { label: 'ROI Calculator', href: '#calculator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-sky-200 shadow-sm py-3'
          : 'bg-white/70 backdrop-blur-md py-4 border-b border-sky-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-400 p-[2px] shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-sky-600 group-hover:scale-110 transition-transform shadow-[0_0_8px_rgba(2,132,199,0.8)]" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-wider text-slate-900">
                  {AGENCY_INFO.name}
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300 font-bold">
                  STUDIOS
                </span>
              </div>
              <span className="text-[11px] text-slate-600 font-medium tracking-tight hidden sm:block">
                Autonomous AI Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 border border-sky-200 rounded-full px-4 py-1.5 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs text-slate-700 hover:text-sky-600 hover:bg-white rounded-full transition-all duration-200 font-bold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Availability */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-700 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Booking Q2/Q3</span>
            </div>

            <button
              onClick={onOpenInquiry}
              className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all duration-300 shadow-md shadow-sky-600/30 active:scale-95"
            >
              <span>Launch Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1.5 text-xs font-bold text-white bg-sky-600 rounded-full shadow-xs"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-sky-50 border border-sky-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white border-2 border-sky-200 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-800 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition font-bold"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-sky-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl text-center shadow-md shadow-sky-600/20"
              >
                Book Discovery Strategy Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
