import React from "react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({}: SidebarProps) => {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-background-dark border-r border-white/5 h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-white text-xl font-bold">Multi-Hustle</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {/* Add nav items here */}
        <div className="flex items-center gap-3 p-3 text-primary bg-primary/10 rounded-xl cursor-pointer">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-bold">Dashboard</span>
        </div>
        <div className="flex items-center gap-3 p-3 text-white/50 hover:text-white hover:bg-white/5 rounded-xl cursor-pointer">
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-bold">Shop</span>
        </div>
      </nav>
    </aside>
  );
};
