// src/components/Button/Button.tsx
import React from 'react';

interface ButtonProps {
  variant?: 'dark' | 'light';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'dark',
  href,
  children,
  className = '',
  onClick,
}) => {
  const baseStyles = "inline-flex py-2 px-14 shadow-md font-normal font-afacad uppercase justify-center rounded-full border-2 border-black transition-colors";
  
  const variantStyles = {
    dark: "bg-black-dark text-white hover:bg-white hover:text-black",
    light: "bg-white text-black-dark hover:bg-black hover:text-white"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
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