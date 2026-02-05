import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function EditPost() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark text-white font-display">
      <TopAppBar
        title="Edit Post"
        leftAction={<span className="material-symbols-outlined">close</span>}
        rightAction={
          <div className="flex items-center gap-3">
            <p className="text-[#9db9a6] text-sm font-bold leading-normal tracking-[0.015em] shrink-0 cursor-pointer">Preview</p>
            <button className="bg-[#13ec5b] text-[#102216] px-4 py-1.5 rounded-lg text-sm font-bold">Publish</button>
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="px-4 pt-6">
          <div className="w-full aspect-video rounded-xl bg-[#1c271f] border-2 border-dashed border-[#3b5443] flex flex-col items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[#9db9a6] text-3xl">add_photo_alternate</span>
            <p className="text-[#9db9a6] text-sm">Add Featured Image</p>
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-4 px-4 py-6">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-xs font-semibold uppercase tracking-wider pb-2 text-[#13ec5b]/80">Title</p>
            <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-[#13ec5b] border-none bg-[#1c271f] h-14 placeholder:text-[#557760] p-4 text-xl font-bold leading-normal" placeholder="Enter post title..." defaultValue="Top 5 Creator Tools for 2024" />
          </label>
        </div>

        <div className="px-4">
          <p className="text-white text-xs font-semibold uppercase tracking-wider pb-2 text-[#13ec5b]/80">Content</p>
          <div className="flex flex-col border border-[#3b5443] bg-[#1c271f] rounded-lg">
            <div className="flex border-b-0 p-[15px] pb-0">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb0vricHaHAI1nhEbWBDzwJ6OPXFXrGVA6ribC4Laxl5h2NiGOu7RoKSdb8l4-n477-9jHdLPtGY7JQUnqpvxfXTugxb3-yFoTskJWEP4C_6LEx0ry7rxlp6KTlrbUdmfExrHhKQ5kbJ-LWRsIVw1Nm-IjE_Sr6Nfd3ntx8KHOnQygIqZpzclmWxrO7FQGzmX5ZWZe5p2U0z6VF51HbFWM-xMFb6cURuJf_maH4IY_mV7lBKlU4yBu-hYf5qJ4UkcA8k33OQuuCnhK")' }}
              ></div>
              <div className="flex-1 px-3 flex items-center">
                <span className="text-[#557760] text-xs italic">Drafting as Alex Rivera...</span>
              </div>
            </div>
            <textarea
              className="w-full min-h-[300px] bg-transparent border-none focus:ring-0 text-white p-[15px] text-base font-normal leading-relaxed resize-none"
              placeholder="Type / for commands or start writing..."
              defaultValue={`The creator economy is evolving faster than ever. To stay ahead, you need the right stack of tools. Here are my top picks for this year...

[Drag affiliate widgets below to insert]`}
            ></textarea>
            <div className="flex border-t-0 p-[15px] pt-0">
              <div className="flex items-center gap-4 flex-1 justify-between">
                <div className="flex items-center gap-1">
                  {["format_bold", "format_list_bulleted", "image", "link", "add_circle"].map((icon, idx) => (
                    <button key={idx} className="flex items-center justify-center p-1.5 hover:bg-[#28392e] rounded">
                      <span className="material-symbols-outlined text-[#9db9a6] text-[20px]">{icon}</span>
                    </button>
                  ))}
                </div>
                <div className="text-[#557760] text-xs">242 words</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 pt-8">
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Affiliate Widgets</h3>
          <span className="text-[#13ec5b] text-xs font-bold uppercase cursor-pointer">View All</span>
        </div>

        <div className="flex overflow-x-auto no-scrollbar">
          <div className="flex items-stretch p-4 gap-4">
            {[
              { name: "Shure SM7B", price: "$399.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHepHzi5Xfo6I3oCkLJ7wPt2kuGORPIB0bgA-tefnF4ZQ1KEdVXgngFX9DYTER_gWPVx4CV6aWwGQnphK9B7ELxMecFinFkd5efL0ESGOq2lnU7G71Q5_VEs6FAx77J5qC9rzduRf0ecHrqpv59_RD56_AR8Oy-mzkx7mBjG5EA81ofFb0BXlHCOTrchhq5KKn1giH4ztcMgEvGTlnQi6pzcMjDv190WcEGKn-KHuT1CZGhel4F0s4M4vXO_wrZONtrYp_JfJfwHGg" },
              { name: "Elgato Key Light", price: "$199.99", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJrXC67ZteGoI1iLvV7phfgPRRPO0dBQAhLJm4zP9c84qVLLjKpRTbXRzSdCHI5i_3rj55FjFV6ZXiiuBZauCUQZGtUdcFCBDoyLRBvULiD3yHDLN2jEecLrFeeMO_2nSeE_v6BEmjfzMj5f0p1eeSU3PwJXTSFJgmiYJZoA7hVGtSAWlIatzO0lgvLR32tGGMbiajvm_Fw6aV-IcmxjHdPDNZAhkSK4sx8RQjlthR7CVfxu2t7849KAUjVV_yrUJEwAMIOVaYzlmn" },
              { name: "MX Master 3S", price: "$99.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0yJo8rIIEhrZrbNiT-3HuNPOoX0_YYxT9uNdDenQwMP0_CR8rYpxk_FugucE2v7XzPT_LyCagACvP5UNMyXrv2PEE8fDAxqWotZCvQOvhQBgs-Qg8JgRdgAHe5QeitofwDm9tG3NWy2oKs5Uu0hRqNe8jET1kWK9FsKqdp3FaGR1cgJv8cEOycDoT_dE6oKXy42wIpQwr7tod_FK1012tXWUBYDzViLimVzocH7ltib0qNOdtprK5_9srqpRbGxPB5PXUKQZNC7_s" },
            ].map((w, idx) => (
              <div key={idx} className="flex h-full flex-col gap-3 rounded-xl bg-[#1c271f] border border-[#3b5443] shadow-lg min-w-44 w-44">
                <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-xl" style={{ backgroundImage: `url("${w.img}")` }}></div>
                <div className="flex flex-col flex-1 justify-between p-3 pt-0 gap-3">
                  <div>
                    <p className="text-white text-sm font-semibold truncate">{w.name}</p>
                    <p className="text-[#13ec5b] text-sm font-bold">{w.price}</p>
                  </div>
                  <button className="flex w-full items-center justify-center rounded-lg h-9 px-3 bg-[#28392e] text-white text-xs font-bold tracking-[0.015em] hover:bg-[#13ec5b] hover:text-[#102216] transition-colors">
                    <span className="truncate">Add to Post</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pb-20 space-y-6">
          <div className="border-t border-[#1c271f] pt-6">
            <h3 className="text-white text-lg font-bold mb-4">Post Settings</h3>
            {[
              { icon: "search", title: "SEO Metadata", sub: "Configure search engine preview" },
              { icon: "category", title: "Categories & Tags", sub: "Tech, Reviews, Creators" },
              { icon: "visibility", title: "Visibility", sub: "Public, Members Only" },
            ].map((s, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-[#1c271f] rounded-xl mb-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#13ec5b]">{s.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{s.title}</p>
                    <p className="text-xs text-[#9db9a6]">{s.sub}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#557760]">chevron_right</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#1c271f]/80 backdrop-blur-md border border-[#3b5443] h-14 rounded-full flex items-center justify-around px-6 shadow-2xl">
        {["edit", "format_size", "shopping_bag", "settings", "more_horiz"].map((icon, idx) => (
          <span key={idx} className={`material-symbols-outlined ${idx === 0 ? "text-[#13ec5b]" : "text-[#9db9a6]"}`}>{icon}</span>
        ))}
      </div>
    </div>
  );
}
