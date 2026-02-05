import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function CaseStudy() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden text-white font-display">
      <TopAppBar
        title="Case Study"
        leftAction={<span className="material-symbols-outlined">arrow_back</span>}
        rightAction={<span className="material-symbols-outlined">share</span>}
      />

      <div className="p-0 sm:px-4 sm:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-background-dark sm:rounded-lg min-h-[400px] relative"
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(16, 34, 22, 1) 0%, rgba(16, 34, 22, 0.4) 50%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIHJ1MdvO6LluENSMiUNBzKuufU7Z1x2ZG7eR4FazHiFsf1q5O6H8U1EOxJ81cB5NOC5_kpcg4YjMWFMqWLEWUC_J95g7WUjFKEDfh8P-XE_BZWLL643QCLoUKea-AtwC0ydoxm10EQZsLHHla1op4owhimyBwUEiFkM7yglHCOQB7hyvs73Xp14kJdZgGEdqbUzGfa31FIY8jj2orbuOAGCAb2tdTXTVr5PNIs53ctdc7dh9kvm7t45gNlV-cJtsfFBwsCVo7L6ug")'
          }}
        >
          <div className="flex flex-col p-6 gap-2">
            <span className="bg-[#13ec5b] text-[#102216] text-xs font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest">Featured Work</span>
            <p className="text-white tracking-light text-[32px] font-extrabold leading-tight">Nexus Ecosystem Rebrand</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 p-4">
        {[
          { label: "Client", val: "Nexus Labs" },
          { label: "Service", val: "Full Identity" },
          { label: "Timeline", val: "8 Weeks" },
          { label: "Result", val: "+120% Conversion" },
        ].map((stat, idx) => (
          <div key={idx} className="flex min-w-[160px] flex-1 flex-col gap-1 rounded-xl p-5 bg-[#13ec5b]/10 border border-[#13ec5b]/20">
            <p className="text-[#13ec5b]/70 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
            <p className="text-white text-lg font-bold">{stat.val}</p>
          </div>
        ))}
      </div>

      <h2 className="text-white text-[24px] font-bold leading-tight tracking-[-0.015em] px-4 pt-8 pb-2">The Challenge</h2>
      <p className="text-white/80 text-base font-normal leading-relaxed px-4 pb-4">
        Nexus Labs faced a critical identity crisis. As they transitioned from a hardware startup to a multi-service creator platform, their legacy branding felt fragmented and outdated. They needed a cohesive visual language that spoke to both high-end developers and independent creators.
      </p>

      <h2 className="text-white text-[24px] font-bold leading-tight tracking-[-0.015em] px-4 pt-6 pb-2">The Solution</h2>
      <p className="text-white/80 text-base font-normal leading-relaxed px-4 pb-6">
        We developed an &quot;Atomic Design System&quot; that allows for infinite scalability. The new identity centers around a &apos;Liquid Neon&apos; palette that adapts its intensity based on the content type—subtle for professional tools, vibrant for creative content.
      </p>

      <div className="grid grid-cols-2 gap-2 px-4 pb-8">
        <div
          className="aspect-square bg-gray-800 rounded-lg overflow-hidden border border-white/10 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAS4z15nZt2fN9TRkq6q4i80ld3q62LRMR7whkkXHyi4nkF8xuQ5TG1mMFC9eWrPF60w3runtoEo0nBWIISo2TmetYsH1StYpvmEZA9oQ11BATNedJb45Zk3Qk8DlltJfY39ACnzOCOIAf-3sq4Pj7fKQIWP_WZQCsj0PiwFRnPgdT6gfj80_mNcGExgftxew9Z4LymNnf8b_i2OsnZZw710rxGxIiT5jlXBRgnjhx4scqL2qy9LFpN97sNnlqzOsYC-xPVvMZYJeFQ")' }}
        ></div>
        <div
          className="aspect-square bg-gray-800 rounded-lg overflow-hidden border border-white/10 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoYi8WKnGdbjQC1nAmDyxUgYthkE3W2cxYlGeih6_RrXSQOXZhRyPAoyKcX6aWRW_YuOFkuEA42NeYBh2PICl-S7OXSVMg8-XC5XzFF_TDxMLrxs4Ag2a-naZkoLa9rG_coEcZLuGaPRyX7aCTwkNfkvjjE3uhzPdnblxvP-aSzl-Vnn9mA8hnVr1mUQjm9_9BPKasXYr5_x1ye7-ZD576V-fEARcU9n6F7J6Eaj1Y1HhL8HyIR5MQesxp9Oidw3OYw_4QaUhuQejz")' }}
        ></div>
        <div
          className="col-span-2 aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden border border-white/10 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCl-b6Nedf17RAvNDmy5i2rEum5IwNEg98JE0ioH93Dw6k3n9AoPpV-fQ8PA4cP1myFqMNqdOZl1lNtyB8vOueEUZdpTniJPsNWNv5k9euvZQxNXhAxVAxFHsFc2SHDH2gUouUdHnLAJNMqPzvH1s2y9YFbXj9dTF7fWjXLbywZOo4FICKuAmxkX_y0xiBOAt4FFkaQ5TvqD2lz3i91h60bsCwY34lSWBND5SKA9fmHdbw7qm75w0S0G6Abgb59LX0OKL1ZSkxBBFnf")' }}
        ></div>
      </div>

      <div className="px-4 pb-10">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlA19qCu9zg59Kqp0EfsoGbWUhPdmfi9ch1lVV6ZYi0w6ZJoy6L1GIx679CPm0Ihw_jrtAeECx3m2cmS3JwGhXsuVkgNypc6T58OYsZKrw6vSD_r4EIa3Iv9X4zdOjFuTLu7t9JpHf8D0-gfYYhBtnHCSs-MHYs2h8jWhNLgOHVg6G3NYGPAFshkiJHWoQHFfSfCsbKYiSFlCmvFY5Cp3zZKP56QUDM2hdiUg_XsPrA38GMIuZdH9WaWOrQcKBMw1WsykvaVCCHoHU")' }}
          >
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">BEFORE</div>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ clipPath: "inset(0 0 0 50%)", backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbf_65Exj5o36B_yjhLxVrTwnEB2Y6EaRiHzDawL8Pt0UjJx56Dg-jVWgybBRkmps9HoGAgU3CuikK-vqKUj-mDkMDBfUIcvpjLzNaUqijKUTf38tqaCqx6QqAvq8t08OHfoW2hk7_Tgre4eX86EWMuA5nZuvFFQq0mviZjwOwBWM9vqlwXf95nxlYT3iE1onCro4LvolbP97v-yqSunGzWQ5bx9mOo91qBDptqL5mycJFgPjQ1VgbAahyuqQgwmY1U_lHlkvVqeZh")' }}
          >
            <div className="absolute top-4 right-4 bg-[#13ec5b] text-[#102216] px-3 py-1 rounded-full text-xs font-bold">AFTER</div>
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#13ec5b]/50 backdrop-blur-sm -ml-0.5 flex items-center justify-center">
            <div className="size-8 rounded-full bg-[#13ec5b] flex items-center justify-center shadow-lg shadow-[#13ec5b]/40">
              <span className="material-symbols-outlined text-[#102216] text-sm">unfold_more</span>
            </div>
          </div>
        </div>
        <p className="text-center text-white/50 text-xs mt-3 italic">Drag to compare brand evolution</p>
      </div>

      <div className="px-4 pb-10">
        <div className="bg-gradient-to-br from-[#1a2e1e] to-background-dark p-8 rounded-2xl border border-[#13ec5b]/20 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-40 bg-[#13ec5b]/5 blur-3xl rounded-full"></div>
          <span className="material-symbols-outlined text-[#13ec5b] text-5xl opacity-30 mb-4">format_quote</span>
          <p className="text-white text-lg font-medium italic leading-relaxed relative z-10">
            &quot;The results were immediate. Not only did our user engagement skyrocket, but our team finally has a brand they are proud to showcase. A masterclass in modern identity.&quot;
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="size-12 rounded-full bg-gray-600 overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNJCIle9UeQd-nGJk50pZuclQNCAAE2vCQ2p5-ahXdbOPKjH8mFr6o5Ae0QqhiYqwythgjNJT2B2A9iOUEm2yN-E7TcBzFA7p5MtQzDbAtKh8WArXetoj0xwwTo7oqlaOaFgKfxfewt1--uxVE563zFUnh5uua0-33npJsnPCEz7xrqqOQmAupH5m21PWzOo0KXP-vf6jC4Hnus82MjOnr2t8SCWE5xdipoFuc-tnrPoRwnzBDvSR-4ifE7d5sNRltYtOKkfGbcayL" alt="Sarah Chen" />
            </div>
            <div>
              <p className="text-white font-bold">Sarah Chen</p>
              <p className="text-[#13ec5b]/70 text-sm">CEO, Nexus Labs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-20">
        <button className="w-full bg-[#13ec5b] text-[#102216] font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-[#13ec5b]/20 active:scale-95 transition-transform">
          <span>Book a Similar Project</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <p className="text-center text-white/40 text-xs mt-4">Next available slot: October 2024</p>
      </div>
      <div className="h-8"></div>
    </div>
  );
}
