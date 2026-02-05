import React from "react";

interface TopAppBarProps {
  title: React.ReactNode;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  className?: string;
}

export const TopAppBar = ({
  title,
  leftAction = <span className="material-symbols-outlined">menu</span>,
  rightAction,
  className = "",
}: TopAppBarProps) => {
  return (
    <div className={`flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 ${className}`}>
      <div className="flex size-12 shrink-0 items-center justify-start cursor-pointer">
        {leftAction}
      </div>
      <div className="flex-1 text-center">
        {typeof title === "string" ? (
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            {title}
          </h2>
        ) : (
          title
        )}
      </div>
      <div className="flex w-12 items-center justify-end">
        {rightAction}
      </div>
    </div>
  );
};
