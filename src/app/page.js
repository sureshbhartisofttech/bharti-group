import Image from "next/image";
import Header from "./component/common/Header";
import HeroSection from "./component/Home/HeroSection";
import OurCompanies from "./component/Home/OurCompanies";
import Partener from "./component/Home/Partener";
import Footer from "./component/common/Footer";
import WhyChooseUs from "./component/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurCompanies />
      <WhyChooseUs />
      <Partener />
      <Footer />
    </>
  );
}
