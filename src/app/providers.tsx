// app/providers.tsx
"use client";

import { SidebarProvider } from "@/context/SidebarContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
