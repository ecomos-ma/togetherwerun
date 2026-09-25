import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Together We Run Kech — Marrakech Running Community',
  description: 'Join Together We Run Kech, Marrakech\'s most active running community. Weekly group runs every Sunday at 7:30 AM. All levels welcome.',
  icons: {
    icon: [{ url: '/assets/images/WhatsApp_Image_2026-09-11_at_00.15.54-1789093661735.jpeg', type: 'image/jpeg' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className={dmSans.className} suppressHydrationWarning>
        {children}
</body>
    </html>
  );
}