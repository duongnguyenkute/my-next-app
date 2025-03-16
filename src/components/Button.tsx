import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // ✅ Không bắt buộc
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick} 
      className={`w-[170px] h-[50px] font-['Yellix-SemiBold']  bg-button-primary rounded-[50px] px-4 py-2 border-transparent hover:border-2 hover:border-secondary transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
