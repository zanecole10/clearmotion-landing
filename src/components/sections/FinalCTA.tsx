'use client';

import { CalendlyPopup } from '@/components/CalendlyPopup';
import { Button } from '@/components/ui/Button';
import { CALENDLY_URL } from '@/lib/constants';

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-surface-dark text-white">
      <div className="max-w-section mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
          Ready to see what&apos;s sitting unbooked?
        </h2>

        <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10 md:mb-12">
          15 minutes. No pressure. Just a look at what we can recover for your
          shop.
        </p>

        <CalendlyPopup url={CALENDLY_URL}>
          <Button className="bg-white text-primary hover:bg-white/90">
            Book Your Demo
          </Button>
        </CalendlyPopup>
      </div>
    </section>
  );
}
