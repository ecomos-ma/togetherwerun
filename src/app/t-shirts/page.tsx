'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export default function TShirtsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative bg-[#0A0A0A] min-h-screen overflow-x-hidden flex flex-col">
      {/* Decorative grid lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 sm:px-6 max-w-7xl mx-auto left-0 right-0">
        <div className="w-px h-full bg-white/[0.025]" />
        <div className="w-px h-full bg-white/[0.025] hidden md:block" />
        <div className="w-px h-full bg-white/[0.025] hidden lg:block" />
        <div className="w-px h-full bg-white/[0.025]" />
      </div>

      {/* Ambient glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <Header />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-24 text-center">
        {/* Badge */}
        <div
          className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Coming Soon</span>
          </div>
        </div>

        {/* Heading */}
        <div
          className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight mb-4">
            Our T-Shirts
          </h1>
          <p className="text-white/40 text-lg sm:text-xl max-w-md mx-auto leading-relaxed mb-12">
            We&apos;re working on something you&apos;ll want to run in. The TogetherWeRun Kech collection is almost here.
          </p>
        </div>

        {/* T-Shirt Mockup Card */}
        <div
          className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
        >
          <div className="relative inline-block group">
            {/* Card */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:bg-white/8">
              {/* Coming Soon ribbon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-primary text-black text-xs font-extrabold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg shadow-primary/30">
                  Coming Soon
                </div>
              </div>

              {/* T-Shirt Mockup Card */}
              <div className="relative w-64 sm:w-72 mx-auto">
                {/* SVG T-Shirt placeholder */}
                <div className="flex items-center justify-center h-64 sm:h-72">
                  <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-48 h-48 opacity-20"
                  >
                    <path
                      d="M60 30 L20 60 L40 70 L40 160 L160 160 L160 70 L180 60 L140 30 Q120 50 100 50 Q80 50 60 30Z"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Card label */}
              <div className="mt-6 text-center">
                <p className="text-white/70 font-semibold text-base tracking-wide">TWR Kech Collection</p>
                <p className="text-white/30 text-xs uppercase tracking-widest mt-1">Drop 01 — 2026</p>
              </div>
            </div>

            {/* Glow effect under card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/20 blur-2xl rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Divider */}
        <div
          className={`w-16 h-px bg-primary/30 mt-14 mb-10 transition-all duration-700 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Notify line */}
        <div
          className={`transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-white/30 text-sm uppercase tracking-widest mb-6">
            Follow us for the drop
          </p>
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest"
          >
            <Icon name="ArrowTopRightOnSquareIcon" size={14} variant="outline" />
            @togetherwerun.kech
          </a>
        </div>

        {/* Back link */}
        <div
          className={`mt-10 transition-all duration-700 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            <Icon name="ArrowLeftIcon" size={14} variant="outline" />
            Back to home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
