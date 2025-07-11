import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  onClick,
  className = ""
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      alert('Redirecionando para a página de compra...');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col overflow-hidden items-stretch text-white uppercase justify-center mt-[21px] px-[70px] py-[22px] rounded-[9px] bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 font-bold text-lg max-md:px-5 ${className}`}
    >
      <div>{children}</div>
    </button>
  );
};
