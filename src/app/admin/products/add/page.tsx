import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function AddDigitalProduct() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto overflow-x-hidden border-x border-[#13ec5b]/10 bg-background-light dark:bg-background-dark text-white font-display">
      <TopAppBar
        title="Add Digital Product"
        leftAction={<span className="material-symbols-outlined text-white">close</span>}
        rightAction={<p className="text-[#13ec5b] text-base font-bold leading-normal tracking-[0.015em] shrink-0">Preview</p>}
      />

      <div className="px-4 pb-10">
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Product Info</h3>
        <div className="flex flex-col gap-4 py-3">
          <label className="flex flex-col w-full">
            <p className="text-white/80 text-sm font-medium leading-normal pb-2">Product Name</p>
            <input className="flex w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-[#13ec5b] border border-white/10 bg-white/5 h-14 placeholder:text-white/40 p-[15px] text-base font-normal" placeholder="e.g. Creator Masterclass" />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-white/80 text-sm font-medium leading-normal pb-2">Description</p>
            <textarea className="flex w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-[#13ec5b] border border-white/10 bg-white/5 min-h-32 placeholder:text-white/40 p-[15px] text-base font-normal resize-none" placeholder="Describe your digital product..."></textarea>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-white/80 text-sm font-medium leading-normal pb-2">Category</p>
            <div className="relative">
              <select className="appearance-none flex w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-[#13ec5b] border border-white/10 bg-white/5 h-14 p-[15px] text-base font-normal pr-10">
                <option disabled defaultValue="">Select category</option>
                <option value="education">Education</option>
                <option value="design">Design Assets</option>
                <option value="software">Software</option>
                <option value="music">Music & Audio</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-4 text-white/40 pointer-events-none">unfold_more</span>
            </div>
          </label>
        </div>

        <div className="h-px bg-white/10 my-4"></div>

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Pricing</h3>
        <div className="grid grid-cols-2 gap-4 py-3">
          <label className="flex flex-col flex-1">
            <p className="text-white/80 text-sm font-medium leading-normal pb-2">Standard Price</p>
            <div className="relative">
              <span className="absolute left-4 top-4 text-white/40">$</span>
              <input className="flex w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-[#13ec5b] border border-white/10 bg-white/5 h-14 pl-8 placeholder:text-white/40 p-[15px] text-base font-normal" placeholder="0.00" type="number" />
            </div>
          </label>
          <label className="flex flex-col flex-1">
            <p className="text-white/80 text-sm font-medium leading-normal pb-2">Membership Price</p>
            <div className="relative">
              <span className="absolute left-4 top-4 text-white/40">$</span>
              <input className="flex w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-[#13ec5b] border border-white/10 bg-white/5 h-14 pl-8 placeholder:text-white/40 p-[15px] text-base font-normal" placeholder="0.00" type="number" />
            </div>
          </label>
        </div>

        <div className="h-px bg-white/10 my-4"></div>

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Assets</h3>
        <div className="flex flex-col gap-6 py-3">
          <div className="w-full">
            <p className="text-white/80 text-sm font-medium leading-normal pb-2">Digital Product File</p>
            <div className="border-2 border-dashed border-white/10 rounded-xl bg-white/5 p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[#13ec5b] text-4xl mb-2">upload_file</span>
              <p className="text-white font-medium">Click to upload or drag & drop</p>
              <p className="text-white/40 text-xs mt-1">PDF, ZIP, MP4, MP3 (Max 2GB)</p>
            </div>
          </div>
          <div className="w-full">
            <p className="text-white/80 text-sm font-medium leading-normal pb-2">Storefront Thumbnail</p>
            <div className="flex gap-4 items-center">
              <div className="size-24 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-white/20 text-3xl">image</span>
              </div>
              <div className="flex-1">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  Choose Image
                </button>
                <p className="text-white/40 text-xs mt-2">Recommended: 1080x1080px JPG/PNG</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-10">
          <button className="w-full bg-[#13ec5b] text-[#102216] h-14 rounded-xl font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all">
            Publish Product
          </button>
          <button className="w-full bg-transparent text-white/60 h-12 rounded-xl font-medium text-base hover:text-white transition-all">
            Save as Draft
          </button>
        </div>
      </div>
      <div className="h-8"></div>
    </div>
  );
}
