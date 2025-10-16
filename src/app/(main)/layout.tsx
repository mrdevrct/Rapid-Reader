// app/(main)/layout.tsx
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";
import SidebarMenu from "@/components/SidebarMenu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-container min-h-screen flex flex-col overflow-x-hidden">
      {/* Sticky Header */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1280px] z-10">
        <Header />
      </div>

      {/* Main Content - Full Height with Scroll */}
      <main className="app-container flex-1 pb-20 pt-14">
        {children}
      </main>

      {/* Mobile Bottom Navigation (Fixed at bottom on mobile) */}
      <MobileBottomNav />

      {/* Sidebar */}
      <SidebarMenu />
    </div>
  );
}