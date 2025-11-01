// AccountLayout.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";
import SidebarMenu from "@/components/SidebarMenu";
import { getCurrentUserAction } from "@/features/auth/actions/userActions";
import MyAccountHeader from "@/features/my-account/components/MyAccountHeader";
import MyAccountTopBar from "@/features/my-account/components/MyAccountTopBar";
import LoginRequired from "@/ui/login-required/LoginRequired";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { success, user } = await getCurrentUserAction();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* پاس دادن وضعیت لاگین */}
      <Header />

      <div className="app-container flex flex-col flex-1 px-4 pt-14 sm:pt-20 max-w-5xl">
        <main className="flex-1">
          {!success || !user ? (
            <LoginRequired />
          ) : (
            <div className="w-full rounded-3xl overflow-hidden space-y-6 py-2">
              <MyAccountTopBar />
              <MyAccountHeader
                firstName={user.first_name}
                lastName={user.last_name}
                phone={user.display_name}
                wallet={user.wallet_balance}
              />
              {children}
            </div>
          )}
        </main>

        <Footer />
      </div>

      <div className="app-container mt-14 sm:mt-0">
        <MobileBottomNav />
      </div>

      <SidebarMenu />
    </div>
  );
}
