import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function AutomationFlowBuilder() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark text-white font-display">
      <TopAppBar
        title={
          <div className="flex flex-col items-center">
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Drip Sequence</h2>
            <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Creator Economy Pro</span>
          </div>
        }
        leftAction={<span className="material-symbols-outlined">arrow_back_ios</span>}
        rightAction={<p className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0">Publish</p>}
      />

      <div className="bg-background-light dark:bg-background-dark">
        <div className="flex border-b border-white/10 px-4 gap-8">
          {[
            { label: "Active", active: true },
            { label: "Draft", active: false },
            { label: "Analytics", active: false },
          ].map((tab, idx) => (
            <a key={idx} className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${tab.active ? 'border-b-primary text-white' : 'border-b-transparent text-white/40'}`} href="#">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-[#0a0e17] relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="relative z-10 py-8">
          <div className="grid grid-cols-[60px_1fr] gap-x-2 px-4">
            {[
              { type: 'trigger', title: "Trigger: New Signup", sub: "Immediate • All channels", icon: "bolt", col: "primary" },
              { type: 'action', title: "Action: Send Welcome", sub: "Template: Welcome_Series_v2", icon: "mail", col: "white", line: true },
              { type: 'delay', title: "Delay: Wait 48 Hours", sub: "Timezone: Subscriber's local", icon: "schedule", col: "orange" },
              { type: 'condition', title: "Check: Link Clicked?", sub: "Path: A/B Split Branching", icon: "call_split", col: "purple" },
            ].map((node, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center gap-1 pt-3">
                  <div className={`flex items-center justify-center size-10 ${node.type === 'condition' ? 'rotate-45 rounded' : 'rounded-full'} bg-${node.col === 'primary' ? 'primary' : node.col === 'white' ? 'white' : node.col === 'purple' ? 'purple' : 'orange'}-500/20 text-${node.col === 'primary' ? 'primary' : node.col === 'white' ? 'white' : node.col === 'purple' ? 'purple' : 'orange'}-400 border border-${node.col === 'primary' ? 'primary' : node.col === 'white' ? 'white' : node.col === 'purple' ? 'purple' : 'orange'}-500/30 ${node.col === 'primary' ? 'shadow-[0_0_15px_rgba(19,91,236,0.3)]' : ''}`}>
                    <span className={`material-symbols-outlined ${node.type === 'condition' ? '-rotate-45' : ''} text-[20px]`}>{node.icon}</span>
                  </div>
                  <div className="w-[2px] bg-primary/30 h-8 grow"></div>
                </div>
                <div className={`flex flex-1 flex-col py-3 bg-white/5 rounded-xl px-4 mb-4 border border-white/5 backdrop-blur-sm ${node.line ? 'border-l-4 border-l-primary' : ''}`}>
                  <div className="flex justify-between items-start">
                    <p className="text-white text-base font-semibold leading-normal">{node.title}</p>
                    <span className={`material-symbols-outlined text-${node.line ? 'primary' : 'white/40'} text-sm`}>{node.line ? 'edit' : 'settings'}</span>
                  </div>
                  <p className="text-white/50 text-sm font-normal leading-normal">{node.sub}</p>
                </div>
              </React.Fragment>
            ))}

            <div className="flex flex-col items-center gap-1 pb-3">
              <div className="w-[2px] bg-primary/30 h-4"></div>
              <div className="flex items-center justify-center size-10 rounded-full border-2 border-dashed border-white/20 text-white/20">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col py-3 justify-center">
              <p className="text-white/20 text-sm font-medium italic">Add next step...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-32 right-6 z-30">
        <button className="flex items-center justify-center rounded-full size-14 bg-primary text-white shadow-lg shadow-primary/40 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>

      {/* BottomSheet */}
      <div className="flex absolute top-0 left-0 h-full w-full flex-col justify-end items-stretch bg-black/60 z-40">
        <div className="flex flex-col items-stretch bg-background-dark rounded-t-2xl border-t border-white/10 shadow-2xl">
          <button className="flex h-8 w-full items-center justify-center">
            <div className="h-1.5 w-12 rounded-full bg-white/20"></div>
          </button>
          <div className="p-6 pt-2 pb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-xl font-bold">Configure Email</h3>
              <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Action</span>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-white/40 text-xs font-bold uppercase tracking-widest">Email Template</label>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">article</span>
                    </div>
                    <span className="text-white">Welcome_Series_v2</span>
                  </div>
                  <span className="material-symbols-outlined text-white/40">expand_more</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white/40 text-xs font-bold uppercase tracking-widest">Tracking</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                    <span className="text-white text-sm">Clicks & Opens</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/40 text-xs font-bold uppercase tracking-widest">Priority</label>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-400 text-sm">star</span>
                    <span className="text-white text-sm">High</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button className="flex-1 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10">Delete</button>
                <button className="flex-[2] py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20">Save Configuration</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
