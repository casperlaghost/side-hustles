import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function MaintenanceSettings() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white min-h-screen">
      <TopAppBar
        title="Maintenance Settings"
        leftAction={<span className="material-symbols-outlined">arrow_back_ios</span>}
        rightAction={<div className="w-12"></div>}
      />

      <div className="flex flex-col gap-2 max-w-md mx-auto pb-20">
        <div className="p-4 sm:container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#3b4354] bg-[#1c1f27] p-5 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Maintenance Mode</p>
              <p className="text-[#9da6b9] text-sm font-normal leading-normal">Activating this will take your storefront offline for all visitors instantly.</p>
            </div>
            <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#282e39] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
              <div className="h-full w-[27px] rounded-full bg-white shadow-md"></div>
              <input className="invisible absolute" type="checkbox" />
            </label>
          </div>
        </div>

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Public Page Customization</h3>

        <div className="flex flex-wrap items-end gap-4 px-4 py-2">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#9da6b9] text-sm font-medium leading-normal pb-2">Heading</p>
            <input className="flex w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#3b4354] bg-[#1c1f27] focus:border-primary h-14 placeholder:text-[#9da6b9] p-[15px] text-base font-normal leading-normal" defaultValue="System Update in Progress" />
          </label>
        </div>

        <div className="flex flex-wrap items-end gap-4 px-4 py-2">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#9da6b9] text-sm font-medium leading-normal pb-2">Sub-heading</p>
            <textarea className="flex w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#3b4354] bg-[#1c1f27] focus:border-primary h-24 placeholder:text-[#9da6b9] p-[15px] text-base font-normal leading-normal resize-none" defaultValue="Our team is currently performing scheduled maintenance to improve your experience. We expect to be back online shortly."></textarea>
          </label>
        </div>

        <div className="px-4 py-2 sm:container">
          <div className="flex flex-1 flex-row items-center justify-between gap-4 rounded-lg border border-[#3b4354] bg-[#1c1f27]/50 p-4">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-medium leading-tight">Show Newsletter Signup</p>
              <p className="text-[#9da6b9] text-xs font-normal leading-normal">Allow users to subscribe for updates.</p>
            </div>
            <label className="relative flex h-[24px] w-[44px] cursor-pointer items-center rounded-full border-none bg-[#282e39] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
              <div className="h-full w-[20px] rounded-full bg-white shadow-sm"></div>
              <input defaultChecked className="invisible absolute" type="checkbox" />
            </label>
          </div>
        </div>

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Scheduled Maintenance</h3>
        <div className="px-4 flex flex-col gap-3">
          <div className="flex flex-col gap-3 rounded-xl border border-[#3b4354] bg-[#1c1f27] p-4">
            <div className="flex items-center gap-3 pb-2 border-b border-[#3b4354]/50">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              <span className="text-white font-medium">Automatic Scheduling</span>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-2">
              <div className="flex flex-col gap-1.5">
                <span className="text-[#9da6b9] text-xs font-medium uppercase tracking-wider">Start Time</span>
                <div className="flex items-center justify-between bg-[#111318] p-3 rounded-lg border border-[#3b4354]">
                  <span className="text-white">Oct 24, 2023 - 02:00 AM</span>
                  <span className="material-symbols-outlined text-[#9da6b9] text-sm cursor-pointer">edit</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[#9da6b9] text-xs font-medium uppercase tracking-wider">End Time</span>
                <div className="flex items-center justify-between bg-[#111318] p-3 rounded-lg border border-[#3b4354]">
                  <span className="text-white">Oct 24, 2023 - 04:30 AM</span>
                  <span className="material-symbols-outlined text-[#9da6b9] text-sm cursor-pointer">edit</span>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <input className="rounded border-[#3b4354] bg-[#111318] text-primary focus:ring-primary" id="auto-enable" type="checkbox" />
              <label className="text-sm text-[#9da6b9]" htmlFor="auto-enable">Repeat weekly on Tuesdays</label>
            </div>
          </div>
        </div>

        <div className="px-4 pt-8">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
            Save Changes
          </button>
          <p className="text-center text-[#9da6b9] text-xs mt-4">Last saved: 12 minutes ago</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#1c1f27] border-t border-[#3b4354] px-6 py-3 flex justify-between items-center z-50 pb-8">
        {[
          { label: "Home", icon: "dashboard", active: false },
          { label: "Store", icon: "storefront", active: false },
          { label: "Settings", icon: "settings", active: true },
          { label: "Stats", icon: "analytics", active: false },
        ].map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center gap-1 ${item.active ? "text-primary" : "opacity-50"}`}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[10px]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
