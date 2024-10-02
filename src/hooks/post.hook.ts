import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { createPost } from "../services/PostService";
import { toast } from "sonner";

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

//! For get all posts (problem(getting error))
// export const useGetAllPosts = () => {
//   return useQuery({
//     queryKey: ["GET_POSTS"],
//     queryFn: async () => await getAllPosts(),
//   });
// };
