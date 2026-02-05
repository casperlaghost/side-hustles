import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { Button } from "@/components/ui/Button";

export default function SalesAnalytics() {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto overflow-x-hidden border-x border-[#13ec5b]/10 bg-background-light dark:bg-background-dark text-white font-display">
      <TopAppBar
        title="Sales Analytics"
        leftAction={<span className="material-symbols-outlined">arrow_back</span>}
        rightAction={<span className="material-symbols-outlined text-[#13ec5b]">more_vert</span>}
      />

      <div className="px-4 pb-10">
        <div className="flex flex-col gap-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Total Revenue</p>
              <p className="text-white text-2xl font-bold">$12,450</p>
              <div className="flex items-center gap-1 mt-2 text-[#13ec5b]">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span className="text-xs font-bold">+12.5%</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Units Sold</p>
              <p className="text-white text-2xl font-bold">842</p>
              <div className="flex items-center gap-1 mt-2 text-[#13ec5b]">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span className="text-xs font-bold">+5.2%</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Top Selling Product</p>
              <p className="text-white text-lg font-bold">Creator Masterclass</p>
            </div>
            <div className="bg-[#13ec5b]/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-[#13ec5b]">workspace_premium</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold">Revenue Performance</h3>
            <p className="text-white/40 text-xs font-medium">Last 30 Days</p>
          </div>
          <div className="h-40 w-full relative">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
              <path d="M0,80 Q50,75 80,40 T160,50 T240,20 T320,60 T400,30" fill="none" stroke="#13ec5b" strokeLinecap="round" strokeWidth="3"></path>
              <path d="M0,80 Q50,75 80,40 T160,50 T240,20 T320,60 T400,30 L400,100 L0,100 Z" fill="url(#chart-fill)" opacity="0.2"></path>
              <defs>
                <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#13ec5b"></stop>
                  <stop offset="100%" stopColor="#13ec5b" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-[20%] left-[60%] size-2 bg-[#13ec5b] rounded-full ring-4 ring-[#13ec5b]/20"></div>
          </div>
          <div className="flex justify-between mt-4">
            {["1 Oct", "10 Oct", "20 Oct", "30 Oct"].map((date) => (
              <span key={date} className="text-[10px] text-white/40">{date}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-bold">Inventory</h3>
          <div className="flex gap-2">
            <button className="size-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white/60">
              <span className="material-symbols-outlined text-lg">filter_list</span>
            </button>
            <button className="size-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white/60">
              <span className="material-symbols-outlined text-lg">ios_share</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { name: "Limited Edition Cap", cat: "Physical • Apparel", rev: "$1,240", stock: "12 Left", sales: "48", stockColor: "text-orange-500 bg-orange-500/20" },
            { name: "Creator Masterclass", cat: "Digital • Course", rev: "$8,900", stock: "Unlimited", sales: "342", stockColor: "text-[#13ec5b] bg-[#13ec5b]/20" },
            { name: "Presets Bundle", cat: "Digital • Design Assets", rev: "$2,310", stock: "Unlimited", sales: "452", stockColor: "text-[#13ec5b] bg-[#13ec5b]/20" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-white/40 text-xs">{item.cat}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{item.rev}</p>
                  <p className="text-white/40 text-[10px]">REVENUE</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-xs">Stock:</span>
                  <span className={`${item.stockColor} text-[10px] px-2 py-0.5 rounded-full font-bold`}>{item.stock}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-xs">Sales:</span>
                  <span className="text-white text-xs font-bold">{item.sales}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 py-10">
          <Button variant="secondary" className="flex-1 h-14 font-bold text-base flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">download</span>
            Export CSV
          </Button>
          <Button variant="green" className="flex-1 h-14 font-bold text-base flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">add</span>
            Add New
          </Button>
        </div>
      </div>
      <div className="h-8"></div>
    </div>
  );
}
