import AboutCompany from "@/src/components/modules/about/AboutCompany";
import AboutUsBanner from "@/src/components/modules/about/AboutUsBanner";
import OurLocation from "@/src/components/modules/about/OurLocation";
import OurTeam from "@/src/components/modules/about/OurTeam";
import { Card } from "@nextui-org/card";

export default function AboutPage() {
  return (
    <div>
      <AboutUsBanner />
      <Card>
        <AboutCompany />
        <OurTeam />
        <OurLocation />
      </Card>
    </div>
  );
}
