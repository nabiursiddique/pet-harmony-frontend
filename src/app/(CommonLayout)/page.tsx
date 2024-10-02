import Landing from "@/src/components/modules/home/Landing";
import OurJourney from "@/src/components/modules/home/OurJourney";
import WhatDoWeDo from "@/src/components/modules/home/WhatDoWeDo";
import { Card } from "@nextui-org/card";

const Home = () => {
  return (
    <Card>
      <Landing />
      <WhatDoWeDo />
      <OurJourney />
    </Card>
  );
};

export default Home;
