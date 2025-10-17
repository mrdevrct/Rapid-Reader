
// app/(main)/layout.tsx
import MobileBottomNav from "@/components/MobileBottomNav";
import ProfileHeader from "@/components/template/profile/ProfileHeader";
import ProfileTopBar from "@/components/template/profile/ProfileTopBar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-container min-h-screen flex flex-col overflow-x-hidden bg-white">
      {/* Main Content - Full Height with Scroll */}
       <div className="app-container flex flex-col flex-1 px-4 pb-14">
          <main className="flex-1">
            <div className="w-full bg-white rounded-3xl overflow-hidden py-6 space-y-6">
              <ProfileTopBar />
              <ProfileHeader />
              {children}
            </div>
          </main>
        </div>

      {/* Mobile Bottom Navigation (Fixed at bottom on mobile) */}
      <MobileBottomNav />
    </div>
  );
}
