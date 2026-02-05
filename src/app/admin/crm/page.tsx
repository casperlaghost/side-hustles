import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function CustomerCRM() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden text-white font-display">
      <TopAppBar
        title="Creator CRM"
        leftAction={<span className="material-symbols-outlined">arrow_back</span>}
        rightAction={<span className="material-symbols-outlined">search</span>}
      />

      <main className="pb-24">
        <div className="flex flex-wrap gap-4 p-4">
          {[
            { label: "Avg. LTV", val: "$1,240", change: "+12%" },
            { label: "Retention", val: "78%", change: "+5.2%" },
            { label: "Total Customers", val: "2,450", change: "+8%" },
          ].map((stat, idx) => (
            <div key={idx} className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1c2433] border border-gray-200 dark:border-gray-800 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">{stat.label}</p>
              <p className="text-gray-900 dark:text-white tracking-light text-2xl font-bold leading-tight">{stat.val}</p>
              <p className="text-[#0bda5e] text-sm font-medium leading-normal flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> {stat.change}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Filters</h3>
        <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4">
            <p className="text-white text-sm font-medium leading-normal">All Customers</p>
            <span className="material-symbols-outlined text-white text-[20px]">expand_more</span>
          </button>
          {["High Spenders", "Recent Signups", "VIP"].map((f, idx) => (
            <button key={idx} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-[#282e39] px-4">
              <p className="text-gray-700 dark:text-white text-sm font-medium leading-normal">{f}</p>
              <span className="material-symbols-outlined text-gray-700 dark:text-white text-[20px]">expand_more</span>
            </button>
          ))}
        </div>

        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Active Customers</h3>
        <div className="flex flex-col gap-1 px-4 mb-10">
          <div className="flex flex-col bg-white dark:bg-[#1c2433] rounded-xl overflow-hidden border border-primary/40 shadow-lg mb-2">
            <div className="flex items-center gap-4 p-4">
              <img className="size-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUnPZBXXHX0Kb2w6GG_Fpkf3Rkd-KEotBMFTZwbeQLMkv-PVb-CcvVv3xF6ooVuiI7sWhLSI1GMRGeGvxR0em1JXO5cIe9ZmwM6o5FolRPJeRcDG6qtklKToctZnwMyYsLs566tP2MmgqGsAgJju_HCn49f8vf2Y0oJv8FuiAu1er29sMMaLte6Wcec6JqGF0I4MUYaFWEiNE8Yx9xVKOeRYMXgug0Ih83YRPEgwkRotUhjs13ihEm0KC2N65aif46DkB9nh20xmZp" alt="Sarah" />
              <div className="flex flex-1 flex-col">
                <p className="text-gray-900 dark:text-white font-bold">Sarah Jenkins</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Joined Oct 2023</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-primary font-bold">$4,820</p>
                <span className="inline-flex items-center rounded-full bg-yellow-500/20 px-2 py-0.5 text-[10px] font-medium text-yellow-500">VIP</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">expand_less</span>
            </div>
            <div className="bg-gray-50 dark:bg-[#151c29] p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">Last Purchase</p>
                  <p className="text-sm font-medium dark:text-gray-200">2 days ago</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">Frequency</p>
                  <p className="text-sm font-medium dark:text-gray-200">High (Weekly)</p>
                </div>
              </div>
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Revenue History</p>
              <div className="space-y-2">
                {[
                  { label: "Services", val: "$3,200", icon: "design_services" },
                  { label: "Physical Goods", val: "$1,120", icon: "inventory_2" },
                  { label: "Digital Content", val: "$500", icon: "auto_stories" },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">{row.icon}</span> {row.label}</span>
                    <span className="font-medium">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {[
            { name: "Marcus Chen", last: "Yesterday", val: "$1,250", type: "Service Client", badge: "blue", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXM3cuLc5_YLa0AgvMIp1tctljsY6EoAmjkbLmCA4cBiUTIogdnePz6HdjIY0-4PPmPm2fFxXrYgy0mPyjm1uBezV7vTSko-EQS_xgpuvmHfrrPCvRS8FElRJLUrLTeqe1eQ0CKobbChoWzKuDeJ-N9dIjkWcDEHl_oMOJHbcHjLOna8p3TDtGTAW7gROBdgUMH5zgEqoGYtCvIWXjZtX366ccc52bmkIf2DN04mmrcDPDuqL7_j2dfDonSdYOQaXDb2lm6tfbParC" },
            { name: "Alex Rivera", last: "2 weeks ago", val: "$340", type: "One-time Buyer", badge: "gray", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYhLd8hBIdP0jB-4fDKH3m0gRhK58cUx-4dPbXlxm1EX2GHSQQD1Jm1EQDvHXub7qEiPdCurggVHrfpZ6Jaxwpbg5pbtQEuj_y4eyUlwC-pWlrjvIXEat20BtzmncQrHoMPfRcOhXTgKgwkMJezkwt31va4dLMv7bNdGmpV9KStpQUumlHpMSDoZ59GuA40G2vI0hXefAh-gZiZ54tQVRZc0nRpM_iVaD1gbZsUMRqQIocG5KzYv_epvpbWcvNNlmFqpyMKSuc1LpM" },
            { name: "Elena Gilbert", last: "1 month ago", val: "$2,100", type: "VIP", badge: "yellow", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH1xhzJvvZ6nOtsVJryObWHYPrCC4pycntmTi7fuIVvHKFdi1np2_tcXU2RhVnvsLQQ08toDL3LHXyXyHRmG6kG95YWxaJKulBR5Ldrr1N2NI2IzkXz05yOYMSdlDDx9AKneL17pGOFp2tX1mFzoWgU-rHsVzj8XkP4_65qNHOgpdChizGzhLq1MFi1A14D5vAMv_eRjAhIto0IToRhdzEdCq7cSGYQTCpI-JuXkpnl36q6nRtmKpm5DVn31GWLZNwA-gB68FMQv2V" },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-white dark:bg-[#1c2433] rounded-xl border border-gray-200 dark:border-gray-800 mb-2">
              <img className="size-12 rounded-full object-cover" src={row.img} alt={row.name} />
              <div className="flex flex-1 flex-col">
                <p className="text-gray-900 dark:text-white font-bold">{row.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Last: {row.last}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-900 dark:text-white font-bold">{row.val}</p>
                <span className={`inline-flex items-center rounded-full bg-${row.badge}-500/20 px-2 py-0.5 text-[10px] font-medium text-${row.badge}-500`}>{row.type}</span>
              </div>
              <span className="material-symbols-outlined text-gray-400">expand_more</span>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#101622] border-t border-gray-200 dark:border-gray-800 flex justify-around p-3 z-50">
        {[
          { label: "Overview", icon: "dashboard" },
          { label: "CRM", icon: "group", active: true },
          { label: "Sales", icon: "payments" },
          { label: "Settings", icon: "settings" },
        ].map((item, idx) => (
          <button key={idx} className={`flex flex-col items-center gap-1 ${item.active ? "text-primary" : "text-gray-400"}`}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
