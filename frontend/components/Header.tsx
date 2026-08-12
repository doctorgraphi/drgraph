import Image from "next/image";
export default function Header(){
 return <header className="fixed top-0 inset-x-0 z-50 bg-[rgba(247,247,245,.9)] backdrop-blur-md">
  <div className="container h-[76px] flex items-center justify-between" dir="ltr">
   <a href="/" className="flex items-center"><Image src="/drgraph-logo.svg" alt="DrGraph" width={110} height={45} priority/></a>
   <nav className="hidden lg:flex gap-7 text-[11px] uppercase tracking-[.13em]">
    <a href="#home" className="hover:text-[var(--brand)]">( _01 ) Home</a>
    <a href="#works" className="hover:text-[var(--brand)]">( _02 ) Works</a>
    <a href="#about" className="hover:text-[var(--brand)]">( _03 ) About</a>
    <a href="#blog" className="hover:text-[var(--brand)]">( _04 ) Blog</a>
    <a href="#contact" className="hover:text-[var(--brand)]">( _05 ) Contact</a>
   </nav>
   <div className="text-[11px] tracking-[.08em]">+98 911 470 0765</div>
  </div>
 </header>
}