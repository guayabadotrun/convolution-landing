// src/components/Button/Button.tsx
import React from 'react';
import { LAUNCH_APP_URL, openComingSoon } from '../ComingSoonModal';

interface ButtonProps {
  variant?: 'dark' | 'light';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'dark',
  href,
  children,
  className = '',
  onClick,
  target = '_self',
}) => {
  const baseStyles = "inline-flex py-2 lg:px-14 px-9 shadow-md font-normal font-afacad uppercase justify-center rounded-full border-2 border-black transition-colors";

  const variantStyles = {
    dark: "bg-black-dark text-white hover:bg-white hover:text-black",
    light: "bg-white text-black-dark hover:bg-black hover:text-white"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Intercept the "Launch App" URL and open the Coming Soon modal instead.
  if (href === LAUNCH_APP_URL) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          openComingSoon();
          onClick?.();
        }}
        className={combinedStyles}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};