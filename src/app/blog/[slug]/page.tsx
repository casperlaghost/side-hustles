import React from "react";
import { TopAppBar } from "@/components/layout/TopAppBar";

export default function Article() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-display min-h-screen">
      <TopAppBar
        title="Article"
        leftAction={<span className="material-symbols-outlined">arrow_back_ios</span>}
        rightAction={<span className="material-symbols-outlined">share</span>}
      />

      <div className="sticky top-[72px] z-40 bg-background-dark">
        <div className="flex flex-col gap-1 px-4 py-2 border-b border-white/5">
          <div className="flex justify-between items-center">
            <p className="text-white/60 text-xs font-medium uppercase tracking-widest">Reading Progress</p>
            <p className="text-[#13ec5b] text-xs font-bold">45%</p>
          </div>
          <div className="rounded-full bg-white/10 h-1.5 overflow-hidden">
            <div className="h-full rounded-full bg-[#13ec5b]" style={{ width: "45%" }}></div>
          </div>
        </div>
      </div>

      <main className="max-w-screen-xl mx-auto pb-10">
        <div className="p-0 sm:px-4 sm:py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-zinc-900 sm:rounded-xl min-h-[450px] relative"
            style={{
              backgroundImage: 'linear-gradient(to bottom, transparent, rgba(16,34,22,0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeXXf-OuOciQoGzIlVKHpDTcAXcd0Zb8bFQiVxMsc83xl2BoE4aMyIg4jS891ErivrpyP1GBMWwxYTT1UBTWjE7V0OaS3IURmEaVfRDQSDFZaRf7xafi302de1HLrt2SMXXJA0Ira1LoBKvYXfBinidYlmptfAnEfZMQ3mzno1B0yOZk7DsrffYa1nU8a80AIZHl3giWF_aaB5Mu6nEwYTo7YyKKk6CRqLN8__KmsysHdIZFpCK39P_TBM35mZ8BiDLVhyQAaJ4VW4")'
            }}
          ></div>
        </div>

        <div className="px-4">
          <h1 className="text-white tracking-tight text-[40px] font-bold leading-[1.1] pt-8 pb-4">Elevating Your Production: The Art of Shadow & Light</h1>
        </div>

        <div className="flex px-4 py-4 border-b border-white/5 mx-4">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 border border-[#13ec5b]/30"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6upFWmx4PU2Ol43Q37240vWb3OEsvLoA51Ix7_IF4ihlxtn-j07jl-bF538kQRgknhKHYLYvLtXjp0jeRbBp44RkDaAjvV7Cx9eTwZlc0zGIy7PdPUv4KDDtwdB65f0ftMfsyEctFwWcwT0Dg8XZ5edzw97rHG9eZDXuK22SjSQGj0H7JjhDNk3Jb0KBKPRmqBgbOIpUVcE7QKOxMJrLjZaK-7QAyd4nGJK7_zXw7a8uHv-kBFE9-M8L4_S01eBZYzfkaFrlvbymG")' }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Alex Rivera</p>
                <p className="text-white/50 text-sm font-normal leading-normal">Director & Digital Creator • 8 min read</p>
              </div>
            </div>
            <button className="bg-[#13ec5b]/10 text-[#13ec5b] border border-[#13ec5b]/20 px-4 py-1.5 rounded-full text-sm font-bold w-fit">Follow</button>
          </div>
        </div>

        <article className="px-4 py-8 space-y-6 text-white/80 text-lg leading-relaxed font-serif">
          <p>To master the dark mode aesthetic, one must first understand that darkness isn&apos;t just the absence of light—it&apos;s the presence of intention. When we design for the night, we&apos;re not just dimming the screen; we&apos;re creating a focus on what truly matters.</p>
          <p>Contrast is your primary tool. By using subtle glows and neon accents, like our signature <span className="text-[#13ec5b] font-bold">#13ec5b</span>, you guide the eye through the digital landscape with precision and grace.</p>

          <div className="py-6">
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2 not-italic font-sans">
              <span className="material-symbols-outlined text-[#13ec5b]">shopping_bag</span>
              Recommended Gear
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "Lumix S5IIX Mirrorless", price: "$2,199.00", sub: "The dark mode king.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWOc4LxHiFjupN8wCiLFlrRbJwiK1LOZPW4-HLf36I_Yo-iEXyO_PenW-xAobAUf0EYuRlCkxWUUmErGpma8atqYbX5-xAE2TWuqAt_wsH8nFK1aohHQuItEy-0bZzcc0yib3G7LCHJ4dfEMCKYDdOHSpodQJaB_eBohahr1HsuAUr2XJfg7Oc6SqwbC4EgmNWsy8k15oDBE34mybfBn0GD4enpJi1jV4pGn-vqeEWIAA84p6nSnrxoGcKISXNXnzccjES7StmKxXF" },
                { name: "Aputure LS 600d Pro", price: "$1,890.00", sub: "Daylight-balanced punch.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcCi8QjH-B6Yvk4E9v41lZsW2EfiZx_gj-SSa2mna71Nu6zbXGwsAQCGlg_J2tXpV5Oe_VSzpmtnpZbe0fdNaGBklSOJeoa7GtMAxbCeJFVvUJ1apxPQQBieF6_Vci0ijQX8avBgzoKcxy2ktBvv3auj9fKTZ9aQA1gpaorN3W0c2BJVSxg2XDpsE3r9u0qoUYeayrgXlzDxcJZvo9ZSXoBGYZ8kjLmLmSq-tzYBq5XRkVN-7t3xRt-DUK3a8Zv8C57YErJdq4_-Ge" },
              ].map((gear, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl border border-white/10 p-4 flex gap-4 not-italic font-sans">
                  <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url("${gear.img}")` }}></div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="text-white font-bold text-base">{gear.name}</h4>
                      <p className="text-white/50 text-sm italic">{gear.sub}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#13ec5b] font-bold">{gear.price}</span>
                      <button className="bg-[#13ec5b] text-[#102216] px-3 py-1 rounded font-bold text-xs uppercase tracking-tighter">Shop Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p>Beyond the hardware, the software choice determines how your shadows roll off. Professional grading suites allow for the preservation of detail in the deepest blacks, ensuring your content remains premium across all display types.</p>
        </article>

        <div className="px-4 py-8">
          <div className="bg-gradient-to-br from-[#13ec5b]/20 to-transparent border border-[#13ec5b]/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[#13ec5b] font-bold text-xs uppercase tracking-widest mb-2 block">Premium Service</span>
              <h3 className="text-2xl font-bold text-white mb-2">Book a 1:1 Color Grading Session</h3>
              <p className="text-white/70 mb-6">Master the dark aesthetic with personalized coaching from Alex Rivera. Limited spots available.</p>
              <button className="w-full bg-[#13ec5b] text-[#102216] font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                View Service Details
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#13ec5b]/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="bg-white/5 border-t border-white/10 px-4 py-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#13ec5b]/10 mb-4">
              <span className="material-symbols-outlined text-[#13ec5b] text-3xl">mail</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">The Creator&apos;s Digest</h3>
            <p className="text-white/60 mb-8">Join 15k+ creators receiving weekly insights on production, gear, and growth.</p>
            <div className="flex flex-col gap-3">
              <input className="bg-background-dark border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#13ec5b] transition-colors" placeholder="Enter your email" type="email" />
              <button className="bg-white text-[#102216] font-bold py-3 rounded-xl">Subscribe for Free</button>
            </div>
            <p className="text-[10px] text-white/30 mt-4 uppercase tracking-widest">No spam. Ever. Unsubscribe anytime.</p>
          </div>
        </div>

        <footer className="p-8 text-center text-white/40 text-sm">
          <p>© 2024 Creator Economy Platform. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            {["public", "movie", "podcasts"].map((icon, idx) => (
              <span key={idx} className="material-symbols-outlined">{icon}</span>
            ))}
          </div>
        </footer>
      </main>
      <div className="h-8 bg-background-dark"></div>
    </div>
  );
}
