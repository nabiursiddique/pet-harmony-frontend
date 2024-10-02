import PostCard from "@/src/components/modules/post/PostCard";
import PostPageHeader from "@/src/components/modules/post/PostPageHeader";
import { Card } from "@nextui-org/card";

const Posts = () => {
  //! Getting error
  // const { data: allPosts, isLoading, isSuccess } = useGetAllPosts();
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
