"use client";

import PHForm from "@/src/components/form/PHForm";
import PHInput from "@/src/components/form/PHInput";
import ProfileCardSkeleton from "@/src/components/UI/Skeletons/ProfileCardSkeleton";
import { useUser } from "@/src/context/user.provider";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const { user, isLoading } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updateUserInfo = {
      _id: user?._id,
      name: data?.name,
      email: user?.email,
      role: user?.role,
      profileImage: data?.profileImage,
    };
    console.log(updateUserInfo);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isLoading) {
    return <ProfileCardSkeleton />;
  }

  return (
    <div>
      {user && (
        <div>
          <div className="mb-2 flex justify-between items-center">
            <div>
              <Avatar
                src={user?.profileImage}
                className="w-40 h-40 text-large"
              />
            </div>
            <div>
              <Button
                variant="ghost"
                className="text-1xl"
                onClick={() => setIsEditing(true)}
              >
                <FaUserEdit
                  className={
                    isEditing
                      ? "text-green-500 h-5 w-5"
                      : "text-orange-600 h-5 w-5"
                  }
                />
                <span
                  className={isEditing ? "text-green-500" : "text-orange-600"}
                >
                  Edit Profile
                </span>
              </Button>
            </div>
          </div>

          <PHForm onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div className="py-3">
                <PHInput
                  value={user?._id}
                  label="User Id"
                  name="userId"
                  size="sm"
                  isDisabled
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
                  value={user?.email}
                  label="Email"
                  name="email"
                  size="sm"
                  isDisabled
                />
              </div>
              <div className="py-3">
                <PHInput
                  value={user?.role}
                  label="Role"
                  name="role"
                  size="sm"
                  isDisabled
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

            {/* update and cancel button */}
            {isEditing && (
              <div className="flex gap-4">
                <div>
                  <Button
                    className="my-3 rounded-md bg-teal-600 text-white"
                    size="lg"
                    type="submit"
                  >
                    Update
                  </Button>
                </div>
                <div>
                  <Button
                    className="my-3 rounded-md bg-teal-600 text-white"
                    size="lg"
                    type="submit"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </PHForm>
        </div>
      )}
    </div>
  );
};

export default Profile;
