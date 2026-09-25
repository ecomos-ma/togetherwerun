import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import NextRunSection from '@/app/components/NextRunSection';
import ScheduleSection from '@/app/components/ScheduleSection';
import GallerySection from '@/app/components/GallerySection';
import FoundersSection from '@/app/components/FoundersSection';
import CommunityRulesSection from '@/app/components/CommunityRulesSection';
import JoinCTASection from '@/app/components/JoinCTASection';
import PartnersSection from '@/app/components/PartnersSection';

export default function HomePage() {
  return (
    <main className="relative bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      {/* Decorative vertical grid lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 sm:px-6 max-w-7xl mx-auto left-0 right-0">
        <div className="w-px h-full bg-white/[0.025]" />
        <div className="w-px h-full bg-white/[0.025] hidden md:block" />
        <div className="w-px h-full bg-white/[0.025] hidden lg:block" />
        <div className="w-px h-full bg-white/[0.025]" />
      </div>

      <Header />
      <HeroSection />
      <AboutSection />
      <NextRunSection />
      <ScheduleSection />
      <FoundersSection />
      <GallerySection />
      <CommunityRulesSection />
      <JoinCTASection />
      <PartnersSection />
      <Footer />
    </main>
  );
}