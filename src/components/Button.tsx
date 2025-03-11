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
      className={`w-[170px] h-[50px] bg-button-primary rounded-[50px] border-2 hover:border-secondary px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
