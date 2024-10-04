import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { createPost, getAllPosts } from "../services/PostService";
import { toast } from "sonner";

const queryClient = new QueryClient();

//* For create post
export const useCreatePost = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post created successfully");
    },
    onError: (error) => {
      const errorMessage = error?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });
};

//* For get all posts
export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["GET_ALL_POSTS"],
    queryFn: async () => await getAllPosts(),
  });
};

//* upvote post
export const useUpvotePost = () => {
  return useMutation<any, Error, String>({
    mutationKey: ["UPVOTE_POST"],
    mutationFn: async (postId) => await createPost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_POSTS"] });
      toast.success("Post upvote successfully");
    },
    onError: (error) => {
      console.log(error?.message);
      toast.error("Post upvote failed");
    },
  });
};
