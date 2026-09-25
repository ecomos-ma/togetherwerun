'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Rule {
  icon: string;
  title: string;
  description: string;
  colSpan?: string;
}

const rules: Rule[] = [
  {
    icon: 'UserGroupIcon',
    title: 'All Levels Welcome',
    description: 'Whether you run a 6-minute mile or a 12-minute mile — you belong here. We run together, not against each other.',
  },
  {
    icon: 'HeartIcon',
    title: 'Respect the Pace',
    description: 'No one gets left behind. Faster runners loop back. We finish as a group, always.',
  },
  {
    icon: 'ArrowPathRoundedSquareIcon',
    title: 'Stay Together',
    description: 'The group stays together on routes. Look out for each other — that\'s what community means.',
  },
  {
    icon: 'BeakerIcon',
    title: 'Bring Water',
    description: 'Marrakech mornings heat up fast. Hydrate before, during, and after every run.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Good Vibes Only',
    description: 'Positive energy, encouragement, and zero judgment. This is a safe space to run, sweat, and grow.',
    colSpan: 'md:col-span-2',
  },
];

export default function CommunityRulesSection() {
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
      id="community"
      ref={sectionRef}
      className="relative z-10 py-20 md:py-28 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col gap-3 mb-12 md:mb-16 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 w-fit">
            <Icon name="ShieldCheckIcon" size={14} className="text-primary" variant="outline" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">The Code</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Community Rules
          </h2>
          <p className="text-white/50 text-base max-w-xl">
            Simple principles that keep our community strong, safe, and fun for everyone.
          </p>
        </div>

        {/* Rules Bento Grid
          AUDIT:
          Array: [AllLevels, RespectPace, StayTogether, BringWater, GoodVibes] — 5 cards
          Row 1 (md:grid-cols-3): [col-1: AllLevels] [col-2: RespectPace] [col-3: StayTogether]
          Row 2 (md:grid-cols-3): [col-1: BringWater] [col-2+3: GoodVibes cs-2]
          Placed 5/5 ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {rules.map((rule, i) => (
            <div
              key={i}
              className={`glass-dark rounded-3xl p-6 sm:p-8 border border-white/6 hover:border-primary/25 transition-all duration-500 flex flex-col gap-5 group ${rule.colSpan ?? ''} ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: revealed ? `${i * 100}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <Icon
                  name={rule.icon as Parameters<typeof Icon>[0]['name']}
                  size={22}
                  className="text-primary"
                  variant="outline"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                  {rule.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {rule.description}
                </p>
              </div>

              {/* Accent line on hover */}
              <div className="h-0.5 w-0 bg-primary group-hover:w-12 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}