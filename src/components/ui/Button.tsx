import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "green" | "blue-hustle";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all active:scale-[0.98] cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/20",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    outline: "border border-white/10 text-white hover:bg-white/5",
    ghost: "bg-transparent text-white hover:bg-white/5",
    green: "bg-primary-green text-[#102216] hover:brightness-110 shadow-lg shadow-primary-green/20",
    "blue-hustle": "bg-primary-blue text-white hover:brightness-110 shadow-lg shadow-primary-blue/20",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "size-10 rounded-full",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
