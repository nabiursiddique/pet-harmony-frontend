"use client";

import { Image } from "@nextui-org/image";

const LandingImage = () => {
  return (
    <div className="lg:w-2/5 w-0 lg:flex justify-end hidden mr-5">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="/assets/Banner.png"
      />
    </div>
  );
};

export default LandingImage;
