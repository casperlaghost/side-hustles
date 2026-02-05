import React from "react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}: SearchBarProps) => {
  return (
    <label className={`flex flex-col min-w-40 h-12 w-full ${className}`}>
      <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden">
        <div className="text-[#a19db9] flex border-none bg-white/5 items-center justify-center pl-4">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input
          className="flex w-full min-w-0 flex-1 bg-white/5 text-white focus:outline-0 border-none placeholder:text-[#a19db9] px-4 pl-2 text-base font-normal leading-normal"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </label>
  );
};
