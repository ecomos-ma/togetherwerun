import React from 'react';

import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src="/assets/images/WhatsApp_Image_2026-09-11_at_00.15.54-removebg-preview-1789094600479.png"
            alt="Together We Run Kech Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Links row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/50">
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Icon name="CameraIcon" size={14} variant="outline" />
            @togetherwerun.kech
          </a>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-white/50">
            <Icon name="MapPinIcon" size={14} variant="outline" />
            Marrakech, Morocco
          </span>
          <span className="text-white/20">·</span>
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Privacy
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Terms
          </a>
        </div>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/channel/AbadKNTveOzmRtoh/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass-orange px-6 py-3 rounded-full text-sm font-bold text-primary hover:bg-primary/20 transition-all"
        >
          <Icon name="ChatBubbleLeftRightIcon" size={16} variant="outline" />
          DM us to join
        </a>

        <p className="text-xs text-white/25 font-mono tracking-widest uppercase">
          © 2026 Together We Run Kech — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}