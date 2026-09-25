'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function JoinCTASection() {
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
      ref={sectionRef}
      className="relative z-10 py-20 md:py-28 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      
      {/* Background image with strong overlay */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/IMG_1532-1777690376552.png"
          alt="Together We Run community group photo, large crowd of runners at a night race event in Marrakech"
          fill
          className="object-cover object-center"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-[#0A0A0A]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8">
        <div>
          <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Next Sunday</span>
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.0] mb-6">
            Ready to <span className="text-gradient-orange">Run?</span>
          </h2>
          <p className="text-lg text-white/65 max-w-xl mx-auto leading-relaxed">
            No registration. No fees. Just show up at 7:30 AM every Sunday
            in front of McDonald&apos;s on Route de Casa, Marrakech.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest">
            
            <Icon name="CameraIcon" size={16} variant="outline" />
            DM us on Instagram
          </a>
          <a
            href="#next-run"
            className="btn-outline-white inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest">
            
            <Icon name="CalendarIcon" size={16} variant="outline" />
            See Next Run Details
          </a>
        </div>

        {/* Social proof row */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          {[
          { icon: 'UsersIcon', text: '5.5K+ Followers' },
          { icon: 'MapPinIcon', text: 'Marrakech, Morocco' },
          { icon: 'StarIcon', text: 'All Levels Welcome' }].
          map((item, i) =>
          <div key={i} className="flex items-center gap-2 text-sm text-white/45">
              <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={14} className="text-primary" variant="outline" />
              {item.text}
            </div>
          )}
        </div>
      </div>
    </section>);

}