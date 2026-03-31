"use client";

import { useState } from "react";
import { Navbar } from "@/components/docs/Navbar";
import { Sidebar } from "@/components/docs/Sidebar";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        onMenuToggle={() => setMenuOpen((v) => !v)}
        menuOpen={menuOpen}
      />
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="lg:pl-[260px] xl:pr-[240px] pt-[60px] min-h-screen">
        {children}
      </main>
    </>
  );
}
