'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const partners = [
  { name: 'Sport Partner', icon: 'TrophyIcon' },
  { name: 'Local Brand', icon: 'StarIcon' },
  { name: 'Nutrition Co.', icon: 'BeakerIcon' },
  { name: 'Apparel Brand', icon: 'ShoppingBagIcon' },
  { name: 'Marrakech Sport', icon: 'MapPinIcon' },
  { name: 'Fitness Club', icon: 'BoltIcon' },
];

export default function PartnersSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative z-10 py-16 md:py-24 bg-[#0D0D0D] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col items-center gap-3 mb-12 text-center transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 w-fit">
            <Icon name="HandshakeIcon" size={14} className="text-primary" variant="outline" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Partners & Sponsors</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            They Run With Us
          </h2>
          <p className="text-white/45 text-sm max-w-md">
            Brands and organizations that support the Marrakech running community.
          </p>
        </div>

        {/* Partner logos grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 transition-all duration-700 delay-150 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {partners.map((partner, i) => (
            <div
              key={i}
              className="partner-box rounded-2xl p-6 flex flex-col items-center justify-center gap-3 aspect-square"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Icon
                name={partner.icon as Parameters<typeof Icon>[0]['name']}
                size={28}
                className="text-white/20"
                variant="outline"
              />
              <span className="text-[10px] uppercase tracking-widest text-white/25 text-center leading-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Become a partner CTA */}
        <div className={`flex justify-center transition-all duration-700 delay-300 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest"
          >
            <Icon name="PlusCircleIcon" size={16} variant="outline" />
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}