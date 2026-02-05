import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function KanbanBoard() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-white font-display">
      <TopAppBar
        title="Project Kanban"
        rightAction={
          <button className="flex items-center justify-center p-0">
            <span className="material-symbols-outlined">search</span>
          </button>
        }
      />

      {/* Tabs Navigation */}
      <nav className="pb-3 sticky top-[64px] bg-background-light dark:bg-background-dark z-40">
        <div className="flex border-b border-gray-200 dark:border-[#3f3b54] px-4 gap-8 overflow-x-auto no-scrollbar">
          {[
            { label: "To Do", active: false },
            { label: "In Progress", active: true },
            { label: "Feedback", active: false },
            { label: "Completed", active: false },
          ].map((tab, idx) => (
            <a
              key={idx}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 whitespace-nowrap ${tab.active ? 'border-b-primary text-black dark:text-white' : 'border-b-transparent text-[#a19db9]'}`}
              href="#"
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Kanban View */}
      <main className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto pb-24">
        <div className="flex items-center justify-between">
          <h3 className="text-black dark:text-white text-base font-bold">In Progress (3)</h3>
          <span className="material-symbols-outlined text-[#a19db9] cursor-pointer">sort</span>
        </div>

        {[
          {
            title: "Brand Identity Design", client: "Alex Rivers", deadline: "Oct 24", progress: 65,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKzgM9ktgWVQheIMtKhEVMxOQVI_XOD64hvro79Ho5KNhtLu3IcCIUxpJvhgyCkK8q4-TpBUFNHYrmFEGGFGwYArB4UvxbPC8051ldUdfGNIzMIvdPndjnQ9rtAqtQ522HZ55rKyDyLCIzCb4f_v6BCiy5zlC0WfWwZxqJsgf8O_qysQkfqjsC1pSdflrHud88QTbH5teyc5-HUnyFApuCgCNbe5ulR6p9KlJwv2Q8qutHtlWxeVbfXY9iShjb256ttuY9d2uMrwHd"
          },
          {
            title: "UI Kit Development", client: "TechFlow", deadline: "Oct 28", progress: 32,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHm3zh-mav-PgPrNCv0eD30dYWyNNFO-pL5tl8OozChCMTfCQ4HpGGNIzZ2qgnjZ2ubWHaVjwuszGIH-Sf1M9ANJHqMDo5UgCl0E0AZQ-9QM1suP20dVAQriGQ2FNWtXnZhR41X2uNffGXNotuiDGxRX_95zkPMNAZDtuJibcfpfSW1p_kyfDm8JKmK8eobjJ4-Y5azlX_b6g7sZ_W3m21x8wC5dL7g203DqQh4bgIjlf1Nv_Zzsh3qs_xKs_WGKsUC4dEZmnv5-IR"
          },
          {
            title: "Social Media Assets", client: "Bloom Agency", deadline: "Tomorrow", progress: 85,
            img: null
          },
        ].map((card, idx) => (
          <div key={idx} className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-white dark:bg-[#1d1c27] border border-gray-100 dark:border-none overflow-hidden">
            {card.img && (
              <div className="w-full aspect-video bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${card.img}")` }}></div>
            )}
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-4">
              <div className="flex justify-between items-start">
                <p className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">{card.title}</p>
                <span className="material-symbols-outlined text-[#a19db9] text-sm">more_vert</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-6 justify-between items-center">
                  <p className="text-[#a19db9] text-xs font-medium uppercase tracking-wider">Overall Progress</p>
                  <p className="text-black dark:text-white text-sm font-bold leading-normal">{card.progress}%</p>
                </div>
                <div className="rounded-full bg-gray-200 dark:bg-[#3f3b54] h-1.5 overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${card.progress}%` }}></div>
                </div>
              </div>
              <div className="flex items-end gap-3 justify-between border-t border-gray-100 dark:border-[#3f3b54] pt-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#a19db9] text-sm font-normal leading-normal">Client: <span className="text-black dark:text-white">{card.client}</span></p>
                  <p className="text-[#a19db9] text-sm font-normal leading-normal">Deadline: <span className="text-black dark:text-white">{card.deadline}</span></p>
                </div>
                <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-semibold leading-normal shadow-md active:scale-95 transition-transform">
                  <span className="truncate">Update</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <button className="fixed bottom-8 right-6 size-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
