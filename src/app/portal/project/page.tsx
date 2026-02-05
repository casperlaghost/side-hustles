import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function ClientProjectPortal() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-display">
      <TopAppBar
        title="Video Editing Project"
        leftAction={<span className="material-symbols-outlined">arrow_back</span>}
        rightAction={
          <button className="flex items-center justify-center rounded-lg h-12 bg-transparent">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        }
      />

      <div className="max-w-md mx-auto flex flex-col gap-6 p-4 pb-24">
        {/* Project Summary Card */}
        <div className="bg-white dark:bg-primary/5 rounded-xl p-4 border border-slate-200 dark:border-primary/20 shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="flex gap-6 justify-between items-center">
              <p className="text-slate-900 dark:text-white text-base font-semibold">Project Progress</p>
              <p className="text-primary text-sm font-bold">65%</p>
            </div>
            <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-2.5 overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: "65%" }}></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Phase: Post-Production</p>
              <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">In Progress</span>
            </div>
          </div>
        </div>

        {/* Timeline Milestones */}
        <section>
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4">Timeline Milestones</h3>
          <div className="grid grid-cols-[40px_1fr] gap-x-2">
            {[
              { title: "Project Kickoff", date: "Oct 12, 2023", icon: "check_circle", color: "text-green-500", fill: 1, line: true },
              { title: "First Draft Review", date: "Oct 18, 2023", icon: "check_circle", color: "text-green-500", fill: 1, line: true },
              { title: "Color Grading & SFX", date: "Ongoing", icon: "schedule", color: "text-primary", fill: 0, line: true },
              { title: "Final Delivery", date: "Est. Oct 25", icon: "radio_button_unchecked", color: "text-slate-400 dark:text-slate-600", fill: 0, line: false },
            ].map((m, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-1">
                  {i > 0 && <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>}
                  <span className={`material-symbols-outlined ${m.color}`} style={{ fontVariationSettings: `'FILL' ${m.fill}` }}>{m.icon}</span>
                  {m.line && <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-8 grow"></div>}
                </div>
                <div className={`flex flex-1 flex-col ${m.line ? "pb-6" : ""}`}>
                  <p className={`text-base font-semibold ${i === 3 ? "text-slate-400 dark:text-slate-600" : "text-slate-900 dark:text-white"}`}>{m.title}</p>
                  <p className={`text-sm ${i === 2 ? "text-primary font-medium" : "text-slate-500 dark:text-slate-400"}`}>{m.date}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Files & Deliverables */}
        <section>
          <div className="flex justify-between items-center pb-4">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Files & Deliverables</h3>
            <button className="text-primary text-sm font-semibold">View All</button>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: "Draft_02_Final_v1.mp4", info: "124 MB • Oct 19", icon: "movie" },
              { name: "Music_License_Agreement.pdf", info: "2.4 MB • Oct 15", icon: "description" },
            ].map((file, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-primary/10 border border-slate-200 dark:border-primary/10">
                <div className="flex items-center justify-center size-12 rounded-lg bg-slate-100 dark:bg-slate-800">
                  <span className="material-symbols-outlined text-primary">{file.icon}</span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-slate-900 dark:text-white text-sm font-semibold truncate">{file.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{file.info}</p>
                </div>
                <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-primary">download</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Message Creator Quick Action */}
        <div className="mt-4 p-4 rounded-2xl bg-primary text-white flex items-center justify-between shadow-lg shadow-primary/20">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT6JZRSq07mbf3xpkmT0X-YFaoatwvIGfeCcwo7vbYbJ2rY5AOOB7Dx-sKB5eo7hj4cvCIKrosv5RpF6TEtAnOEGMofMbrK7iLz--1rhN0snjM529PwPJqW6g0WOrfNvPZyUoxUm12A04-lWZWAfPjsz4vUD8paXoepiDptjMiNxxFMyIwplVkEwu3ak38XhJ5GeHyw3WoZvBDzo0snxATPYIs8P0IOVjmXd06PI5FExTcoxTAuD1evKo4sABQqfo-0IvSQSD3OZpG" alt="Alex" />
            </div>
            <div>
              <p className="text-sm font-bold">Have questions?</p>
              <p className="text-xs text-white/80">Chat with Alex, your editor</p>
            </div>
          </div>
          <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold">Message</button>
        </div>
      </div>

      {/* Bottom Navigation Bar (iOS Style) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
        {[
          { label: "Overview", icon: "dashboard", active: true },
          { label: "Assets", icon: "folder_open" },
          { label: "Messages", icon: "forum" },
          { label: "Invoices", icon: "payments" },
        ].map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center gap-1 ${item.active ? "text-primary" : "text-slate-400"}`}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className={`text-[10px] ${item.active ? "font-bold" : "font-medium"}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
