import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Accordion from "@/components/Accordian/Accordian";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import TitleService from "@/components/Common/TitleService";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import FeaturesTwo from "@/components/FeaturesTwo";
import Hero from "@/components/Hero";
import HomeSectionOne from "@/components/Home/HomeSectionOne";
import HomeSectionTwo from "@/components/Home/HomeSectionTwo";
import Maps from "@/components/Maps/Maps";
import Pricing from "@/components/Pricing";
import TechStack from "@/components/TechStack/TechStack";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import ClientComponent from "@/components/client/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Minds - designed by Fresh Spar Technologies ",
  description: "Designed by Fresh Spar Technologies",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      
      <Video />
      <Brands />
      <HomeSectionOne /><br /><br />
      <TitleService title="Our "
          paragraph="We provide services in various Fields"
          center
          mb="80px" />
      <Features />
      {/* <HomeSectionTwo /> */}
      {/*
      <TitleService title="Our Marketing"
          paragraph="We provide various marketing services in various Fields"
          center
          mb="80px" />
      <FeaturesTwo />
      */}
      <Testimonials />
  
      <ClientComponent/>
      <Maps />
      {/* <Accordion data={[
        { title: 'Section 1', content: 'Content for section 1' },
        { title: 'Section 2', content: 'Content for section 2' },
        { title: 'Section 3', content: 'Content for section 3' },
      ]} /> */}
      {/* <TestSection />
      <TechStack /> */}
      {/* <Pricing />
      <Blog /> */}
      {/* <Contact /> */}
      {/* <TestFeatures /> */}
    </>
  );
}
