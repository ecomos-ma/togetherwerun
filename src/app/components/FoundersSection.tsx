'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Founder {
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
}

const founders: Founder[] = [
  {
    name: 'Adam',
    role: 'Co-Founder',
    description: 'Adam believes running is the most powerful way to bring people together. He co-founded TogetherWeRunKech to create a space where anyone, at any pace, truly belongs. For him, building this community isn\'t just a project — it\'s his purpose.',
    image: '/assets/images/WhatsApp_Image_2026-09-25_at_17.28.14-1790353734365.jpeg',
    alt: 'Adam, co-founder of Together We Run Marrakech',
  },
  {
    name: 'Anas',
    role: 'Co-Founder',
    description: 'Anas found running during one of the most transformative periods of his life — and never looked back. He co-founded TogetherWeRunKech because he knows the miles feel lighter when shared. His warmth and energy make every new runner feel right at home from day one.',
    image: '/assets/images/WhatsApp_Image_20ddd26-09-25_at_17.25.42-1790353603136.jpeg.jpeg',
    alt: 'Anas, co-founder of Together We Run Marrakech',
  },
];

export default function FoundersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founders"
      ref={sectionRef}
      className="relative z-10 py-20 md:py-28 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`flex flex-col items-center text-center gap-4 mb-14 md:mb-20 transition-all duration-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2">
            <Icon name="UserGroupIcon" size={14} className="text-primary" variant="outline" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">The People Behind It</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Meet the Founders
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl">
            Two friends, one mission — to build a running community that moves Marrakech forward.
          </p>
        </div>

        {/* Individual Founder Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={`relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] transition-all duration-700 ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: revealed ? `${200 + i * 150}ms` : '0ms' }}
            >
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <AppImage
                  src={founder.image}
                  alt={founder.alt}
                  fill
                  className={
                    i === 0
                      ? 'object-contain object-center'
                      : 'object-cover object-center scale-[1.05]'
                  }
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {founder.role}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-3xl text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
