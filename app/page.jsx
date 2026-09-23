import Header from "@/components/Global/Header";
import HeroSection from "@/components/Home/HeroSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import AboutSection from "@/components/Home/AboutSection";
import FeatureFocusSection from "@/components/Home/FeatureFocusSection";
import FeatureBenefitSection from "@/components/Home/FeatureBenefitSection";
import DoctorNetworkSection from "@/components/Home/DoctorNetworkSection";
import ProductTourSection from "@/components/Home/ProductTourSection";
import WhyChooseAccordionSection from "@/components/Home/WhyChooseAccordionSection";
import WebAppSection from "@/components/Home/WebAppSection";
import PricingSection from "@/components/Home/PricingSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import NewsSection from "@/components/Home/NewsSection";
import Footer from "@/components/Global/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <AboutSection />
        <FeatureFocusSection />
        <FeatureBenefitSection />
        <DoctorNetworkSection />
        {/* <ProductTourSection />
        <WhyChooseAccordionSection />
        <WebAppSection />
        <PricingSection />
        <TestimonialSection /> */}
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
