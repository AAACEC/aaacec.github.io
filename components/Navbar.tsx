'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: 'https://cheers.com.br/aaacec', label: 'LOJA' },
  // { href: '/plusplus', label: 'AAACEC++' },
  // { href: '/alumni', label: 'ALUMNI' },
  { href: '/100nossao', label: '100NOSSÃO' },
  { href: '/sobre', label: 'SOBRE' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const is100Nossao = pathname === '/100nossao';

  return (
    <nav className={`${is100Nossao ? 'bg-black' : 'bg-red-700'} text-white font-bold text-xl`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">

          <Link href="/">
            <Image
              src="/aaacec.svg"
              alt="Logo da AAACEC"
              width={60}
              height={60}
              className="h-20 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="group relative inline-block">
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex justify-center items-center focus:outline-none text-white"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col justify-between w-6 h-5">
                <span
                  className={`h-0.5 w-full bg-current rounded transition-all duration-300 ease-in-out 
        ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                />

                <span
                  className={`h-0.5 w-full bg-current rounded transition-all duration-300 ease-in-out 
        ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                />

                <span
                  className={`h-0.5 w-full bg-current rounded transition-all duration-300 ease-in-out 
        ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${is100Nossao ? 'bg-black' : 'bg-red-700'} grid transition-[opacity, grid] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative inline-block">
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-[width] duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
