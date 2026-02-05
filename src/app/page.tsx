import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <TopAppBar
        title="Multi-Hustle"
        rightAction={<p className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0">Book</p>}
      />

      <main className="pb-24">
        {/* HeroSection */}
        <div className="p-0 sm:p-4">
          <div
            className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:rounded-lg items-start justify-end px-4 pb-10 sm:px-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(19, 16, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDMRRCd4Z0ajhTP0s4k9uZ4dDXNh4D5pPOvfPYoTN_WMwT48MDSNMuH8_VaqUi4gRzZ1mpDkgJ1mU45cK7XSUqaiYccn1SZ2rAmS2rd29rAmS2rd29rUpbSrQXkStkS8pVGU1jQzGHg890F6xzn5eRP7kdNmv75YQHRwiHYCnaCLZ_RN_SvXu96fSE4P4WhQ_qnWe_cNTqwwGffxZ6zOjbiL1EzqyWQdVlff5sJ0ycT8Mplv294AACW8F8ISgmMUSkw7P6pB1ou-gIOFqLox-7o")',
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                Scale Your Creative Business
              </h1>
              <h2 className="text-slate-200 text-sm font-normal leading-normal sm:text-base">
                High-end video editing, web development, and digital products for the modern creator.
              </h2>
            </div>
            <Button>Book a Service</Button>
          </div>
        </div>

        {/* SectionHeader: Services */}
        <div className="flex items-center justify-between px-4 pb-3 pt-8">
          <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Professional Services</h2>
          <span className="text-primary text-sm font-semibold">View All</span>
        </div>

        {/* TextGrid: Services */}
        <div className="grid grid-cols-2 gap-3 p-4">
          {[
            { icon: "video_camera_back", title: "Video Editing", desc: "High-end post production" },
            { icon: "code", title: "Web Development", desc: "Custom digital experiences" },
          ].map((service, idx) => (
            <div key={idx} className="flex flex-1 gap-3 rounded-xl border border-slate-200 dark:border-[#3f3b54] bg-white dark:bg-[#1d1c27] p-4 flex-col">
              <div className="text-primary">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">{service.title}</h2>
                <p className="text-slate-500 dark:text-[#a19db9] text-xs font-normal leading-normal">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SectionHeader: Portfolio */}
        <div className="flex items-center justify-between px-4 pb-3 pt-8">
          <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Featured Portfolio</h2>
        </div>

        {/* Portfolio Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar">
          {[
            { title: "Lumina App Design", cat: "Mobile Application", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLXXBIkAUiUZMemPyl3xwxIUQan-7dUaKTevdX39vQuEj57GFW9ZSFLMBdf0D8D-ad4OpZwMfrbD-Y1wWuxM5EL7M0Ad3dkg5hzFOOJYtKDRaAxUS-dgzcLEgnaa62DEfM5NtTxmQ3W7nmxnUQ6S0JFwDoicK2TQTMEGMzGfl5z2xPeO_j0WJAaD4LwQnMJR8B73PVMyJci5SuXYm8N4VHH5xxq8noNkFiy39DeYYsMdUCk3fgA5DxDb3KvuXHkWAE3N545IZTXaQA" },
            { title: "Apex Brand Film", cat: "Video Production", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcaHeXaA5nM3aErpqax3V9WUlT9kCl7_w0mV7rnum8_T5_rhl1CQLhZto-UmyaSvfZnB4ITdo2AGzqi0IfVfAWgCezl0Zp8PUudbSp2e2ZpsJEOxenWsvHxWGooy8eAcSTI_dcmAVj9DYChjkfrDVuhcFHlpCfJChBp6VR6xiUjdcvA17sVlkFay0eHJsjTq5Ynmud1Hn2fpp3lai7CHd_R2xC4lTLPTa5d4Fr4FGLDhYPxsLJWTo-V48OL-wHV0hqc9bMVtcFHBjx" },
          ].map((item, idx) => (
            <div key={idx} className="flex-none w-64 rounded-xl overflow-hidden bg-slate-100 dark:bg-[#1d1c27] border border-slate-200 dark:border-[#3f3b54]">
              <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url("${item.img}")` }}></div>
              <div className="p-3">
                <p className="text-slate-900 dark:text-white text-sm font-bold">{item.title}</p>
                <p className="text-slate-500 dark:text-[#a19db9] text-xs">{item.cat}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SectionHeader: Shop */}
        <div className="flex items-center justify-between px-4 pb-3 pt-8">
          <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Shop Products</h2>
          <span className="text-primary text-sm font-semibold">Shop All</span>
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-2 gap-4 px-4">
          {[
            { title: "Cinema LUT Pack", price: "$29.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaXaCe2UR5Q0ei6zItkaCaUZOreoLDR99-hn1kYbvSueQVHJumHK5e-W8LGEec6ClUcqvSwvkDR1Tp5UZLYf1QdU3tiFww40SHD8MBijMiHnfcRHHxmOmBYmrYnryaBGuSTbPv_oY3Z410WMiVpbSFcFXvS3QIXiYfMT5wuyUcQdnXWZR_DLcAL_sjTwMIFF0a2CuDBw0Hwyc1rYu-Pu108jpDtPhcdq0druVbS1rGyionK0ZQS-XJeKVitBEFo9Qr_tWUnq-61O8X" },
            { title: "Portfolio Template", price: "$49.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKiVaj7F9UO9yKQ3DT1d5cVOHeU79jAnTf-dn8rMRtEQqyp_HlUMqmVx4ekp-W928hRdfW40zLGgLr2E3z4wlZcZjtfLzQ-Hyss7fhQU5I29IIolI0t87D20JY-cziEKpsJYXxQ75oP7CzYar63bXgfDPxSDRMMW0BpT-ePhYJDjUcYuJJI7pMFM3Qgno81H-fFu4G4VVQ8eCseNec5J2fUlXBm-uF_xUhxV1eJ_ddX5DAfDhOYdLyPft4qpNyXlWa6HV0Xe4qC02H" },
          ].map((product, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div
                className="aspect-square w-full rounded-xl bg-slate-100 dark:bg-[#1d1c27] border border-slate-200 dark:border-[#3f3b54] bg-cover bg-center"
                style={{ backgroundImage: `url("${product.img}")` }}
              ></div>
              <div>
                <p className="text-slate-900 dark:text-white text-sm font-bold">{product.title}</p>
                <p className="text-primary text-sm font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SectionHeader: Blog */}
        <div className="flex items-center justify-between px-4 pb-3 pt-8">
          <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Latest from Blog</h2>
        </div>

        {/* Blog Feed */}
        <div className="flex flex-col gap-4 px-4 mb-12">
          {[
            { title: "How to optimize your workflow in 2024", info: "5 min read • Productivity", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfGXk24zpjBf0eCVB3mP0DfOsbLQRcl4BHs7r7VygRufZFVR8hZTYXrfFYAC5AatE1hmqP48aHZgGUwbwNAd4uoDrOJv4ENKWQfEAgy_WfZfyQ6jvWwkDY3N5J1RpKqcQvLne16GnwimVNddqTY7pfoX1hou_W9_ABHiT2P7VyMzXycUBVW3YdL0VYqM-bsXXDlIy-f7moDKkB0tU4ip5t-fEHI9gEOoJW7w6qPooMC047uz54UlpgSyhtUAl8IE7e_BWpDXzTHOyO" },
            { title: "The future of creator-led agencies", info: "8 min read • Business", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASBMZE2ITOhWsE4WLl99MSrJ3GOE9kqECJl6KmAg24HwXpoydSa7jf80ePPv2Hnf376JEriyOVpGynsN26Oqw20ktZMg5D2d786h0XnFhFe3IudQUdR0ngeFZF6GhyNZPxzCVqg7SU-DBC0aC16bOulePG-p2j1T2z5F5P1OBhVpop3DT3lZGmZ3pSMUFwwfz9o0uGLj9Xx73Qsvri4fNM1xwWl-FxZ8m8shwh26F3aTnwSPLuJL1Beopte_r1QzlV3dfiV1ACfIHJ" },
          ].map((blog, idx) => (
            <div key={idx} className="flex gap-4 items-center p-3 rounded-xl bg-white dark:bg-[#1d1c27] border border-slate-200 dark:border-[#3f3b54]">
              <div className="size-20 rounded-lg overflow-hidden shrink-0">
                <img src={blog.img} alt={blog.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">{blog.title}</h3>
                <p className="text-slate-500 dark:text-[#a19db9] text-xs">{blog.info}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav
        items={[
          { label: "Home", icon: "home", active: true },
          { label: "Shop", icon: "shopping_bag" },
          { label: "Services", icon: "grid_view" },
          { label: "Profile", icon: "person" },
        ]}
      />
    </div>
  );
}
