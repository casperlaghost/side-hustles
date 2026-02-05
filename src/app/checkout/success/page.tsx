import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function OrderSuccess() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-[430px] mx-auto text-white antialiased font-display">
      <TopAppBar
        title="Order Status"
        leftAction={<span className="material-symbols-outlined text-white">close</span>}
        rightAction={<div className="w-12"></div>}
      />

      <div className="flex flex-col items-center pt-8 pb-4">
        <div className="size-24 rounded-full bg-[#13ec5b]/20 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-[#13ec5b] text-6xl">check_circle</span>
        </div>
      </div>

      <h1 className="text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3">Thank You!</h1>
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-1">Order #MH-928374</h2>
      <p className="text-white/70 text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">Total Amount: $149.00</p>

      {/* Digital Downloads Section */}
      <div className="px-4 py-2">
        <h3 className="text-white text-md font-bold mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#13ec5b]">download</span>
          Digital Downloads
        </h3>
        <div className="space-y-3">
          {[
            { name: "Creator Growth Guide.pdf", size: "24.5 MB", icon: "description", action: "download" },
            { name: "Masterclass Access.link", size: "Direct Access", icon: "video_library", action: "open_in_new" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-[#13ec5b]/10 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#13ec5b]">{item.icon}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{item.name}</p>
                  <p className="text-white/50 text-xs">{item.size}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#13ec5b] cursor-pointer">{item.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping Info Section */}
      <div className="px-4 py-6">
        <h3 className="text-white text-md font-bold mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#13ec5b]">local_shipping</span>
          Shipping Info
        </h3>
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider font-bold">Tracking Number</p>
            <p className="text-white text-base font-mono">Pending Fulfillment</p>
          </div>
          <div className="px-3 py-1 bg-white/10 rounded-full">
            <p className="text-white/70 text-[10px] font-bold">PREPARING</p>
          </div>
        </div>
      </div>

      {/* Items in Order */}
      <div className="px-4 py-2">
        <h3 className="text-white text-md font-bold mb-3">Items in Order</h3>
        <div className="grid grid-cols-2 gap-3 pb-6">
          <div
            className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-lg border border-white/10"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvF3wrCGcpFqmdpoXur57XIBvRHCEDZRrvkRQKGLwWQj7vo6pDtDC1auZ9L2NQ_1wnoKXy-DkmzBoqd8h075BZ8zzs7lSmshIeoUNeoB-IqU_4hWlRpxf9Y_Z5ZwPBA-6x3DAzJP-gIgTAUH9zgYrtRikuTfc6h9bmqDaA44X4GN3GaRp8Tix6CXvuUvEOuK0qZNQ6F7vZ4vc5xUP-aPnSmhoG3TNW9wUGxX8iT77BpAahfrjj1SMa-BYubMsNLuXXgpAJJ5PzwuDn")' }}
          ></div>
          <div
            className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-lg border border-white/10"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsg7Ep_Tk6JaRXQvIlJ4hvQzridnoPmDQlepzj3Rr3ONWU3th4tOXYUwLB3IT4EB_NIRX8VYRIrH-5dQNuUIFWkS1UkUmhsBbxMGxpRDN4W2QU2B5-dWkJdlVSJ9MtgsFTQ46WDya796TG-pZ5SNZ8ib7SdUuCZB0Gyyr8QDPeKRHCZiEvreq32LXSIRTrrsnlCzA3chSO4RjQfmw3-JTKABGtym3ug_KPHMhz3900HgS3a16V6Ql1QRiHVLlR2LZc52ynt1VXLlmD")' }}
          ></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 pb-12 mt-auto space-y-3">
        <button className="w-full h-14 bg-[#13ec5b] text-[#102216] font-bold rounded-xl text-lg flex items-center justify-center gap-2">
          View in My Portal
        </button>
        <button className="w-full h-14 bg-white/10 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
