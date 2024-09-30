"use client";

import PHForm from "@/src/components/form/PHForm";
import PHInput from "@/src/components/form/PHInput";
import { useUser } from "@/src/context/user.provider";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

const Profile = () => {
  const { user } = useUser();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <div className="mb-2">
          <Avatar src={user?.profileImage} className="w-40 h-40 text-large" />
        </div>
        <PHForm onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="py-3">
              <PHInput
                defaultValue={user?._id}
                label="User Id"
                name="userId"
                size="sm"
              />
            </div>
            <div className="py-3">
              <PHInput
                defaultValue={user?.name}
                label="User Name"
                name="name"
                size="sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="py-3">
              <PHInput
                defaultValue={user?.email}
                label="Email"
                name="email"
                size="sm"
              />
            </div>
            <div className="py-3">
              <PHInput
                defaultValue={user?.role}
                label="Role"
                name="role"
                size="sm"
              />
            </div>
          </div>

          <div className="py-3">
            <PHInput
              defaultValue={user?.profileImage}
              label="Profile Image URL"
              name="profileImage"
              size="sm"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-teal-600 text-white"
            size="lg"
            type="submit"
          >
            Update
          </Button>
        </PHForm>
      </div>
    </div>
  );
};

export default Profile;
