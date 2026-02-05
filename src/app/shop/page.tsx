import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { SearchBar } from "@/components/ui/SearchBar";

export default function Shop() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden text-white">
      <TopAppBar
        title="Unified Shop"
        rightAction={
          <button className="relative flex items-center justify-center p-0">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute top-0 -right-1 flex h-2 w-2 rounded-full bg-primary"></span>
          </button>
        }
      />

      <main className="pb-24">
        {/* SearchBar */}
        <div className="px-4 py-3">
          <SearchBar placeholder="Search products, presets, merch..." />
        </div>

        {/* Filters/Chips */}
        <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary px-4">
            <p className="text-white text-sm font-semibold leading-normal">All Items</p>
          </button>
          {[
            { label: "Digital", icon: "expand_more" },
            { label: "Physical", icon: "expand_more" },
            { label: "Price", icon: "tune" },
          ].map((filter, idx) => (
            <button key={idx} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white/5 px-4 border border-white/10">
              <p className="text-white/70 text-sm font-medium leading-normal">{filter.label}</p>
              <span className="material-symbols-outlined text-sm">{filter.icon}</span>
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between px-4 pt-4">
          <h3 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Featured Products</h3>
          <span className="text-primary text-sm font-semibold">See all</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 p-4">
          {[
            { title: "Cinematic Presets V2", cat: "Adobe Lightroom", price: "$24.00", type: "Digital", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz0SogEAgc-x_NCaoYTR-9iepw0-GpbzVKqF3v5KZaFkNyTg5ExneDGM0Bywzj8nM0YGEpw0nsKjpbFa6HzShlcNV1DK3n3vq4A476J3dGBS2vpEby9YFJ_73U-smua-Zpo6isQJlMRZRbBx7OAMoL3OWqu3_X2jLztGpFpN-xAqfTKVASSwb0cOPzZYR3ShAYuGgGpwVd5siP86oyFG-VqdFYu2mFp69oy1OpruLhrwkX3KoCcn8uyVlF8Oyn34gqcDB_xPTrkyiY" },
            { title: "Heavyweight Creator Hoodie", cat: "Apparel", price: "$65.00", type: "Physical", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkYNPDSQldBey412lspBRTCNnpebquSzBPQGFK8nSHmlPPZwtuSZYR4VCYbmGkh-uNwUu_wanvOevIhEWcwIVpjtvb3jIuUzsWxl-RJiMLsevbxW3ZrNBrOJcd8c6cDEtdFzfYJxuOVfkRxwWgASehoyzDp5W9cgPG46L8wCnt37nrbPOEeFjLvq-9O4L8jG7_ANVHlxpHSR5KGI0Bh-YJbJi_woa7d_G05pikZR8RDLuyZ932qplCK_63RMsaqNgaayFm9h13j6eW" },
            { title: "Ultimate Planner Notion", cat: "Templates", price: "$19.00", type: "Digital", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbddB05xMkzEQpom2BH-6DJduLkh-IMbQfeW6zFm3CxR980qjtMD_hvQIHoMYtPToQmZBBGhMUn0zCBjwLZ9XOgw2nKH6nJv6mklStwqwokyG5ZijFXYI3t7eBw0piIv8epJtw4L7OyjGBg3Li3XuiZBKpUbZoAPBmTSposWtww8zkWfhfY9gG0lInCVmIo966EKbM0fvEQ0h0Ky5x_Bv-gSjjqOofXIpT2Ht_4z53O7bVSDxnmaCUvALBs8rWtzFWPCvpCgcBsH-A" },
            { title: "Pro Filter Set (82mm)", cat: "Tech Gear", price: "$120.00", type: "Physical", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvDSTr-i3MNIDpz9gsxJ_R9hSF_T5Whr5o09uxC94vIfk0oZtWD4n_lwmjDLudTh6gzAHepHwDm7pStd2vP50McNRb6zxLzqa5IX5nGK8YYcOL2QdbxfsbdDrjQybcdFvxhg4ve1DLdTIOQgkriWvQElN9V6sPzWYTyE_OpQq4bkrFAehSStbUaZOZ-ucE5s7CFiqpYEzAdV8TOPnoOyPWTGG7zWGndxZx8Vs3I3oxDAU9ET_21aTd5qFkilmZ6tfMpCA8D661n5Fr" },
          ].map((product, idx) => (
            <div key={idx} className="flex flex-col gap-3 group">
              <div
                className="relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-3 aspect-[4/5] overflow-hidden transition-transform group-active:scale-95"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url("${product.img}")`,
                }}
              >
                <span className={`absolute top-2 left-2 backdrop-blur-md text-[10px] uppercase font-bold px-2 py-1 rounded text-white border border-white/20 ${product.type === 'Digital' ? 'bg-primary/80' : 'bg-white/20'}`}>
                  {product.type}
                </span>
                <button className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                </button>
              </div>
              <div className="flex flex-col gap-1 px-1">
                <p className="text-white text-sm font-bold leading-tight line-clamp-1">{product.title}</p>
                <div className="flex items-center justify-between">
                  <p className="text-white/60 text-xs font-medium">{product.cat}</p>
                  <p className="text-white text-sm font-bold">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SectionHeader: Categories */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Browse by Category</h3>

        {/* ImageGrid for Categories */}
        <div className="grid grid-cols-2 gap-3 p-4">
          {[
            { title: "Software & Presets", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq1pZHkBnoSIY8d48bc_v9duN6r0hYU1f9iAnFJUHooDhG-uHMGnLG33Gu210LrOlT7LBlBi7E6GcNqR8RLM2Jn3d_4QP4w47v83qfNhCSb6raYet5BKd-0IjI2TmXxTQMN_F7ptO8boZG8bDG554aGqlPCuGZLgep_nJ2Dapm8b0QM8L-fZrv_8BLw8XMgisH8CwqfBEXHXI9BoDKem0yE0mLNJtpxuc3Xjz-MZ1qgx9VyK5-2YEpxh0JVZgTBIW2TwuQggxXe0CV" },
            { title: "Gear & Tech", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIwo-PGXhvaFhQkpgrQ5tGhPXxGjQlVvqTwGaPB-OKiEJ_vWTN5odoeXua95bo5LLXuisana-x1ogKi85GNIlmRc05bgoQiidX_gpuc4XhABzJ-SW9hNtzCHwljqbBsvv3FaO_ck0x5m49aAaszXRM0qNZ69UuzPO6IxZB7rw9bAs407hA2EQTOTCf32TRrhR9TUFTWSRrgvexIDquL_IA6AUFKmahddYYx9nNYZQKj-PiyerskUO6uVL55YsSee2JJfMTyxzlJR1_" },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square border border-white/5"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url("${cat.img}")`,
              }}
            >
              <p className="text-white text-base font-bold leading-tight w-4/5">{cat.title}</p>
            </div>
          ))}
        </div>
      </main>

      <BottomNav
        items={[
          { label: "Shop", icon: "storefront", active: true },
          { label: "Services", icon: "grid_view" },
          { label: "Content", icon: "video_library" },
          { label: "Profile", icon: "person" },
        ]}
      />
    </div>
  );
}
