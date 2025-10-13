"use client";

import ArticleSection from "@/features/home/components/ArticleSection";
import { BannerSection } from "@/features/home/components/BannerSection";
import { InfoBoxesSection } from "@/features/home/components/InfoBoxesSection";
import { LogoSection } from "@/features/home/components/LogoSection";
import { MemoryCardsSection } from "@/features/home/components/MemoryCardsSection";
import { ProductCarousel } from "@/features/home/components/ProductCarousel";
import { ResearchBoxesSection } from "@/features/home/components/ResearchBoxesSection";
import { TopGradientBox } from "@/features/home/components/TopGradientBox";
import { WhiteContentBox } from "@/features/home/components/WhiteContentBox";

// ------------------ Main Home Page ------------------
export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden">
      <TopGradientBox />
      <WhiteContentBox>
        <LogoSection />
        <InfoBoxesSection />
        <ResearchBoxesSection />
        <BannerSection />
        <MemoryCardsSection />
        <ProductCarousel title="دوره های تخفیف دار" showTimer={true} />
        <ProductCarousel title="محصولات" showTimer={false} />
        <ArticleSection />
      </WhiteContentBox>
    </div>
  );
}
