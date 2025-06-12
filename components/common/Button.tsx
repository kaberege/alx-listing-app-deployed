import React from 'react';
import Image from 'next/image';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ styles, icon, alt, label, onClick, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center gap-1 text-xs cursor-pointer ${styles}`}>
      {icon && alt && <Image src={icon} width={15} height={15} alt={alt} />}
      {
        label && <span>{label}</span>
      }
    </button>
  );
};

export default Button;
