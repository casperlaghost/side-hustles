import React from "react";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export const ProgressBar = ({ progress, className = "" }: ProgressBarProps) => {
  return (
    <div className={`rounded-full bg-white/10 h-2 overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full bg-primary transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
