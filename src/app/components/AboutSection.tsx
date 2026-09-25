'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
{ value: 90, suffix: '+', label: 'Community Posts', icon: 'CameraIcon' },
{ value: 5500, suffix: '+', label: 'Instagram Followers', icon: 'UsersIcon' },
{ value: 52, suffix: '', label: 'Weeks Running in 2024', icon: 'CalendarIcon' },
{ value: 100, suffix: '%', label: 'Free to Join', icon: 'HeartIcon' }];


function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, active }: {stat: StatItem;active: boolean;}) {
  const count = useCounter(stat.value, 1600, active);
  const display = count >= 1000 ? (count / 1000).toFixed(1) + 'K' : count.toString();

  return (
    <div className="glass-dark rounded-2xl p-6 flex flex-col gap-3 border border-white/5 hover:border-primary/30 transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
        <Icon name={stat.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-primary" variant="outline" />
      </div>
      <div className="font-display font-extrabold text-3xl text-white leading-none">
        {display}{stat.suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
    </div>);

}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countersActive, setCountersActive] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountersActive(true);
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 py-20 md:py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      
      {/* Decorative orange glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className={`flex flex-col gap-6 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 w-fit">
              <Icon name="HeartIcon" size={14} className="text-primary" variant="solid" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">About Us</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]">
              Run Together.<br />
              <span className="text-gradient-orange">Grow Together.</span>
            </h2>

            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-xl">
              We are a Marrakech-based running community bringing people together through
              weekly runs, good vibes, and an active lifestyle. Whether you are a beginner
              taking your first steps or an experienced runner chasing PRs — you are welcome here.
            </p>

            <div className="flex flex-col gap-4">
              {[
              'No membership fee — just show up',
              'All paces, all backgrounds, all welcome',
              'Weekly runs every Sunday at 7:30 AM'].
              map((item, i) =>
              <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Icon name="CheckIcon" size={12} className="text-primary" variant="outline" />
                  </div>
                  <span className="text-sm md:text-base text-white/75">{item}</span>
                </div>
              )}
            </div>

            <a
              href="https://instagram.com/togetherwerun.kech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest w-fit mt-2">
              
              <Icon name="CameraIcon" size={16} variant="outline" />
              Follow on Instagram
            </a>
          </div>

          {/* Right — Stats + Image */}
          <div className={`flex flex-col gap-6 transition-all duration-700 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Image */}
            <div className="relative w-full h-56 sm:h-72 rounded-3xl overflow-hidden">
              <AppImage
                src="/assets/images/IMG_1536-1777690247342.png"
                alt="Marrakech runners group photo, outdoor morning run, energetic community, dark athletic atmosphere"
                fill
                className="object-cover grayscale-hover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 glass-dark rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Active Community</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) =>
              <StatCard key={i} stat={stat} active={countersActive} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}