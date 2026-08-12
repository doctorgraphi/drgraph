"use client";
import Image from "next/image";
import {motion} from "framer-motion";
const projects=[
 ["/projects/project-01.svg","01","Brand Identity","2026"],
 ["/projects/project-02.svg","02","Packaging","2026"],
 ["/projects/project-03.svg","03","Digital Experience","2026"],
 ["/projects/project-04.svg","04","Environmental Graphics","2026"]
];
export default function Works(){
 return <section id="works" className="section">
  <div className="container">
   <div className="flex justify-between items-end mb-14"><div className="section-label">Latest Projects</div><span className="text-xs text-neutral-500">(_©26)</span></div>
   <div className="space-y-24">
    {projects.map(([img,num,title,year],i)=><motion.article key={num} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={`grid md:grid-cols-12 gap-7 items-end ${i%2?'md:ml-[14%]':''}`}>
      <div className={`relative overflow-hidden ${i%2?'md:col-span-7':'md:col-span-8'}`}><Image src={img} alt={title} width={1200} height={900} className="w-full h-auto transition-transform duration-700 hover:scale-[1.035]"/></div>
      <div className="md:col-span-4" dir="ltr"><div className="text-[11px] text-[var(--brand)]">(_{num})</div><h3 className="text-3xl md:text-5xl mt-2">{title}</h3><div className="text-xs text-neutral-500 mt-3">{year} / Selected Project</div></div>
    </motion.article>)}
   </div>
  </div>
 </section>
}