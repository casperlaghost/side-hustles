import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function AdminDashboard() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-[430px] mx-auto border-x border-white/5 text-white">
      <TopAppBar
        title="Mission Control"
        leftAction={
          <div className="bg-primary/20 flex items-center justify-center rounded-full size-10 border border-primary/30">
            <span className="material-symbols-outlined text-primary text-xl">hub</span>
          </div>
        }
        rightAction={
          <button className="flex items-center justify-center rounded-full size-10 bg-zinc-200/50 dark:bg-white/5 text-zinc-900 dark:text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        }
      />

      <main className="pb-24">
        {/* SectionHeader: Performance */}
        <div className="px-4 pt-6">
          <h3 className="text-zinc-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Today&apos;s Performance</h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">Updated 2 mins ago</p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap gap-3 p-4">
          <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-4 bg-zinc-100 dark:bg-[#1e1a33] border border-zinc-200 dark:border-white/5">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium uppercase tracking-wider">Revenue</p>
            <p className="text-zinc-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">$1,240.50</p>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[#0bda6c] text-sm">trending_up</span>
              <p className="text-[#0bda6c] text-sm font-bold">+15%</p>
            </div>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-4 bg-zinc-100 dark:bg-[#1e1a33] border border-zinc-200 dark:border-white/5">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium uppercase tracking-wider">Orders</p>
            <p className="text-zinc-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">12</p>
            <div className="flex items-center gap-1 text-zinc-400">
              <span className="material-symbols-outlined text-sm">remove</span>
              <p className="text-sm font-medium">Stable</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-xl p-4 bg-zinc-100 dark:bg-[#1e1a33] border border-zinc-200 dark:border-white/5 mt-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium uppercase tracking-wider">Active Projects</p>
                <p className="text-zinc-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">8</p>
              </div>
              <div className="flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[#fa6938] text-sm">trending_down</span>
                <p className="text-[#fa6938] text-sm font-bold">-2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* SectionHeader: Revenue Streams */}
        <div className="px-4 pt-4">
          <h3 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Revenue Streams</h3>
        </div>

        {/* Charts Section */}
        <div className="px-4 py-4">
          <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 dark:border-[#3f3b54] p-5 bg-white dark:bg-transparent">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Combined Weekly Gross</p>
                <p className="text-zinc-900 dark:text-white tracking-tight text-[32px] font-extrabold leading-tight">$8,420</p>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">7D VIEW</span>
            </div>
            <div className="grid min-h-[160px] grid-flow-col gap-4 grid-rows-[1fr_auto] items-end justify-items-center mt-6">
              {[
                { h: "80%", label: "Svc", opacity: "opacity-80" },
                { h: "45%", label: "Dig", opacity: "opacity-60" },
                { h: "30%", label: "Phy", opacity: "opacity-40" },
                { h: "60%", label: "Aff", opacity: "opacity-20" },
              ].map((bar, idx) => (
                <div key={idx} className="flex flex-col w-full h-full items-center justify-end">
                  <div className={`bg-primary rounded-t-sm w-full ${bar.opacity}`} style={{ height: bar.h }}></div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase mt-2">{bar.label}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-zinc-100 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary/80"></div>
                <span className="text-zinc-500 dark:text-zinc-400 text-xs">Services leads growth</span>
              </div>
              <span className="material-symbols-outlined text-zinc-400 text-sm">info</span>
            </div>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="px-4 pt-4 pb-2">
          <h3 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Recent Activity</h3>
        </div>
        <div className="flex flex-col gap-px bg-zinc-200 dark:bg-white/5 mx-4 rounded-xl overflow-hidden mb-8 border border-zinc-200 dark:border-white/5">
          {[
            { title: "New Sale: Digital Guide", sub: "Customer: Alex Rivera", val: "+$49.00", time: "Just now", icon: "shopping_cart", colorClass: "bg-emerald-500/10 text-emerald-500" },
            { title: "Consultation Booked", sub: "1:1 Strategy Session", val: "+$250.00", time: "14m ago", icon: "event_available", colorClass: "bg-blue-500/10 text-blue-500" },
            { title: "Physical Order #4209", sub: "Merch Bundle x 2", val: "+$112.40", time: "1h ago", icon: "inventory_2", colorClass: "bg-purple-500/10 text-purple-500" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white dark:bg-[#1e1a33] p-4">
              <div className={`size-10 flex items-center justify-center rounded-lg ${item.colorClass}`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-zinc-900 dark:text-white text-sm font-bold">{item.title}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs">{item.sub}</p>
              </div>
              <div className="text-right">
                <p className="text-zinc-900 dark:text-white text-sm font-bold">{item.val}</p>
                <p className="text-zinc-400 text-[10px]">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/80 dark:bg-[#131022]/80 backdrop-blur-xl border-t border-zinc-200 dark:border-white/5 px-6 py-3 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white">
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-[10px] font-bold uppercase">Insights</span>
        </button>
        <div className="relative -top-6">
          <button className="size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
        <button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[10px] font-bold uppercase">Orders</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold uppercase">Setup</span>
        </button>
      </div>
    </div>
  );
}
