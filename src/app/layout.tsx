import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./component/layout/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
title:"Dine Market",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {/* Home Page */}
        <main className="px-8 py-6">
           {children}
        </main>
      </body>
    </html>
  );
}
