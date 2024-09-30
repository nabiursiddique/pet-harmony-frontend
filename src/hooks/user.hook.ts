import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { updateProfile } from "../services/UserService";
import { toast } from "sonner";

export const useUpdateProfile = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_PROFILE"],
    mutationFn: async (userData) => await updateProfile(userData),
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: (error) => {
      const errorMessage = error?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });
};
