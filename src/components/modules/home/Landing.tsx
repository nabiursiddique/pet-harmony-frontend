import { Button } from "@nextui-org/button";
import LandingImage from "./LandingImage";
import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";

const Landing = () => {
  return (
    <Card className="py-4  flex" shadow="none">
      <CardBody className="overflow-visible py-2 lg:mx-5">
        <div className="flex items-center justify-between">
          <div className="lg:w-2/5 w-full">
            <h1 className="text-6xl font-bold mb-2 text-default-900">
              Get The Best <span className="text-teal-500">Suggestions</span>{" "}
              For Your Lovely Pet.
            </h1>
            <h4 className=" text-xl text-gray-500 my-4">
              Here we have a team and other pet lovers who will guide you with
              the best suggestions for your pet.
            </h4>
            <div className="space-x-4">
              <Link href="/register">
                <Button className="text-white bg-teal-500" radius="sm">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>

          <LandingImage />
        </div>
      </CardBody>
    </Card>
  );
};

export default Landing;
