"use client";

import PHForm from "@/src/components/form/PHForm";
import PHInput from "@/src/components/form/PHInput";
import changePasswordValidationSchema from "@/src/schemas/changePassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ChangePasswordPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
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
