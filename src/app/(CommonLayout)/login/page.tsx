"use client";

import PHInput from "@/src/components/form/PHInput";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/src/schemas/login.schema";
import PHForm from "@/src/components/form/PHForm";
import { useUserLogIn } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/UI/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.provider";

const LogIn = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const { setIsLoading: userLoading } = useUser();

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogIn();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = data;
    handleUserLogin(userData);
    userLoading(true);
  };

  // redirecting user after login
  if (!isPending && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }

  return (
    <>
      {isPending && !isSuccess && <Loading />}
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-3xl font-extrabold text-teal-500">Log In</h3>
        <p className="mb-4 text-teal-500 font-bold">
          Welcome Back! Let&lsquo;s Get Started
        </p>
        <div className="lg:w-[35%] w-[90%]">
          <PHForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="py-3">
              <PHInput name="email" label="Email" type="email" />
            </div>
            <div className="py-3">
              <PHInput name="password" label="Password" type="password" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-teal-600 text-white"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </PHForm>
          <div className="text-center">
            Don&lsquo;t have an account?{" "}
            <Link href={"/register"} className="text-teal-500 font-bold">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
