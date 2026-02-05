import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function NegotiationChat() {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto border-x border-[#3b5443] relative overflow-hidden bg-background-light dark:bg-background-dark text-white font-display">
      <TopAppBar
        title={
          <div className="flex flex-col items-center">
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Alex Rivera</h2>
            <p className="text-[#13ec5b] text-xs font-medium">Active Negotiation</p>
          </div>
        }
        leftAction={<span className="material-symbols-outlined">arrow_back</span>}
        rightAction={<span className="material-symbols-outlined">more_vert</span>}
      />

      <div className="pb-1 bg-background-light dark:bg-background-dark">
        <div className="flex border-b border-[#3b5443]/30 px-4 gap-6 overflow-x-auto no-scrollbar">
          {[
            { label: "Chat", active: true },
            { label: "Negotiation Tools", active: false },
            { label: "Files", active: false },
          ].map((tab, idx) => (
            <a
              key={idx}
              href="#"
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[10px] pt-3 shrink-0 ${tab.active ? 'border-b-[#13ec5b] text-white' : 'border-b-transparent text-[#9db9a6]'}`}
            >
              <p className="text-xs font-bold leading-normal uppercase tracking-wider">{tab.label}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-background-light dark:bg-background-dark">
        <div className="flex justify-center">
          <span className="text-[#9db9a6] text-[10px] font-bold uppercase tracking-widest bg-[#1a2e21] px-3 py-1 rounded-full">Today</span>
        </div>

        <div className="flex items-end gap-3 max-w-[85%]">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-8 w-8 shrink-0 border border-[#3b5443]"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtwvH7wI9jxqrJ-plXHR4PdrTcGYwFBjv2KScBNUXzzTG5Syz3VmBCrT4xOIC5_er84NTQG9Agc3wj8mgoKHc9b1xkRy-tWSN39BW8TiFV7fj0KhqsJGaIVdqnUzTxBn8mObHYplDjRqGAoRBaKBoeRT7KMtVCvywASTI6FkdHKPqZ9vTIJUjckOOAfxOcBvlHoA7zeQQf-FuvBgqCxTBsTCfPiG62lCAVlIuA2gvFEOOgTXQGzPHBwzxEnpXkVFWltO-vaj5ot5IL")' }}
          ></div>
          <div className="bg-[#1a2e21] p-3 rounded-xl rounded-bl-none border border-[#3b5443]/30">
            <p className="text-white text-sm">Hey! I reviewed the initial proposal. Can we discuss the project brief? I need more clarity on the delivery milestones.</p>
            <p className="text-[#9db9a6] text-[10px] mt-1 text-right">09:12 AM</p>
          </div>
        </div>

        <div className="flex items-end gap-3 max-w-[85%] ml-auto flex-row-reverse">
          <div className="bg-[#13ec5b]/10 p-3 rounded-xl rounded-br-none border border-[#13ec5b]/20">
            <p className="text-white text-sm">Of course, Alex. I&apos;m attaching the revised brief and a proposed quote based on our last call.</p>
            <p className="text-[#13ec5b]/70 text-[10px] mt-1 text-right">09:15 AM</p>
          </div>
        </div>

        {/* Interactive Card: Proposed Quote */}
        <div className="mx-auto w-[90%] bg-[#1a2e21] border border-[#13ec5b]/40 rounded-xl overflow-hidden shadow-lg">
          <div className="bg-[#13ec5b]/20 p-3 flex items-center justify-between border-b border-[#13ec5b]/20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#13ec5b] text-sm">payments</span>
              <span className="text-white text-sm font-bold">Proposed Quote</span>
            </div>
            <span className="bg-[#13ec5b] text-[#102216] text-[10px] font-black px-2 py-0.5 rounded uppercase">Pending</span>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[#9db9a6] text-sm">Total Amount</span>
              <span className="text-white font-bold text-lg">$2,450.00</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-[#9db9a6]">Deposit (50%)</span>
                <span className="text-white">$1,225.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#9db9a6]">Platform Fee</span>
                <span className="text-white">$45.00</span>
              </div>
            </div>
            <button className="w-full bg-[#13ec5b] text-[#102216] font-bold py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
              Accept Quote
            </button>
          </div>
        </div>

        {/* Interactive Card: Revised Timeline */}
        <div className="mx-auto w-[90%] bg-[#1a2e21] border border-[#3b5443] rounded-xl overflow-hidden">
          <div className="p-3 flex items-center gap-2 border-b border-[#3b5443]">
            <span className="material-symbols-outlined text-[#13ec5b] text-sm">event_repeat</span>
            <span className="text-white text-sm font-bold">Revised Timeline</span>
          </div>
          <div className="p-4 flex items-center gap-4">
            <div className="flex flex-col items-center bg-background-dark p-2 rounded-lg min-w-[60px] border border-[#3b5443]">
              <span className="text-[#13ec5b] text-[10px] font-bold uppercase">Oct</span>
              <span className="text-white text-xl font-black">24</span>
            </div>
            <div>
              <p className="text-white text-sm font-bold">Phase 1 Delivery</p>
              <p className="text-[#9db9a6] text-xs">Brand Strategy & Moodboards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation Quick Actions */}
      <div className="bg-background-light dark:bg-background-dark px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar border-t border-[#3b5443]/30">
        {[
          { icon: "description", label: "Send Brief" },
          { icon: "request_quote", label: "New Quote" },
          { icon: "history", label: "Timeline" },
          { icon: "verified", label: "Milestone" },
        ].map((action, idx) => (
          <button key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-[#1a2e21] border border-[#3b5443] rounded-full shrink-0">
            <span className="material-symbols-outlined text-[#13ec5b] text-sm">{action.icon}</span>
            <span className="text-xs text-white">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Message Input Bar */}
      <div className="p-4 bg-background-light dark:bg-background-dark border-t border-[#3b5443]/50">
        <div className="flex items-center gap-2 bg-[#1a2e21] rounded-2xl p-1 border border-[#3b5443]">
          <button className="p-2 text-[#9db9a6] hover:text-[#13ec5b]">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <input className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder-[#9db9a6]" placeholder="Type a message..." type="text" />
          <button className="p-2 text-[#13ec5b]">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[10px] text-[#9db9a6] uppercase font-bold self-center mr-1 shrink-0">Quick:</span>
          {["Looks good!", "Checking now", "Let's hop on a call"].map((q, idx) => (
            <button key={idx} className="text-[11px] bg-background-dark border border-[#3b5443] text-white px-3 py-1 rounded-lg shrink-0">{q}</button>
          ))}
        </div>
      </div>

      <div className="h-6 flex justify-center items-center bg-background-light dark:bg-background-dark">
        <div className="w-32 h-1 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
}
