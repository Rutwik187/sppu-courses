import type { Metadata } from "next";
import { Monda } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { MobileNav } from "@/components/mobile-nav";
import Announcements from "@/components/announcements";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import ContactUs from "@/components/contact-us";

const inter = Monda({ weight: "400", subsets: ["vietnamese"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "max-w-7xl mx-auto")}>
        <Announcements />
        <Navbar />
        <MobileNav />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
