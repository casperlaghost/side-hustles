import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function MemberVault() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-10 bg-background-light dark:bg-background-dark text-white font-display">
      <TopAppBar
        title="Subscriber Vault"
        leftAction={<span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>}
        rightAction={<span className="material-symbols-outlined text-2xl">settings</span>}
      />

      <div className="flex p-4 flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex gap-4 items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-20 w-20 border-2 border-primary"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtQ82P1C37Cene2TRoYAxEMZhvMwGAiuBuf9MM5S_KXvqjgnstnEdu6NAPuTpTsC5rBOG4MVrhFYbrOAqIs7D-UyhnCkvV7yevYKYNFCFmYNg2lK5H5yKtKwMUnFW5_6XrisaD8HiUxeMLrX0WY--hj773TEUqJIEGp_649WOCAoY6Uvm2D2ECi_GuG4lXSzKRR5qrflKmlFA29pbhM7mcUUuEwL0q-ikc9zOfg6V5oVi7ht0AyH2LSILVAqrD8BU5hTfhu262Fl_K")' }}
          ></div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <p className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Alex Rivera</p>
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Pro Member</span>
            </div>
            <p className="text-slate-400 text-sm font-normal leading-normal">Verified VIP Subscriber</p>
          </div>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] w-full sm:w-auto">
          <span className="truncate">My Perks</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-3 px-4 py-2">
        <div className="flex min-w-[150px] flex-1 flex-col gap-1 rounded-xl p-4 bg-[#1c2433] border border-slate-800">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Current Tier</p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
            <p className="text-white tracking-tight text-lg font-bold">VIP Platinum</p>
          </div>
        </div>
        <div className="flex min-w-[150px] flex-1 flex-col gap-1 rounded-xl p-4 bg-[#1c2433] border border-slate-800">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Next Unlock</p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">event</span>
            <p className="text-white tracking-tight text-lg font-bold">Oct 15, 2023</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
        <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 cursor-pointer">
          <p className="text-white text-sm font-semibold">All Content</p>
        </div>
        {["Video Tutorials", "Preset Packs", "Project Files"].map((cat, idx) => (
          <div key={idx} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#1c2433] border border-slate-800 px-5 cursor-pointer">
            <p className="text-slate-300 text-sm font-medium">{cat}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 pt-4">
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Exclusive Content</h2>
        <p className="text-primary text-sm font-bold">View all</p>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4">
        {[
          { title: "Cinematic Color Grading Masterclass", sub: 'Learn how to achieve the "Hollywood look" in 10 minutes.', info: "24:15 min", icon: "schedule", action: "Watch Now", badge: "Early Access", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-UmlzSoZO-3u30VF1zCoSmHWhXlLxlihE6WhxNVDI8fkOCQYR-NuD7TUGKgBox67USiarmb0qZdHgoPjdEOVI3drt-B44ShFglHYxBMnuoyL32Mlfs2fY_UC2CajzkjwWoYx5hZ9MgaHWNP_0BJjRERrFoNy2lVi-wKMOEfWT-H-hOjSk_B-XDNhslA2njrjSyE2ZYZ6of9X6yOBRX9ZL37E8xiuTFLbfZS1BFaXHYlMGhQ1fGh2XgkDu0M2ZsnHXRaXtrly0UXTJ" },
          { title: 'The "Dark Minimalist" Lightroom Presets', sub: "15 high-quality presets for dark-themed desk setup photography.", info: "45.2 MB", icon: "download", action: "Download", badge: "Premium Pack", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKoleBA8Iw_EdXKCmRTxtISqUTuCQfVfVrsrq1AN7qcosEUfU8hKKfVETb-AMlVT0ISG_j8LsboWPcSTdbnuodOzULBvRPHd-Mx5XZSKStBiwoxK8Z7RekEAzmmJxlRWVQlQbAK7dTXxZF7lhoeMHGYe9Pt0u_fcWvLtknYm8Dn71GqMF49iMZNoNbPOHC__GTrPmoBbSb9x3cM3ngwtE0_OBWKyhrLLDiIKN0Z9qDh07Wr4u_FflU-XrEd2J9v-W89r5a1RK2zrWn" },
          { title: "After Effects Project: HUD UI Kit", sub: "Fully customizable project file from my latest YouTube video.", info: "1.2 GB", icon: "folder", action: "Download", badge: "Source Files", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWEzq1j07oYURmKyS1iaJZR3nvsrM_DMmU46S0PBlfrJoVMLhrU-9JfdunC3ZzNf9ENB1m3vwpNGCb85GeJJAssfKykY9rRNuogNF8Oo7ski0snvySw7Q9haVL0RVbN9wvtoS89ddhi-fNB5wwfAXVljKWrLHBNuM83DrUnvDmrDzQKi9P1C76M3j4O13z9uG3mkzVbfy2jE7b03tNjrYr3lwnkeC7a7n1anNe1wkZy_Hfi8oHCxKFAVHtXB38mMjagJQR1drDSEbj" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col rounded-xl bg-[#1c2433] border border-slate-800 overflow-hidden">
            <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url("${item.img}")` }}>
              <div className={`absolute top-3 left-3 text-[10px] font-black px-2 py-1 rounded text-white uppercase ${item.badge === 'Early Access' ? 'bg-primary' : item.badge === 'Premium Pack' ? 'bg-amber-500' : 'bg-emerald-500'}`}>{item.badge}</div>
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-full text-white flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> VIP
              </div>
              {item.action === 'Watch Now' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                    <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-slate-400 text-sm line-clamp-1">{item.sub}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-sm">{item.icon}</span>
                  <span className="text-slate-400 text-xs">{item.info}</span>
                </div>
                <button className={`text-sm font-bold px-4 py-1.5 rounded-lg ${item.action === 'Watch Now' ? 'bg-primary/20 text-primary' : 'bg-primary text-white'}`}>{item.action}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-16"></div>
      <div className="fixed bottom-0 left-0 right-0 bg-background-dark/90 backdrop-blur-lg border-t border-slate-800 flex justify-around items-center h-20 px-6 pb-4 z-50">
        {[
          { label: "Home", icon: "home", active: false },
          { label: "Vault", icon: "diamond", active: true, fill: 1 },
          { label: "Search", icon: "search", active: false },
          { label: "Profile", icon: "person", active: false },
        ].map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center gap-1 ${item.active ? "text-primary" : "text-slate-500"}`}>
            <span className="material-symbols-outlined text-2xl" style={item.fill ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
