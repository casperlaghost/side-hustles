import React from "react";

export default function GlobalSettings() {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden pb-24 font-display text-slate-900 dark:text-white">
      <div className="sticky top-0 z-20 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col">
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Global Settings</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Manage your creator platform</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <p className="text-emerald-500 text-xs font-bold leading-normal tracking-[0.015em] shrink-0 uppercase">Healthy</p>
        </div>
      </div>

      <div className="sticky top-[60px] z-10 bg-background-light dark:bg-background-dark">
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-4 gap-6 overflow-x-auto no-scrollbar">
          {[
            { label: "General", active: false },
            { label: "Branding", active: true },
            { label: "Integrations", active: false },
            { label: "Payments", active: false },
          ].map((tab, idx) => (
            <a key={idx} className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 whitespace-nowrap ${tab.active ? 'border-primary text-primary' : 'border-transparent text-slate-500 dark:text-slate-400'}`} href="#">
              <p className="text-sm font-bold leading-normal">{tab.label}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-8">
        <section className="space-y-4">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Branding</h3>
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <div className="flex items-center gap-4 px-4 min-h-16 justify-between border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">image</span>
                </div>
                <p className="text-slate-900 dark:text-white text-base font-medium">Logo Upload</p>
              </div>
              <button className="flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">upload</span>
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Primary Color</label>
                  <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="size-6 rounded bg-primary shadow-sm border border-white/10"></div>
                    <span className="text-sm font-mono text-slate-600 dark:text-slate-300">#135BEC</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Secondary Color</label>
                  <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="size-6 rounded bg-slate-400 shadow-sm border border-white/10"></div>
                    <span className="text-sm font-mono text-slate-600 dark:text-slate-300">#9DA6B9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 min-h-16 justify-between border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">font_download</span>
                </div>
                <p className="text-slate-900 dark:text-white text-base font-medium">Font Family</p>
              </div>
              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <span className="text-sm">Inter</span>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4 pb-24">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Integrations (API)</h3>
            <span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary font-bold uppercase">Advanced</span>
          </div>
          <div className="space-y-4">
            {[
              { label: "STRIPE SECRET KEY", val: "", placeholder: "sk_live_••••••••••••••••", type: "password", visible: false },
              { label: "SUPABASE URL", val: "", placeholder: "https://your-project.supabase.co", type: "text", visible: true },
              { label: "SUPABASE ANON KEY", val: "", placeholder: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", type: "password", visible: true },
              { label: "PRINTFUL API TOKEN", val: "", placeholder: "pf_token_••••••••••••••••", type: "password", visible: false },
              { label: "RESEND API KEY", val: "", placeholder: "re_••••••••••••••••", type: "password", visible: false },
            ].map((field, idx) => (
              <div key={idx} className="space-y-2">
                <label className="text-slate-500 dark:text-slate-400 text-xs font-bold px-1 uppercase">{field.label}</label>
                <div className="relative group">
                  <input className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all pr-12 text-slate-900 dark:text-white" type={field.type} defaultValue={field.val} placeholder={field.placeholder} />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary">
                    <span className="material-symbols-outlined text-xl">{field.visible ? 'visibility' : 'visibility_off'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-30">
        <div className="flex gap-3">
          <button className="flex-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-3 px-4 rounded-xl text-sm hover:opacity-90 transition-opacity">
            Discard
          </button>
          <button className="flex-[2] bg-primary text-white font-bold py-3 px-4 rounded-xl text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
