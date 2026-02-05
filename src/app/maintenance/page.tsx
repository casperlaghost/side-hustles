import React from "react";

export default function MaintenancePublic() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden max-w-[430px] mx-auto font-display">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
        <div className="text-primary flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-3xl">hub</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12 uppercase tracking-widest text-xs opacity-60">Status: Maintenance</h2>
      </div>

      <div className="p-0 sm:px-4 sm:py-3 px-4 py-6">
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-primary/10 rounded-xl min-h-64 border border-primary/20 relative"
          style={{ backgroundImage: 'linear-gradient(to bottom right, #101622, #135bec44), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
          <div className="relative p-6 flex flex-col items-center">
            <div className="bg-primary/20 p-3 rounded-full mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">construction</span>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight px-6 text-center pb-3 pt-6">
        Building the future of the creator economy.
      </h1>

      <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed pb-6 pt-1 px-8 text-center">
        We&apos;re upgrading the platform to provide a better experience for creators, freelancers, and entrepreneurs. We&apos;ll be back online shortly with improved tools and performance.
      </p>

      <div className="px-6 py-4 flex flex-col items-center">
        <h4 className="text-gray-500 dark:text-[#9da6b9] text-sm font-bold leading-normal tracking-[0.015em] py-2 text-center uppercase">Get notified when we&apos;re live</h4>
        <div className="w-full mt-4 flex flex-col gap-3">
          <div className="relative w-full">
            <input className="w-full h-14 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-xl px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email" type="email" />
          </div>
          <button className="w-full h-14 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            Notify Me
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
        </div>
      </div>

      <div className="mt-auto pb-10 px-6">
        <div className="flex justify-center gap-6 mb-8 pt-8">
          {["share", "chat_bubble", "alternate_email"].map((icon, idx) => (
            <a key={idx} className="text-gray-500 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">{icon}</span>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest font-semibold">
          © 2024 Hustle Platform
        </p>
      </div>
    </div>
  );
}
