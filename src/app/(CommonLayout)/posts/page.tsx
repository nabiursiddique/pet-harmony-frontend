"use client";

import PostCard from "@/src/components/modules/post/PostCard";
import PostPageHeader from "@/src/components/modules/post/PostPageHeader";
import Loading from "@/src/components/UI/Loading";
import { useGetAllPosts } from "@/src/hooks/post.hook";
import { Card } from "@nextui-org/card";

const Posts = () => {
  //! Getting error
  // const { data: allPosts, isLoading, isSuccess, isError } = useGetAllPosts();
  // if (isLoading) {
  //   return <Loading />;
  // }
  // console.log(allPosts);
  return (
    <Card>
      <PostPageHeader />
      <PostCard />
      <PostCard />
    </Card>
  );
};

export default Posts;
