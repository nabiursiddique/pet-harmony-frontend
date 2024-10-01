"use client";

import { useUser } from "@/src/context/user.provider";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { SidebarOptions } from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";
import Link from "next/link";
import ProfileCardSkeleton from "../Skeletons/ProfileCardSkeleton";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div className="space-y-4 md:space-y-6 pb-3">
      {/* Profile Section */}
      <div className="rounded-xl bg-default-100 px-2">
        <div className=" w-full rounded-md">
          {user ? (
            <Image
              alt="profile"
              className="w-full h-full object-cover rounded-md"
              src={user?.profileImage as string}
            />
          ) : (
            <ProfileCardSkeleton />
          )}
        </div>

        <div className="my-3 text-center md:text-left">
          <h1 className="text-lg font-semibold md:text-2xl">{user?.name}</h1>
          <p className="break-words text-sm text-muted-foreground">
            {user?.email}
          </p>
        </div>

        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/profile/createPost"}
        >
          Create a post
        </Button>
      </div>

      {/* Sidebar Options */}
      {user && (
        <div className="rounded-xl bg-default-100 px-2">
          <SidebarOptions
            links={user?.role === "user" ? userLinks : adminLinks}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
