"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

//* Register user
export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/user/register", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message || "Registration failed";
    throw new Error(errorMessage);
  }
};

//* Login user
export const logInUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/logIn", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || "Login failed";
    throw new Error(errorMessage);
  }
};

//* Logout the user
export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

//* Get the current logged in user from token
export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      role: decodedToken.role,
      profileImage: decodedToken.profileImage,
    };
  }

  return decodedToken;
};
