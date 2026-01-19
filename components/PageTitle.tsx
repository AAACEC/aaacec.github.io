'use client';

import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTitleProps {
  title: string;
  subtitle?: ReactNode | null;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`h-screen bg-red-700 flex flex-col justify-center`}>
      <h1 className={`font-black text-7xl sm:text-9xl md:text-[200px] text-white text-center italic transition-[opacity,translate] duration-1500 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-15'}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`text-xl sm:text-2xl md:text-3xl text-white text-center transition-[opacity,translate] duration-1500 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-15'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
