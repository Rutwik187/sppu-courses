import type { Metadata } from "next";
import { Monda } from "next/font/google";
import "./globals.css";

const inter = Monda({ weight: "400", subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "SPPU Blockchain Courses",
  description: "Explore new range of blockchain courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
