// features/home/components/HomeLayout.tsx
import { PageContainer } from "@/components/layout/PageContainer";
import { ContentBox } from "@/components/layout/ContentBox";
import { LogoSection } from "./LogoSection";

interface HomeLayoutProps {
  children: React.ReactNode;
  showLogo?: boolean;
}

export function HomeLayout({ children, showLogo = true }: HomeLayoutProps) {
  return (
    <PageContainer gradientHeight="180px">
      <ContentBox className="pt-0">
        {showLogo && <LogoSection />}
        {children}
      </ContentBox>
    </PageContainer>
  );
}