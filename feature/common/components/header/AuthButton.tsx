'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemberStore } from '@/feature/member/store/useMemberStore';
import { LogIn } from 'lucide-react';

interface AuthButtonProps {
  isScrolled?: boolean;
}

export default function AuthButton({ isScrolled = false }: AuthButtonProps) {
  const { isLoggedIn, email, nickname, profileImage, logout } = useMemberStore();

  const handleLogout = () => {
    logout();
  };

  if (isLoggedIn && email) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/mypage"
          className={`flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all ${
            isScrolled ? 'pl-1 pr-4 py-1' : 'pl-1.5 pr-5 py-1.5'
          }`}
        >
          <div
            className={`relative rounded-full overflow-hidden border border-white shadow-sm transition-all ${
              isScrolled ? 'w-7 h-7' : 'w-8 h-8'
            }`}
          >
            <Image
              src={profileImage || '/images/default-profile.png'}
              alt="Profile"
              fill
              sizes="32px"
              className="object-cover"
              unoptimized={profileImage?.startsWith('data:')}
            />
          </div>
          <span className="text-[11px] font-bold text-slate-600">{nickname}</span>
        </Link>
        <button
          onClick={handleLogout}
          className="hidden sm:block text-[10px] font-black text-slate-300 hover:text-red-500 transition-colors uppercase tracking-widest"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="flex items-center gap-2 px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-sm"
    >
      <LogIn className="w-3.5 h-3.5" />
      <span className="text-[11px] font-black uppercase tracking-widest">Login</span>
    </Link>
  );
}
