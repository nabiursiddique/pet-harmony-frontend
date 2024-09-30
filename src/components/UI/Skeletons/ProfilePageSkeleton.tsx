import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import { Avatar } from "@nextui-org/avatar";

const ProfilePageSkeleton = () => {
  return (
    <Card>
      <Skeleton className="rounded-lg">
        <div className="h-60 rounded-lg bg-default-300" />
      </Skeleton>
    </Card>
  );
};

export default ProfilePageSkeleton;
