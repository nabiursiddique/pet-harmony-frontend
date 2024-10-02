import Landing from "@/src/components/modules/home/Landing";
import WhatDoWeDo from "@/src/components/modules/home/WhatDoWeDo";
import { Card } from "@nextui-org/card";

const Home = () => {
  return (
    <Card>
      <Landing />
      <WhatDoWeDo />
    </Card>
  );
};

export default Home;
