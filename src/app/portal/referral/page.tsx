import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function ReferralRewards() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden max-w-md mx-auto font-display">
      <TopAppBar
        title="Referral Program"
        leftAction={<span className="material-symbols-outlined">arrow_back_ios</span>}
        rightAction={<span className="material-symbols-outlined">settings</span>}
      />

      <div className="px-4">
        <div
          className="flex min-h-[320px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center"
          style={{ backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.7) 0%, rgba(16, 22, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC72r-LM_oaBDfjYpcwk33GPjzeLbCqH2xh293BUJZ7pGgORYsVZZwRRfQSDmGYk1Yzbexec3ygu2CT1wqjE0_cw-3tYvYgVtXfZJPrwSvMpBE6uuvqZS6EG-xSkM05MXeL_EcJ9kLv0l_hwGrtgeh6WvXtQXPYNKJjZpdlsneTFKRLc7gDoasO_5rRCnqdFfVDESdsgL64GWiaMrFGx4YtHbqA7Va_j39ppkEK_wTzvYGjoUl4zE48kkNYgyuJDrDnNYzp7fLPItXC")' }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Refer & Earn</h1>
            <p className="text-slate-300 text-sm font-normal leading-normal max-w-xs mx-auto">
              Invite friends to join our creator economy and unlock premium presets and service discounts.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 mt-4">
            <div className="flex w-full items-stretch rounded-lg shadow-lg overflow-hidden">
              <input
                className="flex w-full min-w-0 flex-1 resize-none text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-slate-700 bg-slate-800/80 h-14 placeholder:text-slate-500 p-[15px] rounded-r-none border-r-0 text-sm font-medium"
                readOnly
                defaultValue="creator.app/ref/alex_j"
              />
              <div className="text-white flex border border-slate-700 bg-primary items-center justify-center px-4 rounded-r-lg cursor-pointer">
                <span className="material-symbols-outlined">content_copy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="gap-2 px-4 grid grid-cols-4">
          {[
            { label: "Facebook", icon: "share" },
            { label: "Twitter", icon: "chat" },
            { label: "Instagram", icon: "alternate_email" },
            { label: "WhatsApp", icon: "send" },
          ].map((s, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 py-2.5 text-center">
              <div className="rounded-full bg-slate-200 dark:bg-slate-800 p-3 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-[10px] font-medium uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-6">Your Rewards</h2>
      <div className="px-4">
        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest">Next Milestone</p>
              <h3 className="text-slate-900 dark:text-white text-lg font-bold">Free Preset Pack</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">3 / 5 Referrals</p>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: "60%" }}></div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-4">Invite 2 more friends to unlock the Professional Preset Pack (Value $49).</p>
        </div>
      </div>

      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">How it Works</h2>
      <div className="px-4 space-y-4">
        {[
          { step: 1, title: "Share your link", desc: "Copy your unique link and send it to your creator friends." },
          { step: 2, title: "They join the platform", desc: "When they sign up and complete their first service booking." },
          { step: 3, title: "Unlock your rewards", desc: "Earn credits, discounts, and exclusive digital assets for every 5 friends." },
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">{item.step}</div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Referral History</h2>
      <div className="px-4 pb-10">
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3 font-semibold">Friend</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold text-right">Reward</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                { name: "Jordan Smith", status: "Purchased", col: "emerald", reward: "+1 Count" },
                { name: "Casey Rivers", status: "Joined", col: "primary", reward: "Pending" },
                { name: "Riley Veda", status: "Purchased", col: "emerald", reward: "+1 Count" },
              ].map((row, idx) => (
                <tr key={idx} className="bg-transparent">
                  <td className="px-4 py-4 text-slate-900 dark:text-white font-medium">{row.name}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center rounded-full bg-${row.col}-500/10 px-2 py-1 text-xs font-medium text-${row.col}-500`}>{row.status}</span>
                  </td>
                  <td className="px-4 py-4 text-right text-slate-500 dark:text-slate-400">{row.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}
