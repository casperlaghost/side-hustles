import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  className?: string;
}

export const Badge = ({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) => {
  const baseStyles = "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit";

  const variants = {
    primary: "bg-primary/20 text-primary",
    secondary: "bg-white/10 text-white/70",
    success: "bg-primary-green/20 text-primary-green",
    warning: "bg-orange-500/20 text-orange-500",
    error: "bg-red-500/20 text-red-500",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
