import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { SearchBar } from "@/components/ui/SearchBar";
import { BottomNav } from "@/components/layout/BottomNav";

export default function InquiryReview() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden text-white font-display">
      <TopAppBar
        title="Inquiry Review"
        rightAction={<span className="material-symbols-outlined">notifications</span>}
      />

      <main className="pb-24">
        {/* Search Bar */}
        <div className="px-4 py-3">
          <SearchBar placeholder="Search leads..." />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#13ec5b] text-[#102216] px-4">
            <p className="text-sm font-bold leading-normal">All</p>
          </button>
          {["New", "Review", "Quoted"].map((filter, idx) => (
            <button key={idx} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#1a2e21] border border-[#2d4d38] px-4">
              <p className="text-[#9db9a6] text-sm font-medium leading-normal">{filter}</p>
            </button>
          ))}
        </div>

        {/* Leads List */}
        <div className="flex flex-col gap-1 px-2 mt-4">
          {[
            { name: "Alex Rivera", status: "New", date: "Oct 24, 2023", info: "Video Production • $2k - $5k", active: true, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARnUx_iqBl_bCOwOk2cov2ZsYe-E5ozQvCKXA6aMHB3rCvYUopGv2tEv2_oR5n9SNs5fDffGSowT4IPs9SFf7FKJckE_554pdT5MJvObWaFLqJjerItl7FzE_jfQBUsOJhivZeZEFNW4st3cE9bUSwEIPwB3pr0mswkg2oUHyjngqUzRvGmbYna3aD2gqnffBJVG3LmyNhf803pbR4xxhSG0wWvmr2vlxINKdjAvLvIvYw4Z22QB3B0w2-z7HAxU2bo_Zqb7ReZwjS" },
            { name: "Jordan Smith", status: "Review", date: "Oct 23, 2023", info: "Web Design • $5k - $10k", active: false, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDucYlYZ3WJd1Vf2UTKRtEkUNFtEZicoBCCG8tg6fcoA_k9qVC6-DwqP92QF7rkPvzwAbhu4OESZ1MPGVqGo6kc1PVGcrgAYufy1rgKMhWbAbitZDzNVN5GKiRc7EGBUCAZBO2wUrrcJ4lXC9R5sCaueBy5HHoDwUyBD3jbmtGsT5HJfV43bx87ykCZquRga6RXGHc9oW_BbYDAtz_bqihVEN0JsDm6EhcHx230PZdV5JPmrRPwBLBqTpXtJ7ZrkyDDD3m_Me9Sgs4-" },
            { name: "Marcus Chen", status: "Quoted", date: "Oct 21, 2023", info: "Content Strategy • $3k - $4k", active: false, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhSBUM6jZ99OWLJ7rNK3OdM2WevPRlfboh_gvradiuXyTzIMR5HL2jL6Y7Zxj7iGnY639ZokPIUXlJcdG_i6YZFyNOVFnn1M0Aqk-J1dO_43BBURbptob0rBzE_Pgzms1zBLy8YdBsfmxTobTNP1glBa-L9n4C4_UoLBpCnH7OP5ombba8Jqapc-H6v0oW1JjoVYk572AlIk4Ujxu_jEg0j8_IRfXRYnLqyZkSqXRk10qIOcuIFfZ7xaeKkiVHuJ2Ep7YhZwUSk96L" },
          ].map((lead, idx) => (
            <div key={idx} className={`flex gap-4 px-4 py-4 justify-between rounded-lg transition-colors ${lead.active ? "bg-[#13ec5b]/10 border-l-4 border-[#13ec5b]" : "bg-transparent hover:bg-[#1a2e21]"}`}>
              <div className="flex items-start gap-4">
                <div
                  className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[60px] w-[60px] ${lead.active ? "border-2 border-[#13ec5b]/30" : ""}`}
                  style={{ backgroundImage: `url("${lead.img}")` }}
                ></div>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <p className="text-white text-base font-bold leading-tight">{lead.name}</p>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${lead.status === 'New' ? 'bg-[#13ec5b]/20 text-[#13ec5b]' : lead.status === 'Quoted' ? 'bg-blue-500/20 text-blue-400' : 'bg-[#2d4d38] text-[#9db9a6]'}`}>{lead.status}</span>
                  </div>
                  <p className="text-[#9db9a6] text-xs font-normal leading-normal mt-1">Received: {lead.date}</p>
                  <p className="text-white text-sm font-medium leading-normal mt-0.5">{lead.info}</p>
                </div>
              </div>
              <div className="shrink-0 text-[#9db9a6] flex items-center justify-center">
                {lead.active ? (
                  <div className="size-3 rounded-full bg-[#13ec5b] shadow-[0_0_8px_rgba(19,236,91,0.6)]"></div>
                ) : (
                  <span className="material-symbols-outlined">chevron_right</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Backdrop for Modal/Drawer */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"></div>
        {/* Detail Drawer (Simulated Open) */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#162a1c] border-t border-[#2d4d38] rounded-t-3xl z-50 p-6 shadow-2xl pb-10">
          <div className="w-12 h-1.5 bg-[#2d4d38] rounded-full mx-auto mb-6"></div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Project Inquiry</h3>
              <p className="text-[#13ec5b] text-sm font-medium">Video Production • High Priority</p>
            </div>
            <div className="size-10 rounded-full bg-[#1a2e21] flex items-center justify-center text-[#9db9a6] cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <div>
              <p className="text-[#9db9a6] text-xs font-bold uppercase tracking-wider mb-1">Description</p>
              <p className="text-white/90 text-sm leading-relaxed">
                Need a 60-second high-energy brand film for our new sustainable apparel launch. Looking for a mix of studio shots and outdoor lifestyle cinematography.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#1a2e21] p-3 rounded-lg border border-[#2d4d38]">
              <div className="size-10 rounded bg-[#13ec5b]/20 flex items-center justify-center text-[#13ec5b]">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">Brand_Brief_v1.pdf</p>
                <p className="text-[#9db9a6] text-xs">2.4 MB • PDF Document</p>
              </div>
              <span className="material-symbols-outlined text-[#13ec5b]">download</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-[#13ec5b] text-[#102216] font-bold py-4 rounded-xl flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              Accept & Create Project
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#1a2e21] text-white font-bold py-3 rounded-xl border border-[#2d4d38] flex items-center justify-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                Message
              </button>
              <button className="bg-transparent text-red-400 font-bold py-3 rounded-xl border border-red-900/30 flex items-center justify-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[18px]">block</span>
                Decline
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav
        items={[
          { label: "Home", icon: "dashboard" },
          { label: "Inquiries", icon: "inbox", active: true },
          { label: "Projects", icon: "assignment" },
          { label: "Profile", icon: "person" },
        ]}
      />
    </div>
  );
}
