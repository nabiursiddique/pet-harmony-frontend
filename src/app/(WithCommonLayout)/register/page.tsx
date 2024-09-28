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

const Register = () => {
  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = data;
    handleUserRegistration(userData);
  };

  return (
    <>
      {isPending && !isSuccess && <Loading />}
      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
        <h3 className="my-2 text-3xl font-bold uppercase">Register</h3>
        <p className="mb-4">Let's Get Started a new journey</p>
        <div className="lg:w-[35%] w-[90%]">
          <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(registerValidationSchema)}
            //! For Development only
            defaultValues={{
              name: "Nabiur Siddique",
              email: "nabiursiddique01@gmail.com",
              password: "123456",
              profileImage:
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            }}
          >
            <div className="py-3">
              <PHInput label="Name" name="name" size="sm" />
            </div>
            <div className="py-3">
              <PHInput label="Email" name="email" size="sm" />
            </div>
            <div className="py-3">
              <PHInput
                label="Password"
                name="password"
                size="sm"
                type="password"
              />
            </div>
            <div className="py-3">
              <PHInput
                label="Profile Image URL"
                name="profileImage"
                size="sm"
              />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 text-default"
              size="lg"
              type="submit"
            >
              Registration
            </Button>
          </PHForm>
          <div className="text-center">
            Already have an account ? <Link href={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
