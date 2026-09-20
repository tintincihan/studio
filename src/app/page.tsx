import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import TrustCounters from "@/components/TrustCounters";
import Services from "@/components/Services";
import VekaletnameProcess from "@/components/VekaletnameProcess";
import ServiceAreas from "@/components/ServiceAreas";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <TrustCounters />
        <Services />
        <VekaletnameProcess />
        <ServiceAreas />
        <WhyUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
