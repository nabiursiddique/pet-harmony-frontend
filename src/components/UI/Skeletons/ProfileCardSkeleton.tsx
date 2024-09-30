import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

const ProfileCardSkeleton = () => {
  return (
    <Card>
      <div className="rounded-xl bg-default-100 px-2">
        <Skeleton className="rounded-lg">
          <div className="h-64 rounded-lg bg-default-300"></div>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </Skeleton>
      </div>
    </Card>
  );
};

export default ProfileCardSkeleton;
