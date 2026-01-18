import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  isScrolled: boolean;
}

export default function Logo({ isScrolled }: LogoProps) {
  return (
    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
      <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
        <Image
          src="/images/camping-log-logo.png"
          alt="Camping Log"
          width={isScrolled ? 110 : 130}
          height={40}
          priority
          className="object-contain w-auto h-auto"
        />
      </div>
    </Link>
  );
}
