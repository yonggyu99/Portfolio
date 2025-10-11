import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'close' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) => {
  const baseClasses = 'rounded-full transition-all duration-300 font-bold';

  const variantClasses = {
    primary: 'bg-secondary text-primary hover:bg-white',
    secondary:
      'border border-secondary text-secondary hover:bg-secondary hover:text-primary',
    close: 'bg-secondary text-primary hover:bg-white',
    icon: 'text-secondary hover:text-primary hover:bg-secondary',
  };

  const sizeClasses = {
    sm: 'w-6 h-6 md:w-8 md:h-8 text-sm md:text-lg',
    md: 'w-8 h-8 md:w-10 md:h-10 text-base md:text-xl',
    lg: 'px-4 py-2 md:px-6 md:py-3 text-base md:text-lg',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
