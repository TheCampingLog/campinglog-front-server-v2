// components/layout/header/Navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isCommunityHovered, setIsCommunityHovered] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-slate-500 tracking-tight h-full">
      {/* 캠핑장 메뉴 */}
      <Link href="/camping" className="hover:text-slate-900 transition-colors flex items-center gap-1">
        캠핑장
      </Link>

      {/* 커뮤니티 드롭다운 */}
      <div
        className="relative h-full flex items-center"
        onMouseEnter={() => setIsCommunityHovered(true)}
        onMouseLeave={() => setIsCommunityHovered(false)}
      >
        <Link href="/community" className="flex items-center gap-1 hover:text-slate-900 transition-colors py-2">
          커뮤니티
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isCommunityHovered ? 'rotate-180' : ''}`}
          />
        </Link>

        {/* 드롭다운 메뉴 */}
        <div
          className={`absolute top-full left-0 w-40 bg-white border border-slate-100 shadow-xl rounded-sm py-2 transition-all duration-300 z-50 ${
            isCommunityHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <Link
            href="/community?tab=캠핑장 정보"
            className="block px-5 py-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all font-medium text-[12px]"
          >
            캠핑장 정보
          </Link>
          <Link
            href="/community?tab=캠핑장비 리뷰"
            className="block px-5 py-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all font-medium text-[12px]"
          >
            캠핑장비 리뷰
          </Link>
        </div>
      </div>

      {/* 지역축제 */}
      <Link href="/localevents" className="hover:text-slate-900 transition-colors">
        지역축제
      </Link>

      {/* 초보꿀팁 */}
      <Link href="/tips" className="hover:text-slate-900 transition-colors">
        초보꿀팁
      </Link>
    </nav>
  );
}
