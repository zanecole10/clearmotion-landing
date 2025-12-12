'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 cursor-pointer';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-transparent text-accent border-2 border-accent hover:bg-accent/5',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
