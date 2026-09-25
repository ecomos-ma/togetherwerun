'use client';

import React, { useState, useEffect } from 'react';


const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Next Run', href: '#next-run' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'T-Shirts', href: '/t-shirts' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          mounted && scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
        suppressHydrationWarning
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src="/assets/images/WhatsApp_Image_2026-09-11_at_00.15.54-removebg-preview-1789094600479.png"
              alt="Together We Run Kech Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/togetherwerun.kech"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-orange px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest"
            >
              Join Next Run
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0 w-0' : 'w-4'
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-2xl"
          onClick={() => setMenuOpen(false)}
        />
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks?.map((link, i) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleLinkClick}
              className="font-display text-3xl font-bold text-white hover:text-primary transition-colors"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="btn-orange mt-4 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
          >
            Join Next Run
          </a>
        </nav>
      </div>
    </>
  );
}