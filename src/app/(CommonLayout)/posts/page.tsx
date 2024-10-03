import PostCard from "@/src/components/modules/post/PostCard";
import PostPageHeader from "@/src/components/modules/post/PostPageHeader";
import { getAllPosts } from "@/src/services/PostService";
import { IPost } from "@/src/types";
import { Card } from "@nextui-org/card";

const Posts = async () => {
  //! Getting error
  // const { data: allPosts, isLoading, isSuccess, isError } = useGetAllPosts();
  // if (isLoading) {
  //   return <Loading />;
  // }
  // console.log(allPosts);
  const { data: posts } = await getAllPosts();
  return (
    <Card>
      <PostPageHeader />
      {posts?.map((post: IPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </Card>
  );
};

export default Posts;
