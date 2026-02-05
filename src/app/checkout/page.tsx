import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function Checkout() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark max-w-[480px] mx-auto overflow-x-hidden text-white font-display">
      <TopAppBar
        title="Secure Checkout"
        leftAction={<span className="material-symbols-outlined">arrow_back_ios</span>}
        rightAction={<div className="w-12"></div>}
      />

      {/* ProgressBar */}
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between">
          <p className="text-white text-base font-medium leading-normal">Shipping & Payment</p>
          <p className="text-white text-sm font-normal leading-normal">2 of 3</p>
        </div>
        <div className="rounded bg-[#3f3b54] overflow-hidden">
          <div className="h-2 rounded bg-primary" style={{ width: "66%" }}></div>
        </div>
      </div>

      {/* Order Summary */}
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 border-t border-white/5 mt-2">Order Summary</h3>
      <div className="px-4">
        <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white/5 p-3">
          <div className="flex flex-[2_2_0px] flex-col justify-between py-1">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Multi-hustle Creator Bundle</p>
              <p className="text-[#a19db9] text-xs font-normal leading-normal">1 Physical, 1 Digital item</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-primary font-bold">$149.00</span>
              <button className="flex items-center justify-center rounded-lg h-7 px-3 bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors">
                <span>Edit Cart</span>
              </button>
            </div>
          </div>
          <div
            className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9kGQenkbVPjW1FrpgGUy_KgpJ6TDcUXqXwf9rI3wq5HZ2ogEIk-vGd3IFCXeIFze6ebwKmAogP-ppHELTocmCns2f45mlLkCte4d3G4dGt6OHKEHiPZwsh-J6EIOWZdBsIJfMA2XfRq2r8vt5s7EOZ17Cm2zhZ70TNQGcbhHlta7I2dmOkLavaEj2jCMc6m4jQHi-G7UVCnk0UQCLxQ2ui6OtFErNyj_9bHAxPZsZpkVe8ejsDKjfz7eMDwdpxmEqV9gNhTWzNrHg")' }}
          ></div>
        </div>
      </div>

      {/* Shipping Address */}
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Shipping Address</h3>
      <div className="px-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-white/60 text-xs font-medium ml-1">Full Name</label>
          <input className="bg-white/5 border border-white/10 rounded-lg text-white p-3 focus:ring-primary focus:border-primary outline-none" placeholder="Alex Rivera" type="text" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white/60 text-xs font-medium ml-1 flex items-center gap-1">
            Street Address
            <span className="material-symbols-outlined text-[10px]">location_on</span>
          </label>
          <input className="bg-white/5 border border-white/10 rounded-lg text-white p-3 focus:ring-primary focus:border-primary outline-none" placeholder="123 Creator Lane" type="text" />
          <p className="text-primary/70 text-[11px] px-1 italic">Auto-complete enabled</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-xs font-medium ml-1">City</label>
            <input className="bg-white/5 border border-white/10 rounded-lg text-white p-3 focus:ring-primary focus:border-primary outline-none" placeholder="Los Angeles" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white/60 text-xs font-medium ml-1">ZIP Code</label>
            <input className="bg-white/5 border border-white/10 rounded-lg text-white p-3 focus:ring-primary focus:border-primary outline-none" placeholder="90001" type="text" />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-8">Payment Method</h3>
      <div className="px-4 flex gap-3 mb-6">
        <button className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold rounded-xl h-12">
          <span className="material-symbols-outlined">ios</span> Apple Pay
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#202124] text-white border border-white/10 font-bold rounded-xl h-12">
          <span className="material-symbols-outlined">google</span> Google Pay
        </button>
      </div>

      {/* Credit Card Form */}
      <div className="px-4 flex flex-col gap-4 mb-24">
        <div className="bg-white/5 rounded-xl p-4 border border-primary/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-medium">Credit or Debit Card</span>
            <span className="material-symbols-outlined text-white/50">credit_card</span>
          </div>
          <div className="flex flex-col gap-4">
            <input className="bg-transparent border-b border-white/20 text-white p-2 focus:border-primary focus:outline-none focus:ring-0" placeholder="Card number" type="text" />
            <div className="grid grid-cols-2 gap-4">
              <input className="bg-transparent border-b border-white/20 text-white p-2 focus:border-primary focus:outline-none focus:ring-0" placeholder="MM/YY" type="text" />
              <input className="bg-transparent border-b border-white/20 text-white p-2 focus:border-primary focus:outline-none focus:ring-0" placeholder="CVV" type="text" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer Action */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-background-dark/80 backdrop-blur-md p-4 border-t border-white/10">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-white/60">Total to pay</span>
          <span className="text-xl font-bold text-white">$149.00</span>
        </div>
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">lock</span> Complete Purchase
        </button>
      </div>
    </div>
  );
}
