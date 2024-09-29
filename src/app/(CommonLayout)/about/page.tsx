import AboutCompany from "@/src/components/modules/about/AboutCompany";
import AboutUsBanner from "@/src/components/modules/about/AboutUsBanner";
import { title } from "@/src/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <AboutUsBanner />
      <AboutCompany />
    </div>
  );
}
