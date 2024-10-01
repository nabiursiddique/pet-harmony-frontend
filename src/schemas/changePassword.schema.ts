import { z } from "zod";

const changePasswordValidationSchema = z.object({
  oldPassword: z.string().min(1, "Enter your old password"),
  newPassword: z.string().min(1, "Enter your new password"),
});

export default changePasswordValidationSchema;
