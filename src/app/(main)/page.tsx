import ArticleSection from "@/features/home/components/ArticleSection";
import { BannerSection } from "@/features/home/components/BannerSection";
import { InfoBoxesSection } from "@/features/home/components/InfoBoxesSection";
import { LogoSection } from "@/features/home/components/LogoSection";
import { MemoryCardsSection } from "@/features/home/components/MemoryCardsSection";
import { ProductCarousel } from "@/features/home/components/ProductCarousel";
import { ResearchBoxesSection } from "@/features/home/components/ResearchBoxesSection";
import { TopGradientBox } from "@/features/home/components/TopGradientBox";
import { WhiteContentBox } from "@/features/home/components/WhiteContentBox";

import banner1 from "../../../public/images/Frame 11 copy.webp";
import banner2 from "../../../public/images/Frame 9 copy.webp";
import banner3 from "../../../public/images/Group 2 copy.webp";
import { ProductServiceServer } from "@/features/courses/api/productService";
import { PostServiceServer } from "@/features/posts/api/postService";
import { CategoryServiceServer } from "@/features/category/api/categoryService";

const banners = [
  { id: 1, src: banner1.src },
  { id: 2, src: banner2.src },
  { id: 3, src: banner3.src },
];

// ------------------ Main Home Page ------------------
export default async function HomePage() {
  const productsLatestResponse =
    await ProductServiceServer.getAllProductsServer();
  const productsDiscountedResponse =
    await ProductServiceServer.getAllProductsServer();
  const postsLatestResponse = await PostServiceServer.getAllPostsServer();
  const categoriesResponse = await CategoryServiceServer.getAllCategoryServer();

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden">
      <TopGradientBox />
      <WhiteContentBox>
        <LogoSection />
        <InfoBoxesSection />
        <ResearchBoxesSection />
        <BannerSection banner={banners[0]} />
        <MemoryCardsSection categories={categoriesResponse.categories}/>
        <ProductCarousel
          title="دوره های تخفیف دار"
          products={productsDiscountedResponse.products}
          showTimer={true}
        />
        <BannerSection banner={banners[1]} />
        <ProductCarousel
          title="محصولات"
          products={productsLatestResponse.products}
          showTimer={false}
        />
        <BannerSection banner={banners[2]} />
        <ArticleSection posts={postsLatestResponse.posts} />
      </WhiteContentBox>
    </div>
  );
}
