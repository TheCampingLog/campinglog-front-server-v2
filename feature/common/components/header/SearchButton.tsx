// components/layout/header/SearchButton.tsx
import { Search, X } from 'lucide-react';

interface SearchButtonProps {
  isSearchOpen: boolean;
  onToggle: () => void;
}

export default function SearchButton({ isSearchOpen, onToggle }: SearchButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 transition-colors ${isSearchOpen ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
      aria-label={isSearchOpen ? '검색창 닫기' : '검색창 열기'}
    >
      {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
    </button>
  );
}
