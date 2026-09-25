'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

export default function NextRunSection() {
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

  const details = [
    { icon: 'CalendarIcon', label: 'Date', value: 'Every Sunday' },
    { icon: 'ClockIcon', label: 'Time', value: '7:30 AM' },
    { icon: 'MapPinIcon', label: 'Meeting Point', value: "McDonald's, Route de Casa" },
    { icon: 'ArrowRightCircleIcon', label: 'Distance', value: '5K / 7K' },
  ];

  const communityPhotos = [
    { src: '/assets/images/image-1777689707538.png', alt: 'Together We Run community members running together in Marrakech' },
    { src: '/assets/images/image-1777689777447.png', alt: 'Group of runners from Together We Run community during a morning run' },
    { src: '/assets/images/IMG_1532-1777689801966.png', alt: 'Together We Run community photo during a group run event' },
  ];

  return (
    <section
      id="next-run"
      ref={sectionRef}
      className="relative z-10 py-20 md:py-28 bg-[#0D0D0D] border-t border-white/5 overflow-hidden"
    >
      {/* Community photos background collage */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-3 h-full w-full">
          {communityPhotos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-[#0D0D0D]/85" />
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/6 rounded-full blur-[160px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
        {/* Section label */}
        <div className={`flex flex-col items-center gap-3 mb-12 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Upcoming</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white text-center tracking-tight">
            Next Run
          </h2>
          <p className="text-white/50 text-base text-center max-w-md">
            Show up. No registration needed. Just bring yourself (and water).
          </p>
        </div>

        {/* Event Poster Card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-150 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative glass-dark rounded-3xl overflow-hidden border border-white/8">
            {/* Top orange accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary animate-gradient" />

            {/* Poster content */}
            <div className="p-6 sm:p-8 md:p-12">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Morning Run</div>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    Sunday Morning Drop
                  </h3>
                </div>
                {/* Status badge */}
                <div className="flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-5 py-2.5 w-fit">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">Open</span>
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {details.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white/[0.04] rounded-2xl p-4 border border-white/5 hover:border-primary/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={d.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" variant="outline" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{d.label}</div>
                      <div className="font-display font-bold text-base sm:text-lg text-white">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Distance badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 glass-orange rounded-full px-5 py-2.5">
                  <Icon name="ArrowRightIcon" size={14} className="text-primary" variant="outline" />
                  <span className="font-bold text-sm text-primary">5K Route</span>
                </div>
                <div className="flex items-center gap-2 border border-white/10 rounded-full px-5 py-2.5 bg-white/[0.03]">
                  <Icon name="ArrowRightIcon" size={14} className="text-white/60" variant="outline" />
                  <span className="font-bold text-sm text-white/60">7K Route</span>
                </div>
                <div className="flex items-center gap-2 border border-accent/20 rounded-full px-5 py-2.5 bg-accent/5">
                  <Icon name="StarIcon" size={14} className="text-accent" variant="outline" />
                  <span className="font-bold text-sm text-accent">All Levels</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://instagram.com/togetherwerun.kech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-orange flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
                >
                  <Icon name="CameraIcon" size={16} variant="outline" />
                  Join on Instagram
                </a>
                <a
                  href="#schedule"
                  className="btn-outline-white flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
                >
                  <Icon name="CalendarIcon" size={16} variant="outline" />
                  Full Schedule
                </a>
              </div>
            </div>

            {/* Bottom decorative row */}
            <div className="px-8 sm:px-12 py-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-white/30 uppercase tracking-widest">Free to join</span>
              <span className="text-xs text-white/30 uppercase tracking-widest">Marrakech, Morocco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}