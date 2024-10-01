"use client";

import PHForm from "@/src/components/form/PHForm";
import PHInput from "@/src/components/form/PHInput";
import Loading from "@/src/components/UI/Loading";
import { protectedRoutes } from "@/src/constant";
import { useChangePassword } from "@/src/hooks/auth.hook";
import changePasswordValidationSchema from "@/src/schemas/changePassword.schema";
import { logout } from "@/src/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { usePathname, useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ChangePasswordPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const {
    mutate: handleChangePassword,
    isPending,
    isSuccess,
  } = useChangePassword();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleChangePassword(data);
    logout();

    // after logout we will send to the home page
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };
  return (
    <div>
      {isPending && !isSuccess && <Loading />}
      <h1 className="text-3xl text-center font-bold text-teal-600">
        Change Password
      </h1>

      {/* form for change password */}
      <PHForm
        onSubmit={onSubmit}
        resolver={zodResolver(changePasswordValidationSchema)}
      >
        {/* Name */}
        <div className="py-3 grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <PHInput
              label="Old Password"
              name="oldPassword"
              type="text"
              size="sm"
            />
          </div>
          <div>
            <PHInput
              label="New Password"
              name="newPassword"
              type="text"
              size="sm"
            />
          </div>
        </div>

        <Button
          className="my-3 w-full rounded-md bg-teal-600 text-white"
          size="lg"
          type="submit"
        >
          Change Password
        </Button>
      </PHForm>
    </div>
  );
};

export default ChangePasswordPage;
