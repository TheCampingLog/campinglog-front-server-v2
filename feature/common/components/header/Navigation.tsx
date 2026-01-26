'use client';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';

export default function Navigation() {
  const communityDropdownItems = [
    { href: '/boards/캠핑장정보', children: '캠핑장 정보' },
    { href: '/boards/캠팡장비리뷰', children: '캠핑장비 리뷰' },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-slate-500 tracking-tight h-full">
      <NavLink href="/camps/list">캠핑장</NavLink>

      <NavDropdown href="/boards" items={communityDropdownItems}>
        커뮤니티
      </NavDropdown>

      <NavLink href="/boards/지역축제">지역축제</NavLink>

      <NavLink href="/boards/초보꿀팁">초보꿀팁</NavLink>
    </nav>
  );
}
