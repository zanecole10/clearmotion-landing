'use client';

import { CalendlyPopup } from '@/components/CalendlyPopup';
import { Button } from '@/components/ui/Button';
import { CALENDLY_URL } from '@/lib/constants';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-36">
      <div className="max-w-section mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.05] max-w-4xl mx-auto mb-6 md:mb-8">
          More booked jobs.
          <br />
          Recovered revenue.
          <br />
          Zero extra work.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12">
          We follow up on every declined and deferred service so your bays stay
          full and your advisors stay focused.
        </p>

        <CalendlyPopup url={CALENDLY_URL}>
          <Button className="mb-4">Book a Demo</Button>
        </CalendlyPopup>

        <p className="text-sm md:text-base text-secondary/80">
          15 minutes. We&apos;ll show you what&apos;s sitting unbooked in your shop.
        </p>
      </div>
    </section>
  );
}
