'use client';

import { PopupModal } from 'react-calendly';
import { useState, ReactNode } from 'react';

interface CalendlyPopupProps {
  url: string;
  children: ReactNode;
}

export function CalendlyPopup({ url, children }: CalendlyPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      {typeof window !== 'undefined' && (
        <PopupModal
          url={url}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.body}
        />
      )}
    </>
  );
}
