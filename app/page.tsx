import AboutSection from "@/components/AboutSection";
import ChooseUs from "@/components/ChooseUs";
import ContactUs from "@/components/ContactUs";
import ControlSection from "@/components/ControlSection";
import HeroSection from "@/components/HeroSection";
import InvestSection from "@/components/InvestSection";
import NewBuildings from "@/components/NewBuildings";
import SumIpoteka from "@/components/SumIpoteka";
import Vlog from "@/components/Vlog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InvestSection />
      <ControlSection />
      <ChooseUs />
      <NewBuildings />
      <SumIpoteka />
      <ContactUs />
      <Vlog />
    </>
  )
}

