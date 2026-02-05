import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { BottomNav } from "@/components/layout/BottomNav";

export default function EmailAnalytics() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
      <TopAppBar
        title={
          <div className="flex flex-col items-center">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Email Analytics</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Summer Launch Campaign</p>
          </div>
        }
        leftAction={<span className="material-symbols-outlined">arrow_back_ios</span>}
        rightAction={<span className="material-symbols-outlined">calendar_today</span>}
      />

      <main className="pb-24">
        <div className="pb-3 mt-2">
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 gap-8">
            {[
              { label: "Overview", active: true },
              { label: "Click Map", active: false },
              { label: "Audience", active: false },
            ].map((tab, idx) => (
              <a key={idx} className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${tab.active ? 'border-primary text-primary' : 'border-transparent text-slate-500 dark:text-slate-400'}`} href="#">
                <p className="text-sm font-bold leading-normal">{tab.label}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 p-4">
          {[
            { label: "Open Rate", val: "42.5%", change: "+2.1%", up: true },
            { label: "CTR", val: "8.2%", change: "+0.5%", up: true },
            { label: "Unsubscribes", val: "0.4%", change: "-0.1%", up: false },
            { label: "Revenue", val: "$1,240", change: "+12%", up: true },
          ].map((kpi, idx) => (
            <div key={idx} className="flex min-w-[160px] flex-1 flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#1c2433] shadow-sm border border-slate-100 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">{kpi.label}</p>
              <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold">{kpi.val}</p>
              <div className="flex items-center gap-1">
                <span className={`material-symbols-outlined ${kpi.up ? 'text-[#0bda5e]' : 'text-[#fa6238]'} text-sm`}>{kpi.up ? 'trending_up' : 'trending_down'}</span>
                <p className={`${kpi.up ? 'text-[#0bda5e]' : 'text-[#fa6238]'} text-xs font-bold leading-normal`}>{kpi.change}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-2 pt-6">Engagement Trends</h3>
        <div className="flex flex-wrap gap-4 px-4 py-4">
          <div className="flex min-w-full flex-1 flex-col gap-2 bg-white dark:bg-[#1c2433] p-5 rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Hourly Performance</p>
                <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold truncate">4,200 Total Clicks</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[#0bda5e] text-sm font-bold">+5.4%</span>
                <p className="text-slate-400 text-[10px] font-medium uppercase">vs average</p>
              </div>
            </div>
            <div className="flex min-h-[200px] flex-1 flex-col gap-4 py-4">
              <svg fill="none" height="150" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#paint0_linear_1)"></path>
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#135bec" strokeLinecap="round" strokeWidth="3"></path>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1" x1="236" x2="236" y1="1" y2="150">
                    <stop stopColor="#135bec" stopOpacity="0.3"></stop>
                    <stop offset="1" stopColor="#135bec" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-around">
                {["00:00", "06:00", "12:00", "18:00", "24:00"].map((t, idx) => (
                  <p key={idx} className="text-slate-400 text-[10px] font-bold leading-normal uppercase">{t}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mt-2">
          <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <span className="material-symbols-outlined text-white">compare_arrows</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Benchmarking</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Comparing to Q1 average</p>
              </div>
            </div>
            <div className="bg-primary px-3 py-1.5 rounded-full">
              <p className="text-xs font-bold text-white uppercase tracking-tighter">Above Avg</p>
            </div>
          </div>
        </div>

        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-2 pt-8">Link Performance</h3>
        <div className="px-4">
          <div className="overflow-hidden bg-white dark:bg-[#1c2433] rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { title: "Referral Program Sign-up", path: "/share-the-love-2024", clicks: "1,842", w: "85%" },
                { title: "New Product: Content Mastery", path: "/shop/course-01", clicks: "954", w: "45%" },
                { title: "Exclusive Webinar Link", path: "/live/access-secure", clicks: "612", w: "30%" },
                { title: "Follow on Instagram", path: "/social/insta", clicks: "420", w: "20%" },
              ].map((row, idx) => (
                <div key={idx} className="flex items-center justify-between p-4">
                  <div className="flex flex-col gap-1 max-w-[60%]">
                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{row.title}</p>
                    <p className="text-xs text-slate-400 font-medium truncate italic">{row.path}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{row.clicks} clicks</p>
                    <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: row.w }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex justify-center">
              <button className="text-primary text-sm font-bold">View Detailed Click Map</button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav
        items={[
          { label: "Home", icon: "home" },
          { label: "Campaigns", icon: "analytics", active: true },
          { label: "Leads", icon: "group" },
          { label: "Settings", icon: "settings" },
        ]}
      />
    </div>
  );
}
