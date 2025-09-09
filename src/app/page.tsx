import Image from "next/image";
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
    </>
  );
}
