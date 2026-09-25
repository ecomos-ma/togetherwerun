'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

const galleryImages: GalleryImage[] = [
{
  src: "/assets/images/IMG_0632-1777689460657.png",
  alt: 'Together We Run community group photo',
  label: 'Community Vibes'
},
{
  src: "/assets/images/IMG_1532-1777689467062.png",
  alt: 'Together We Run group run session',
  label: 'Sunday Drop'
},
{
  src: "/assets/images/IMG_1536-1777689481850.png",
  alt: 'Together We Run runners on the road',
  label: 'Evening Run'
},
{
  src: "/assets/images/IMG_1551-1777689487794.png",
  alt: 'Together We Run crew in action',
  label: 'Early Miles'
}];


export default function GallerySection() {
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
      id="gallery"
      ref={sectionRef}
      className="relative z-10 py-20 md:py-28 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 w-fit">
              <Icon name="CameraIcon" size={14} className="text-primary" variant="outline" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">The Feed</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              Community Gallery
            </h2>
          </div>
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors uppercase tracking-widest shrink-0">
            
            View All on Instagram
            <Icon name="ArrowRightIcon" size={14} variant="outline" />
          </a>
        </div>

        {/* Gallery Grid — 6 images, 2 cols mobile / 3 cols desktop */}
        {/* BENTO AUDIT:
           Array: [img1, img2, img3, img4, img5, img6] — 6 cards
           Row 1: [col-1: img1] [col-2: img2] [col-3: img3]
           Row 2: [col-1: img4] [col-2: img5] [col-3: img6]
           Placed 6/6 ✓
          */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {galleryImages.map((img, i) =>
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-square group transition-all duration-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }
            style={{ transitionDelay: revealed ? `${i * 80}ms` : '0ms' }}>
            
              {/* Image */}
              <AppImage
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw" />
            

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Orange label */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-primary/90 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {img.label}
                </span>
              </div>

              {/* Instagram icon on hover */}
              <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="w-8 h-8 rounded-full glass-dark flex items-center justify-center">
                  <Icon name="CameraIcon" size={14} className="text-white" variant="outline" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className={`flex justify-center mt-10 transition-all duration-700 delay-500 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://instagram.com/togetherwerun.kech"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest">
            
            <Icon name="CameraIcon" size={16} variant="outline" />
            @togetherwerun.kech on Instagram
          </a>
        </div>
      </div>
    </section>);

}