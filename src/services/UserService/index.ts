"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

//* update profile
export const updateProfile = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.put("/user/me", userData);
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || "Update Profile failed";
    throw new Error(errorMessage);
  }
};

//! Getting Error
//* Get all users
// export const getAllUsers = async () => {
//   try {
//     const { data } = await axiosInstance.get("/user/all-users");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
