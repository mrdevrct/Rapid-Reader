// src/app/(main)/posts/[id]/page.tsx
import { PostServiceServer } from "@/features/posts/api/postService";
import PostSingle from "@/features/posts/components/single/PostSingle";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function Posts({ params }: PostPageProps) {
  const resolvedParams = await params;
  if (!resolvedParams?.id || isNaN(parseInt(resolvedParams.id, 10))) {
    notFound(); 
  }

  const id = parseInt(resolvedParams.id, 10); 

  try {
    const post = await PostServiceServer.getSinglePostServer(id, {
      revalidate: 120,
      tags: [`post:${id}`],
    });

    if (!post) {
      notFound();
    }

    return <PostSingle post={post} />;
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div className="text-center p-5 text-red-500">
        خطا در بارگذاری مقاله
      </div>
    );
  }
}