'use client';

import Image from 'next/image';
import { CalendlyPopup } from '@/components/CalendlyPopup';
import { Button } from '@/components/ui/Button';
import { CALENDLY_URL } from '@/lib/constants';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-section mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Clear Motion"
              width={280}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </a>

          <CalendlyPopup url={CALENDLY_URL}>
            <Button className="text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3">
              Book a Demo
            </Button>
          </CalendlyPopup>
        </div>
      </div>
    </header>
  );
}
