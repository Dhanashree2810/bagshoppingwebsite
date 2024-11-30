"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/custom/Navbars";
import Footer from "@/components/custom/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbarAndFooter = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      {children}
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}