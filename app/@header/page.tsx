// components/layout/header/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Logo from '@/feature/common/components/header/Logo';
import Navigation from '@/feature/common/components/header/Navigation';
import AuthButton from '@/feature/common/components/header/AuthButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 제어
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      <header
        className={`w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'h-14 shadow-sm' : 'h-20'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-12 h-full">
            <Logo isScrolled={isScrolled} />
            <Navigation />
          </div>
          <AuthButton isScrolled={isScrolled} />
        </div>
      </header>
    </div>
  );
}
