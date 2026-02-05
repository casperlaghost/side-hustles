import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  multiline?: boolean;
}

export const Input = ({
  label,
  multiline = false,
  className = "",
  ...props
}: InputProps) => {
  const baseStyles = "w-full rounded-lg bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-white/40";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-white/80 text-sm font-medium">
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          className={`${baseStyles} min-h-32 resize-none ${className}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={`${baseStyles} h-14 ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};
