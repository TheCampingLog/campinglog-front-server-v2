import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="hover:text-slate-900 transition-colors flex items-center gap-1">
      {children}
    </Link>
  );
}
