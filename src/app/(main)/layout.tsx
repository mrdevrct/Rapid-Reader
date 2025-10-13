// app/(main)/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b to-[#F36163] from-[#770204] overflow-x-hidden">
      {/* Sticky Header */}
      <Header />

      {/* Main Content - Full Height with Scroll */}
      <main className="flex-1 pb-16 md:pb-0">{children}</main>

      {/* Mobile Bottom Navigation (Fixed at bottom on mobile) */}
      <MobileBottomNav />
    </div>
  );
}
