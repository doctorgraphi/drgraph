"use client";
import {motion} from "framer-motion";
export default function Hero(){
 return <section id="home" className="min-h-screen pt-28 pb-14 flex flex-col justify-end overflow-hidden">
  <div className="container">
   <div className="flex justify-between items-start text-[11px] uppercase tracking-[.13em] mb-8" dir="ltr">
    <span>Creative Design Studio / DrGraph</span><span>Rasht — Iran</span>
   </div>
   <div className="overflow-hidden"><motion.h1 initial={{y:"110%"}} animate={{y:0}} transition={{duration:1,ease:[.22,1,.36,1]}} className="font-persian font-black text-[clamp(58px,10vw,150px)] leading-[.86] tracking-[-.065em] text-right">
    مهم نیست که اول شروع کرده،
    <br/><span className="text-[var(--brand)]">مهم اینه که بهتر شروع کرده.</span>
   </motion.h1></div>
   <div className="mt-10 grid md:grid-cols-12 gap-6 items-end" dir="ltr">
    <p className="md:col-span-5 text-[17px] leading-8 text-neutral-500 font-persian" dir="rtl">خلق هویت‌های ماندگار و کمک به رشد کسب‌وکارها از طریق طراحی هوشمندانه و متفاوت.</p>
    <div className="md:col-span-7 text-right text-[11px] uppercase tracking-[.15em]">Scroll ↓</div>
   </div>
  </div>
  <div className="container mt-10 overflow-hidden">
   <motion.div initial={{scaleX:0,originX:0}} animate={{scaleX:1}} transition={{duration:1.1,delay:.35}} className="h-px bg-[var(--graphite)]/20"/>
  </div>
 </section>
}