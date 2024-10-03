"use client";

import PostCard from "@/src/components/modules/post/PostCard";
import PostPageHeader from "@/src/components/modules/post/PostPageHeader";
import Loading from "@/src/components/UI/Loading";
import { useGetAllPosts } from "@/src/hooks/post.hook";
import { IPost } from "@/src/types";
import { Card } from "@nextui-org/card";

const Posts = () => {
  const { data, isLoading } = useGetAllPosts();
  const posts = data?.data;

  return (
    <Card>
      {isLoading && <Loading />}
      <PostPageHeader />
      {posts &&
        posts?.map((post: IPost) => <PostCard key={post._id} post={post} />)}
    </Card>
  );
};

export default Posts;
