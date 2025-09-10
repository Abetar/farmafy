import Image from "next/image";
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import SecurityHighlights from "./components/SecurityHighlights";
import FAQs from "./components/FAQs";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <SecurityHighlights />
      <Pricing />
      <FAQs />
    </>
  );
}
