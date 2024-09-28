import { z } from "zod";

const registerValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  // mobileNumber: z
  //   .string()
  //   .regex(/^\d{11}$/, "Please enter a valid mobile number!"),
  password: z.string().min(4, "Password must be at least 4 characters."),
  profileImage: z.string().min(1, "Profile Image is required"),
});

export default registerValidationSchema;
