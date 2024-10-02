"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

// post
export const createPost = async (postData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/post/create-post", postData);

    return data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || "Create post failed";
    throw new Error(errorMessage);
  }
};
