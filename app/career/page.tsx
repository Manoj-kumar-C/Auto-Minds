import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack/TechStack";
import Testimonials from "@/components/Testimonials";
import Career from "@/components/career";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Career Page"
        description="Intrested to join our team."
      />

      <Career />
      <TechStack/>
      <Testimonials />
      
    </>
  );
};

export default CareerPage;
