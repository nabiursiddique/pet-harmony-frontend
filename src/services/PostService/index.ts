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

// getting all posts from db
export const getAllPosts = async () => {
  const fetchOption = {
    next: {
      tags: ["posts"],
    },
  };

  const res = await fetch(`${envConfig.baseApi}/post/all-posts`, fetchOption);

  return res.json();
};
