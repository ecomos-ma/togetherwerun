'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface RunType {
  tag: string;
  title: string;
  icon: string;
  time: string;
  day: string;
  location: string;
  description: string;
  distance: string;
  color: string;
}

const runTypes: RunType[] = [
  {
    tag: 'Morning',
    title: 'Morning Runs',
    icon: 'SunIcon',
    time: '7:30 AM',
    day: 'Every Sunday',
    location: "McDonald's, Route de Casa",
    description: 'Start your Sunday strong. Easy pace, great energy, fresh Marrakech air. The perfect way to kick off your week with the community.',
    distance: '5K / 7K',
    color: 'primary',
  },
  {
    tag: 'Evening',
    title: 'Evening Runs',
    icon: 'MoonIcon',
    time: '8:30 PM',
    day: 'Select Weekdays',
    location: "McDonald's, Route de Casa",
    description: 'Wind down the day with a social evening run through the streets of Guéliz. Cooler temps, city lights, good company.',
    distance: '4K / 6K',
    color: 'accent',
  },
];

export default function ScheduleSection() {
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
      id="schedule"
      ref={sectionRef}
      className="relative z-10 py-20 md:py-28 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col gap-3 mb-12 md:mb-16 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 w-fit">
            <Icon name="CalendarIcon" size={14} className="text-primary" variant="outline" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">When We Run</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Run Schedule
          </h2>
          <p className="text-white/50 text-base max-w-xl">
            Pick your run. Show up. No sign-up required — just follow us on Instagram for updates.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {runTypes.map((run, i) => (
            <div
              key={i}
              className={`glass-dark rounded-3xl overflow-hidden border border-white/6 hover:border-primary/25 transition-all duration-500 flex flex-col group ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: revealed ? `${i * 120}ms` : '0ms' }}
            >
              {/* Card top accent */}
              <div className={`h-1 w-full ${run.color === 'accent' ? 'bg-accent' : 'bg-primary'}`} />

              <div className="p-6 sm:p-8 flex flex-col gap-5 flex-1">
                {/* Icon + Tag */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${run.color === 'accent' ? 'bg-accent/15' : 'bg-primary/15'}`}>
                    <Icon
                      name={run.icon as Parameters<typeof Icon>[0]['name']}
                      size={22}
                      className={run.color === 'accent' ? 'text-accent' : 'text-primary'}
                      variant="outline"
                    />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${run.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
                    {run.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                  {run.title}
                </h3>

                {/* Details */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5 text-sm text-white/60">
                    <Icon name="ClockIcon" size={14} className="text-white/30" variant="outline" />
                    <span>{run.time} · {run.day}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-white/60">
                    <Icon name="MapPinIcon" size={14} className="text-white/30" variant="outline" />
                    <span>{run.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-white/60">
                    <Icon name="ArrowRightCircleIcon" size={14} className="text-white/30" variant="outline" />
                    <span>{run.distance}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed flex-1">
                  {run.description}
                </p>

                {/* CTA */}
                <a
                  href="https://instagram.com/togetherwerun.kech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all ${run.color === 'accent' ? 'text-accent' : 'text-primary'}`}
                >
                  Join This Run
                  <Icon name="ArrowRightIcon" size={14} variant="outline" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}