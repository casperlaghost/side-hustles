import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function SystemLogs() {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-hidden shadow-2xl bg-background-light dark:bg-background-dark text-white font-display">
      <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <TopAppBar
          title="System Logs"
          leftAction={<span className="material-symbols-outlined">arrow_back_ios</span>}
          rightAction={<span className="material-symbols-outlined">more_vert</span>}
        />
      </header>

      <div className="px-4 py-2 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9da6b9]">Live Monitoring</span>
          </div>
          <div className="flex items-center">
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary cursor-pointer">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
            </div>
          </div>
        </div>

        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden">
            <div className="text-[#9da6b9] flex border-none bg-[#1c2433] items-center justify-center pl-4">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="flex w-full min-w-0 flex-1 bg-[#1c2433] text-white focus:outline-0 border-none placeholder:text-[#9da6b9] px-4 pl-2 text-base font-normal leading-normal" placeholder="Search IDs, events, or users" />
          </div>
        </label>
      </div>

      <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4">
          <p className="text-white text-sm font-medium leading-normal">All Modules</p>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
        {[
          { label: "Payments", icon: "payments" },
          { label: "Automation", icon: "bolt" },
          { label: "Auth", icon: "lock" },
        ].map((mod, idx) => (
          <button key={idx} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#1c2433] px-4 border border-[#282e39]">
            <p className="text-white text-sm font-medium leading-normal">{mod.label}</p>
            <span className="material-symbols-outlined text-sm">{mod.icon}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24 space-y-2 no-scrollbar">
        {[
          { title: "Stripe Webhook Received", sub: "Payment intent for $49.00 succeeded (ID: pi_3O...)", time: "2m ago", icon: "check_circle", col: "green", tags: ["Payments", "ID: 9821"] },
          { title: "Automation Triggered", sub: "Welcome drip sequence started for user @creator123", time: "5m ago", icon: "bolt", col: "primary", tags: ["Automation"] },
          { title: "Email Sent", sub: "Newsletter 'Weekly Recap' dispatched to 4,203 recipients (3 bounces)", time: "12m ago", icon: "mail", col: "amber", tags: ["CRM"] },
          { title: "Auth Failure", sub: "Multiple failed login attempts from IP 192.168.1.45", time: "18m ago", icon: "error", col: "red", tags: ["Auth", "High Risk"] },
          { title: "Database Backup", sub: "Daily snapshot completed successfully. 1.2GB compressed.", time: "45m ago", icon: "database", col: "green", tags: ["System"] },
          { title: "Product Updated", sub: "'Masterclass 2024' price updated by admin.", time: "1h ago", icon: "shopping_cart", col: "primary", tags: ["Store"], opacity: true },
        ].map((log, idx) => (
          <div key={idx} className={`flex items-start gap-4 bg-[#1c2433]/40 rounded-xl p-3 border-l-4 border-${log.col === 'primary' ? 'primary' : log.col === 'green' ? 'green-500' : log.col === 'amber' ? 'amber-500' : 'red-500'} ${log.opacity ? 'opacity-80' : ''}`}>
            <div className={`text-${log.col === 'primary' ? 'primary' : log.col === 'green' ? 'green-500' : log.col === 'amber' ? 'amber-500' : 'red-500'} flex items-center justify-center rounded-lg bg-current opacity-20 shrink-0 size-11 relative`}>
              <span className="material-symbols-outlined absolute opacity-100">{log.icon}</span>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start">
                <p className="text-white text-sm font-bold">{log.title}</p>
                <p className="text-[#9da6b9] text-[10px] font-medium uppercase">{log.time}</p>
              </div>
              <p className="text-[#9da6b9] text-xs font-normal leading-relaxed mt-1">{log.sub}</p>
              <div className="flex mt-2 gap-2">
                {log.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={`text-[10px] ${log.col === 'red' ? 'bg-red-500/20 text-red-300' : 'bg-[#282e39] text-[#9da6b9]'} px-2 py-0.5 rounded`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[400px] px-4">
        <button className="w-full h-14 bg-primary text-white font-bold rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined">download</span>
          <span>Export Log History</span>
        </button>
      </div>
    </div>
  );
}
