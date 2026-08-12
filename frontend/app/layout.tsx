import "./globals.css"; import type {Metadata} from "next";
export const metadata:Metadata={title:"DrGraph — Creative Design Studio",description:"DrGraph — Branding, digital design and creative graphics."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body>{children}</body></html>}