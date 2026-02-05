import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function ServiceInquiry() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden pb-24 text-white font-display">
      <TopAppBar
        title="Service Inquiry"
        leftAction={<span className="material-symbols-outlined cursor-pointer">close</span>}
        rightAction={<div className="w-12"></div>}
      />

      <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
        <div className="h-2 w-8 rounded-full bg-[#13ec5b]"></div>
        <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20"></div>
        <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20"></div>
      </div>

      <div className="px-4">
        <h3 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight pb-2 pt-2">Tell us about your project</h3>
        <p className="text-slate-500 dark:text-white/60 text-sm">Step 1: Define your requirements</p>
      </div>

      <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-2 pt-8">Project Type</h3>
      <div className="grid grid-cols-2 gap-3 p-4">
        {[
          { icon: "video_camera_back", label: "Video Editing", active: true },
          { icon: "code", label: "Web Dev", active: false },
          { icon: "palette", label: "Branding", active: false },
          { icon: "campaign", label: "Marketing", active: false },
        ].map((type, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-3 rounded-xl border p-5 items-start transition-all cursor-pointer ${type.active ? "border-[#13ec5b] bg-[#13ec5b]/10 text-[#13ec5b]" : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-400 dark:text-white/40"}`}
          >
            <span className="material-symbols-outlined text-3xl">{type.icon}</span>
            <h2 className={`text-base font-bold leading-tight ${type.active ? "" : "text-slate-900 dark:text-white"}`}>{type.label}</h2>
          </div>
        ))}
      </div>

      <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-2 pt-6">Project Details</h3>
      <div className="px-4">
        <textarea className="w-full min-h-[140px] rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] outline-none transition-all resize-none" placeholder="Describe your vision, goals, and any specific requirements you have in mind..."></textarea>
      </div>

      <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-2 pt-8">Upload Brief</h3>
      <div className="px-4">
        <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-slate-200 dark:border-white/10 rounded-xl p-8 bg-white/50 dark:bg-white/5 cursor-pointer hover:bg-[#13ec5b]/5 transition-all">
          <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-white/40 mb-2">cloud_upload</span>
          <p className="text-sm text-slate-600 dark:text-white/60">Drag & drop or <span className="text-[#13ec5b] font-bold">browse</span></p>
          <p className="text-[10px] text-slate-400 dark:text-white/30 mt-1 uppercase tracking-widest">PDF, DOC, JPG (Max 25MB)</p>
        </div>
      </div>

      <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-2 pt-8">Budget Range</h3>
      <div className="px-4 flex flex-wrap gap-2">
        {[
          { label: "$1k - $3k", active: true },
          { label: "$3k - $10k", active: false },
          { label: "$10k+", active: false },
        ].map((range, idx) => (
          <div
            key={idx}
            className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition-all ${range.active ? "border-[#13ec5b] bg-[#13ec5b]/10 text-[#13ec5b] font-semibold" : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 font-medium hover:border-[#13ec5b]/50"}`}
          >
            {range.label}
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-white/5 flex items-center gap-3 z-50">
        <button className="flex-1 h-14 bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white font-bold rounded-xl active:scale-[0.98] transition-all">
          Save Draft
        </button>
        <button className="flex-[2] h-14 bg-[#13ec5b] text-[#102216] font-bold rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-[#13ec5b]/20 flex items-center justify-center gap-2">
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
