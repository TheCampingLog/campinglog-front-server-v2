'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  href: string;
  children: React.ReactNode;
}

interface NavDropdownProps {
  href: string;
  items: DropdownItem[];
  children: React.ReactNode;
}

export default function NavDropdown({ href, items, children }: NavDropdownProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href} className="flex items-center gap-1 hover:text-slate-900 transition-colors py-2">
        {children}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
      </Link>

      {/* 드롭다운 메뉴 */}
      <div
        className={`absolute top-full left-0 w-40 bg-white border border-slate-100 shadow-xl rounded-sm py-2 transition-all duration-300 z-50 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-5 py-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all font-medium text-[12px]"
          >
            {item.children}
          </Link>
        ))}
      </div>
    </div>
  );
}
