import AboutCompany from "@/src/components/modules/about/AboutCompany";
import AboutUsBanner from "@/src/components/modules/about/AboutUsBanner";
import OurLocation from "@/src/components/modules/about/OurLocation";
import OurTeam from "@/src/components/modules/about/OurTeam";

export default function AboutPage() {
  return (
    <div>
      <AboutUsBanner />
      <AboutCompany />
      <OurTeam />
      <OurLocation />
    </div>
  );
}
