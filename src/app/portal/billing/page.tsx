import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function Billing() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden max-w-[430px] mx-auto shadow-2xl font-display">
      <TopAppBar
        title="Billing & Subscriptions"
        leftAction={<span className="material-symbols-outlined">arrow_back_ios</span>}
        rightAction={<div className="w-12"></div>}
      />

      <main className="flex flex-col gap-2 pb-10">
        <div className="px-4 pt-6">
          <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Active Subscriptions</h2>
        </div>

        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-[#1c1f27] p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">Monthly Asset Pack</p>
                <p className="text-gray-500 dark:text-[#9da6b9] text-sm font-normal leading-normal">Renews on Oct 12, 2023</p>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-gray-100 dark:bg-[#282e39] text-gray-900 dark:text-white text-sm font-medium leading-normal w-fit">
                <span className="truncate">Manage</span>
              </button>
            </div>
            <div
              className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmUYqPCf6laXuLbZytyBanGMh-wce02MTaKKNzalJIND-0c52MNeIe-dJs2PLX6w7f1c1NMJx0gID6VKJQGpvlo5GFkcfgDsLlhhtDx78rKCHi14qScEKxRiFziOtTrLcyqUJBdJcclo87_E100u1kPx4QlGYB5IBcipeAttSYIJGdSluiZn8Gzhugs7EW8ULr5qLG3IC-kA6xmgd4oXnrVNG4jR3nv-4jDo15GRVpyGmy236h1t5ygWLt_Ef20am6zqlHhqlX8H5V")' }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 pt-4">
          <h2 className="text-gray-900 dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em]">Payment Methods</h2>
          <button className="text-primary text-sm font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add</span> Add New
          </button>
        </div>

        <div className="mt-2 divide-y divide-gray-100 dark:divide-gray-800">
          {[
            { label: "VISA", last4: "•••• 4242", exp: "Expires 12/25", color: "bg-blue-600" },
            { label: "MC", last4: "•••• 8831", exp: "Expires 08/26", color: "bg-orange-500" },
          ].map((card, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white dark:bg-background-dark px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div className={`${card.color} rounded-md flex items-center justify-center h-8 w-12 shrink-0 text-white font-bold italic text-xs`}>{card.label}</div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-900 dark:text-white text-base font-medium leading-normal line-clamp-1">{card.last4}</p>
                  <p className="text-gray-500 dark:text-[#9da6b9] text-sm font-normal leading-normal line-clamp-2">{card.exp}</p>
                </div>
              </div>
              <div className="shrink-0 text-gray-400 dark:text-white">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pt-8">
          <h2 className="text-gray-900 dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em] mb-4">Invoice History</h2>
          <div className="flex flex-col gap-3">
            {[
              { val: "$49.00", status: "Paid", col: "green", info: "Sept 12, 2023 • Subscription" },
              { val: "$120.00", status: "Pending", col: "yellow", info: "Sept 05, 2023 • Custom Design Service" },
              { val: "$15.00", status: "Overdue", col: "red", info: "Aug 28, 2023 • Texture Kit Vol. 2" },
              { val: "$49.00", status: "Paid", col: "green", info: "Aug 12, 2023 • Subscription" },
            ].map((inv, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-[#1c1f27] rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 dark:text-white font-bold">{inv.val}</span>
                    <span className={`bg-${inv.col}-500/10 text-${inv.col}-500 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full`}>{inv.status}</span>
                  </div>
                  <p className="text-gray-500 dark:text-[#9da6b9] text-xs">{inv.info}</p>
                </div>
                <button className="text-gray-400 dark:text-[#9da6b9] hover:text-primary">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
