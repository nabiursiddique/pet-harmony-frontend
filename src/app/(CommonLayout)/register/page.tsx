"use client";

import PHInput from "@/src/components/form/PHInput";
import registerValidationSchema from "@/src/schemas/register.schema";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PHForm from "@/src/components/form/PHForm";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/UI/Loading";
import { Card } from "@nextui-org/card";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";

const Register = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();
  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFiles([file]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const userRegistrationData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    formData.append("data", JSON.stringify(userRegistrationData));
    if (imageFiles.length > 0) {
      formData.append("profileImage", imageFiles[0]);
    }
    handleUserRegistration(formData);
    userLoading(true);
  };

  // redirecting user after login
  if (!isPending && isSuccess) {
    router.push("/");
  }

  return (
    <Card>
      {isPending && !isSuccess && <Loading />}
      <div className="flex h-[90vh] flex-col items-center justify-center mb-10">
        <h3 className="my-2 text-3xl font-extrabold text-teal-500">Register</h3>
        <p className="mb-4 text-teal-500 font-bold">
          Let's Get Started a new journey
        </p>
        <div className="lg:w-[35%] w-[90%]">
          <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(registerValidationSchema)}
          >
            {/* Name */}
            <div className="py-3">
              <PHInput label="Name" name="name" type="text" size="sm" />
            </div>
            {/* Email */}
            <div className="py-3">
              <PHInput label="Email" name="email" type="email" size="sm" />
            </div>
            {/* Password */}
            <div className="py-3">
              <PHInput
                label="Password"
                name="password"
                size="sm"
                type="password"
              />
            </div>
            {/* profile image */}
            <div className="min-w-fit flex-1">
              <label
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                htmlFor="image"
              >
                Upload image
              </label>
              <input
                className="hidden"
                id="image"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </div>
            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="w-20 h-auto rounded-md"
                />
              </div>
            )}

            <Button
              className="my-3 w-full rounded-md bg-teal-600 text-white"
              size="lg"
              type="submit"
            >
              Registration
            </Button>
          </PHForm>
          <div className="text-center">
            Already have an account ?{" "}
            <Link href={"/login"} className="text-teal-500 font-bold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Register;
