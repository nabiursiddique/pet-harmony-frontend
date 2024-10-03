"use server";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

// create post
export const createPost = async (postData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/post/create-post", postData);

    return data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || "Create post failed";
    throw new Error(errorMessage);
  }
};

//* getting all posts from db(working)
export const getAllPosts = async () => {
  try {
    const { data } = await axiosInstance.get("/post/all-posts");
    return data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || "Could not get all posts";
    throw new Error(errorMessage);
  }
};
