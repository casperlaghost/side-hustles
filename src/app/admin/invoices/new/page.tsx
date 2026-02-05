import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function InvoiceGenerator() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark text-white font-display">
      <TopAppBar
        title="Create Invoice"
        leftAction={<span className="material-symbols-outlined">arrow_back</span>}
        rightAction={<span className="material-symbols-outlined">more_horiz</span>}
      />

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="mt-4">
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2">Bill To</h3>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-base font-medium leading-normal pb-2">Select Client</p>
              <div className="relative">
                <select className="appearance-none flex w-full rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#3b5443] bg-[#1c271f] focus:border-[#13ec5b] h-14 p-[15px] text-base font-normal leading-normal">
                  <option value="one">Search leads or clients</option>
                  <option value="alex">Alex Rivers (Design Client)</option>
                  <option value="tech">TechNova Solutions</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-4 text-[#9db9a6] pointer-events-none">unfold_more</span>
              </div>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center px-4 pb-2">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Line Items</h3>
            <button className="text-[#13ec5b] text-sm font-bold">+ Add Item</button>
          </div>

          <div className="flex gap-4 bg-white/5 mx-4 my-2 rounded-xl px-4 py-4 justify-between border border-white/5">
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal">UI/UX Design Services</p>
              <div className="flex gap-2 mt-1">
                <p className="text-[#9db9a6] text-sm font-normal">10 hrs</p>
                <p className="text-[#9db9a6] text-sm font-normal">@</p>
                <p className="text-[#9db9a6] text-sm font-normal">$150/hr</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-white font-bold">$1,500.00</p>
              <div className="text-[#9db9a6] cursor-pointer hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </div>
            </div>
          </div>

          <div className="mx-4 p-4 rounded-xl bg-white/5 border border-[#13ec5b]/30 space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-[#9db9a6] font-bold uppercase tracking-wider">Description</p>
              <input className="w-full bg-background-dark border border-[#3b5443] rounded-lg text-white p-3 focus:ring-1 focus:ring-[#13ec5b] focus:border-[#13ec5b] outline-none" placeholder="e.g. Content Creation" type="text" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <p className="text-xs text-[#9db9a6] font-bold uppercase tracking-wider">Qty/Hrs</p>
                <input className="w-full bg-background-dark border border-[#3b5443] rounded-lg text-white p-3 focus:ring-1 focus:ring-[#13ec5b] outline-none" type="number" defaultValue="1" />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-xs text-[#9db9a6] font-bold uppercase tracking-wider">Price</p>
                <input className="w-full bg-background-dark border border-[#3b5443] rounded-lg text-white p-3 focus:ring-1 focus:ring-[#13ec5b] outline-none" placeholder="$0.00" type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-lg font-bold">Tax & Discounts</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#9db9a6]">+ Tax</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#9db9a6]">+ Discount</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-white text-base font-medium">Payment Terms</p>
            <div className="grid grid-cols-3 gap-2">
              <button className="py-2 px-1 border border-[#13ec5b] bg-[#13ec5b]/10 text-[#13ec5b] rounded-lg text-sm font-bold">Net 15</button>
              <button className="py-2 px-1 border border-[#3b5443] text-[#9db9a6] rounded-lg text-sm font-bold">Net 30</button>
              <button className="py-2 px-1 border border-[#3b5443] text-[#9db9a6] rounded-lg text-sm font-bold">Receipt</button>
            </div>
          </div>
        </div>

        <div className="mt-6 mx-4 p-4 bg-[#13ec5b]/10 border border-[#13ec5b]/20 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#13ec5b]/20 rounded-lg">
              <span className="material-symbols-outlined text-[#13ec5b]">credit_card</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Online Payments</p>
              <p className="text-[#9db9a6] text-xs">Enable Stripe processing</p>
            </div>
          </div>
          <div className="w-12 h-6 bg-[#13ec5b] rounded-full relative flex items-center px-1">
            <div className="size-4 bg-white rounded-full absolute right-1"></div>
          </div>
        </div>

        <div className="mt-8 px-4">
          <p className="text-[#9db9a6] text-xs font-bold uppercase tracking-widest mb-4">Invoice Preview</p>
          <div className="aspect-[1/1.4] w-full bg-white rounded-lg shadow-2xl p-6 relative overflow-hidden">
            <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
            <div className="h-8 w-40 bg-gray-800 rounded mb-8"></div>
            <div className="space-y-2 mb-8">
              <div className="h-2 w-full bg-gray-100 rounded"></div>
              <div className="h-2 w-full bg-gray-100 rounded"></div>
              <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-between items-center">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                <div className="h-4 w-12 bg-gray-800 rounded"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-background-dark border-t border-white/10 flex flex-col gap-3">
        <div className="flex justify-between items-end mb-1 px-1">
          <span className="text-[#9db9a6] text-sm">Total Amount</span>
          <span className="text-2xl font-bold text-white">$1,500.00</span>
        </div>
        <button className="w-full bg-[#13ec5b] hover:bg-[#13ec5b]/90 text-[#102216] font-bold h-14 rounded-xl flex items-center justify-center gap-2 transition-all">
          <span className="material-symbols-outlined">send</span>
          Send Invoice
        </button>
      </div>
    </div>
  );
}
