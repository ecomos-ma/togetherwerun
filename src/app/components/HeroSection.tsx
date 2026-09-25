'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const badgeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = document.getElementById('hero-content');
    if (el) {
      setTimeout(() => el?.classList?.add('hero-loaded'), 100);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-end overflow-hidden"
      aria-label="Hero">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/IMG_1532-1777690068249.png"
          alt="Runners in Marrakech at dawn, orange sunrise, urban street, athletic energy, dark moody atmosphere"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
      </div>

      {/* Gradient Overlay — strong at bottom for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/55 to-[#0A0A0A]/20" />
      {/* Side vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-transparent" />

      {/* Rotating Badge */}
      <div className="absolute top-28 right-6 md:right-16 z-30 hidden md:block pointer-events-none">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg
            ref={badgeRef}
            className="animate-spin-slow w-full h-full"
            viewBox="0 0 100 100"
            aria-hidden="true">
            
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent" />
              
            </defs>
            <text
              fontSize="9.5"
              fontFamily="var(--font-dm-sans)"
              fontWeight="700"
              letterSpacing="3px"
              fill="#F97316">
              
              <textPath href="#circlePath" startOffset="0%">
                MARRAKECH • RUN CLUB • 2024 •
              </textPath>
            </text>
          </svg>
          <Icon name="BoltIcon" size={20} className="absolute text-primary" variant="solid" />
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-between px-6 md:px-16">
        <div className="w-px h-full bg-white/[0.03]" />
        <div className="w-px h-full bg-white/[0.03] hidden md:block" />
        <div className="w-px h-full bg-white/[0.03] hidden lg:block" />
        <div className="w-px h-full bg-white/[0.03]" />
      </div>

      {/* Hero Content */}
      <div
        id="hero-content"
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-24 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        
        {/* Left — Main Text */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 glass-dark rounded-full px-4 py-2 w-fit"
            style={{ animation: 'animationIn 0.7s ease-out 0.1s both' }}>
            
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">
              Marrakech Running Community
            </span>
          </div>

          {/* Headline */}
          <div style={{ animation: 'animationIn 0.8s ease-out 0.25s both' }}>
            <h1 className="font-display font-extrabold leading-[0.88] tracking-tighter text-white">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                Together
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gradient-orange">
                We Run
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                Kech
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg md:text-xl text-white/75 max-w-lg leading-relaxed font-medium"
            style={{ animation: 'animationIn 0.8s ease-out 0.4s both' }}>
            
            All levels welcome — beginners, casual runners, and speed demons.
            Show up. Run. Belong.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={{ animation: 'animationIn 0.8s ease-out 0.55s both' }}>
            
            <a
              href="https://instagram.com/togetherwerun.kech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-widest">
              
              <Icon name="BoltIcon" size={16} variant="solid" />
              Join Next Run
            </a>
            <a
              href="#schedule"
              className="btn-outline-white inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-widest">
              
              <Icon name="CalendarIcon" size={16} variant="outline" />
              View Schedule
            </a>
          </div>
        </div>

        {/* Right — Stats Cards */}
        <div
          className="lg:col-span-5 grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-4"
          style={{ animation: 'animationIn 0.9s ease-out 0.65s both' }}>
          
          {/* Card: Posts */}
          <div className="glass-dark rounded-2xl p-4 lg:p-6 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
            <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Icon name="CameraIcon" size={18} className="text-primary" variant="outline" />
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-none">90+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mt-0.5">Posts</div>
            </div>
          </div>
          {/* Card: Followers */}
          <div className="glass-dark rounded-2xl p-4 lg:p-6 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
            <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Icon name="UsersIcon" size={18} className="text-primary" variant="outline" />
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-none">5.5K+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mt-0.5">Followers</div>
            </div>
          </div>
          {/* Card: Runs */}
          <div className="glass-dark rounded-2xl p-4 lg:p-6 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
            <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
              <Icon name="ArrowPathIcon" size={18} className="text-accent" variant="outline" />
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl lg:text-3xl text-white leading-none">
                <span className="text-accent">∞</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mt-0.5">Weekly Runs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>);

}