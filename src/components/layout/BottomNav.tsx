import React from "react";

interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

interface BottomNavProps {
  items: NavItem[];
}

export const BottomNav = ({ items }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 w-full bg-background-dark/80 backdrop-blur-xl border-t border-white/10 flex justify-around items-center py-3 pb-8 z-50">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center cursor-pointer transition-colors ${
            item.active ? "text-primary" : "text-white/50 hover:text-white"
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] mt-1 font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
