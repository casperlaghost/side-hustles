import React from "react";

export default function EmailCampaignBuilder() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-display overflow-x-hidden min-h-screen">
      <header className="sticky top-0 z-50 flex items-center bg-[#111318] p-4 border-b border-[#1c1f27] justify-between">
        <div className="flex items-center gap-3">
          <div className="text-white flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#1c1f27] cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <div>
            <h2 className="text-white text-base font-bold leading-tight tracking-tight">Summer Launch</h2>
            <p className="text-[#9da6b9] text-xs font-medium">Draft Campaign</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex text-[#9da6b9] text-sm font-bold hover:text-white px-3 py-1">Send Test</button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-colors">
            Launch
          </button>
        </div>
      </header>

      <nav className="bg-[#111318]">
        <div className="flex border-b border-[#1c1f27] px-4 justify-between">
          {[
            { label: "Design", active: true },
            { label: "Audience", active: false },
            { label: "Settings", active: false },
          ].map((tab, idx) => (
            <a key={idx} className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-4 flex-1 ${tab.active ? 'border-primary text-white' : 'border-transparent text-[#9da6b9]'}`} href="#">
              <p className="text-sm font-bold leading-normal tracking-wide">{tab.label}</p>
            </a>
          ))}
        </div>
      </nav>

      <main className="flex flex-col gap-0 pb-24">
        <section className="p-4 space-y-4">
          <div className="space-y-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#9da6b9] text-xs font-bold uppercase tracking-wider">Subject Line</label>
              <input className="w-full bg-[#1c1f27] border-none rounded-lg text-white text-sm focus:ring-1 focus:ring-primary p-3" defaultValue="New Summer Collection is Here! ☀️" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[#9da6b9] text-xs font-bold uppercase tracking-wider">Preheader</label>
              <input className="w-full bg-[#1c1f27] border-none rounded-lg text-white text-sm focus:ring-1 focus:ring-primary p-3" defaultValue="Get 20% off your first service booking today." />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-white text-xs font-bold uppercase tracking-widest px-4 pb-2 pt-6">Content Blocks</h3>
          <div className="flex gap-3 overflow-x-auto px-4 py-2 no-scrollbar">
            {[
              { icon: "title", label: "Text" },
              { icon: "image", label: "Image" },
              { icon: "shopping_bag", label: "Product" },
              { icon: "link", label: "Referral" },
              { icon: "smart_button", label: "Button" },
            ].map((block, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className="size-12 rounded-xl bg-[#1c1f27] border border-[#3b4354] flex items-center justify-center text-white cursor-grab active:scale-95 transition-transform">
                  <span className="material-symbols-outlined">{block.icon}</span>
                </div>
                <span className="text-[10px] text-[#9da6b9] font-medium uppercase">{block.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8">
          <h3 className="text-white text-xs font-bold uppercase tracking-widest pb-3">Email Canvas</h3>
          <div className="bg-[#1c1f27] rounded-xl overflow-hidden shadow-2xl border border-[#3b4354] relative">
            <div className="p-6 space-y-6">
              <div className="flex justify-center border-b border-[#3b4354] pb-4">
                <div className="h-6 w-32 bg-[#3b4354] rounded flex items-center justify-center">
                  <span className="text-[10px] font-bold tracking-widest text-[#9da6b9]">YOUR BRAND</span>
                </div>
              </div>

              <div className="flex flex-col items-stretch justify-start rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.3)] bg-[#111318]">
                <div
                  className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-t-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd0KrRURf6ffCN-nf7sNR83yJEBy-EJA5kq7pFsn61JX-aIU7mgHWC1efRuwRcitgN9_aLlsyZC7V2VGUPkeuz1WH1V_5rsJgkcLyACDnlrnKjQbNAAuBwY_lpJoSjlwruFerx0sijG_0hkd1uBTugimtibnAao_gPoiP9qbk6oQjHnti8I6Fx425ko9fKOZz5n8ts68Q_dPjqNHxgI6KwrKeSi17nkP9t8jrbudSNNc0x-u7gdEZr6OmFheWhT576Qt5wBwLbrJ7A")' }}
                ></div>
                <div className="flex w-full grow flex-col items-stretch justify-center gap-3 p-4">
                  <p className="text-white text-xl font-bold leading-tight tracking-tight">Join our exclusive workshop</p>
                  <p className="text-[#9da6b9] text-sm font-normal leading-relaxed">Limited seats available for the summer cohort. Elevate your creative business with our expert-led sessions.</p>
                  <button className="w-full flex items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold shadow-lg">
                    <span className="truncate">Register Now</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#111318] p-4 rounded-lg border border-dashed border-[#3b4354] flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="size-16 rounded-lg bg-[#3b4354] bg-cover"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBr2xQfBVEYRPtnFj1vcioD-CzhRy8MPmJgi9tlMe7aOAgTWRPKF1NHs5gZAobDClKM8MI4uCqh4izVt8jqgutLIBtkVXV-wqQGREJ7pU4FPW2TMEMb_vX5-zdHogmkwAmOcXItEhV48_dPZz-FS7kMTXvNiE_CIE9Oe3k8zlbvwNxsbbSO2-a-T-5Vdy6TaprLfR0fQaSiydV4kQ5webdCo9pRC-_h33PbOVcnbtj97ow6Ldhsrfb1kwBfyTcQn7y4dHBjZv-7jvbb')" }}
                  ></div>
                  <div className="flex-1">
                    <h4 className="text-white text-sm font-bold">Premium Consultation</h4>
                    <p className="text-primary text-sm font-bold">$120.00</p>
                  </div>
                  <div className="text-[#9da6b9]">
                    <span className="material-symbols-outlined">drag_indicator</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg text-center">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Give $10, Get $10</p>
                <p className="text-white text-sm font-medium">Share your referral link with friends</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-transparent pointer-events-none border-2 border-primary opacity-0 hover:opacity-100 transition-opacity">
              <div className="absolute top-2 right-2 flex gap-1 pointer-events-auto">
                <button className="size-8 bg-primary rounded shadow-lg flex items-center justify-center"><span className="material-symbols-outlined text-sm">edit</span></button>
                <button className="size-8 bg-[#1c1f27] rounded shadow-lg flex items-center justify-center border border-[#3b4354]"><span className="material-symbols-outlined text-sm">delete</span></button>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-8">
            <button className="flex items-center gap-2 text-[#9da6b9] hover:text-white transition-colors">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="text-sm font-bold">Add Custom Block</span>
            </button>
          </div>
        </section>

        <section className="p-4 bg-[#111318] rounded-t-3xl border-t border-[#1c1f27] mt-4">
          <h3 className="text-white text-base font-bold leading-tight pb-4">Audience Selection</h3>
          <div className="space-y-3">
            {[
              { label: "All Customers", count: "2,482 contacts", icon: "group", col: "primary", active: true },
              { label: "VIP Members", count: "156 contacts", icon: "star", col: "yellow", active: false },
              { label: "Service Clients", count: "843 contacts", icon: "calendar_today", col: "purple", active: false },
            ].map((item, idx) => (
              <label key={idx} className={`flex items-center justify-between bg-[#1c1f27] p-4 rounded-xl cursor-pointer ${item.active ? 'ring-1 ring-primary/30' : 'border border-transparent'}`}>
                <div className="flex items-center gap-3">
                  <div className={`size-10 rounded-full bg-${item.col}-500/10 flex items-center justify-center text-${item.col}-500`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">{item.label}</p>
                    <p className="text-[#9da6b9] text-xs">{item.count}</p>
                  </div>
                </div>
                <div className={`size-6 rounded-full border-2 ${item.active ? 'border-primary flex items-center justify-center' : 'border-[#3b4354]'}`}>
                  {item.active && <div className="size-3 rounded-full bg-primary"></div>}
                </div>
              </label>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-[#111318]/90 backdrop-blur-lg border-t border-[#1c1f27] p-4 flex items-center justify-between gap-4 safe-area-bottom z-50">
        <button className="flex-1 bg-[#1c1f27] hover:bg-[#252a35] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">schedule</span> Schedule
        </button>
        <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-lg">send</span> Launch Now
        </button>
      </div>
    </div>
  );
}
