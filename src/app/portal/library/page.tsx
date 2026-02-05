import React from "react";
import { SearchBar } from "@/components/ui/SearchBar";

interface LibraryItem {
  name: string;
  date: string;
  img: string;
  type?: string;
}

interface LibrarySection {
  title: string;
  count: string;
  items: LibraryItem[];
}

export default function DigitalLibrary() {
  return (
    <div className="relative flex flex-col w-full max-w-[430px] mx-auto bg-background-light dark:bg-background-dark min-h-screen text-white overflow-x-hidden font-display">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-[#13ec5b]/10">
        <div className="flex size-12 shrink-0 items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#13ec5b]"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgAd0WFUcPr2BDrS2zCXgvjHeM4WhXHzHuxgAGCtJqmBE28aOp3wQbytb6XZn6QrCKzurySRKme0ET2duivH2ZV_a4FpfwuOon3N5QEoApMXRPujFEn-MPCAlVFgnzWMim2gfMkyVDwKO1vRRgl5OtMQETlurcKMVk2OIT5WuV113U9Fz11MpsB3BugLvZQn965T_4yWP4kjjOp64QmblSZcLrTaFoyJGb3cplr2tRYArJ5IjtQuJ1GGBkOAiLNxBi0c0-4oK7LXbQ")' }}
          ></div>
        </div>
        <div className="flex-1 px-3">
          <p className="text-xs text-[#9db9a6] font-medium uppercase tracking-wider">Creator Hub</p>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Welcome back, Alex</h2>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-[#13ec5b]/10 hover:bg-[#13ec5b]/20 text-[#13ec5b] px-4 py-2 rounded-full text-sm font-bold transition-colors">
            Shop
          </button>
        </div>
      </header>

      <main className="pb-24">
        {/* SearchBar */}
        <div className="px-4 py-4">
          <SearchBar placeholder="Search your digital assets" />
        </div>

        {/* Chips / Filter */}
        <div className="flex gap-3 px-4 pb-2 overflow-x-auto no-scrollbar">
          <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#13ec5b] px-6">
            <p className="text-[#102216] text-sm font-bold leading-normal">All</p>
          </div>
          {["Video Assets", "Presets", "Boilerplates"].map((chip, idx) => (
            <div key={idx} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#1c271f] border border-white/5 px-4">
              <p className="text-white text-sm font-medium leading-normal">{chip}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        {(
          [
            {
              title: "Video Assets",
              count: "4 Items",
              items: [
                {
                  name: "Cinematic LUTS Pack",
                  date: "Purchased Oct 24, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMMigcUSaB5NU7w_ye9F9AjGEXxxW0yUt2hF777jrcmU0GTdq4rpnF5rsiXcHkxlNdqcw-S5JN6G54-jOU3koNDu3gWcf2gAVrriFTzRoYWkqbi8BfTokZZajP4unX85LgHzwbQak0VtoiOcQQYggcUhSvDjsGabswRYEacooyUzVIdwyZ_aEBi4UQSp_9Bh7DIXER5u_y_hyKqY5WiA8om1GD_Us_pxxsJ1IxVXbxO0CU26Bwt1bqpkkNyj1U7wCOZQA-KyQlKvSz",
                },
                {
                  name: "4K Overlay Transitions",
                  date: "Purchased Sep 12, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSNXhnDHlsW2_4wjoh7h2f-bG60hnqmPVfoBDRaSdLWWE3_jMK1wUQkanOzKv0j3VRN7hcZIm-yvz20KKoGt2WGUVABw-GLBITrmcEOzJeqNqjEB9FuQAlr8G4PDzLbIGIfkqi2q1awKMGEjZ5qn2oCNnZKtbwIs3AgolzNMswTIfbislmnWAqaoFmQbWXiAlrYkglbMYeFkviQduhIcaZUCUpUyATP-6uSzpMNcyKXNqy50RENS85IFhBHA19RFTOXC3rz6KuFOVd",
                },
              ],
            },
            {
              title: "Presets",
              count: "12 Items",
              items: [
                {
                  name: "Portrait Pro Lightroom",
                  date: "Purchased Nov 02, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjU5xhfU0hziYdzq-MX3mfLTbP5IaFCqV_nuTLw7Rqdq1o0HMuBc8SgAa3kXRNyOeUlEwhvtUFrxCHwq2u2UU49hBju7GyuS4OLgRQdFc-WG8B0SdfyVzJHVZa7BQTjtFI0d62oySksVBIILLkrUu0Q7bSwHmR8ETVYu7yNXJv--ssH-SpTIMJI1wzjqIUJoQMYlZCuY50gOd5sQm9XWtSii4oP_wo9VVp5I6q-Rgp5dNvFk0iVGx7SN6mX7z5kK1M-k-V9M_kYrZN",
                },
              ],
            },
            {
              title: "Code Boilerplates",
              count: "2 Items",
              items: [
                {
                  name: "Next.js SaaS Starter",
                  date: "Purchased Dec 15, 2023",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_XPrS3e2R0mIl6qpGdHh4j6J6Mxx-bk61R4cTy8Ao5JglpbWsi02e6eJypWJTF_jLc32NnpRJlUzt0Ecodj8htKSvbQTY15Gc6071ZJTfT2r0691pRg0HXXTFGScVK_VN-iVgwiwZY4ZWko-KUbNq284BGEF8uK5upEdOh2ktlGomSe7u-IYhXlPFtlkLOC-RZsNnx7_SgUIfrx0I6iQ6C_NW942PPZU7XiOPXGBaadM4kSs3_eUJIKNIOvdW_QLVESZiMw99mpEM",
                  type: "code",
                },
              ],
            },
          ] as LibrarySection[]
        ).map((section, sidx) => (
          <section key={sidx} className="mt-4">
            <div className="flex items-center justify-between px-4 pb-1">
              <h2 className="text-white text-xl font-extrabold leading-tight tracking-[-0.015em]">{section.title}</h2>
              <span className="text-[#13ec5b] text-xs font-bold uppercase">{section.count}</span>
            </div>
            <div className="p-4 space-y-4">
              {section.items.map((item, iidx) => (
                <div key={iidx} className="flex items-stretch justify-between gap-4 rounded-xl bg-[#1c271f] p-4 border border-white/5 shadow-xl">
                  <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-base font-bold leading-tight">{item.name}</p>
                      <p className="text-[#9db9a6] text-xs font-normal leading-normal">{item.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-[#13ec5b] text-[#102216] gap-2 text-sm font-bold leading-normal w-fit">
                        <span className="material-symbols-outlined text-[18px]">
                          {item.type === "code" ? "terminal" : "download"}
                        </span>
                        <span className="truncate">
                          {item.type === "code" ? "Clone" : "Download"}
                        </span>
                      </button>
                      {item.type === "code" && (
                        <button className="flex size-9 cursor-pointer items-center justify-center rounded-lg bg-[#28392e] text-white">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    className="w-32 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-none border border-white/10"
                    style={{ backgroundImage: `url("${item.img}")` }}
                  ></div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-background-dark/80 backdrop-blur-lg border-t border-white/5 px-8 py-3 flex justify-between items-center z-20 pb-8">
        {[
          { icon: "home", label: "Home", active: false },
          { icon: "inventory_2", label: "Library", active: true },
          { icon: "shopping_bag", label: "Shop", active: false },
          { icon: "settings", label: "Settings", active: false },
        ].map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center gap-1 ${item.active ? "text-[#13ec5b]" : "opacity-50"}`}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}
