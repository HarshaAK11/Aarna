import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import Offerings from "@/components/Offerings";
import HowItWorks from "@/components/HowItWorks";
import Differentiators from "@/components/Differentiators";
import TaglineHero from "@/components/TaglineHero";
import Audience from "@/components/Audience";
import Testimonials from "@/components/Testimonials";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutSection />
      <Offerings />
      <HowItWorks />
      <Differentiators />
      <TaglineHero />
      <Audience />
      <Testimonials />
      <Waitlist />
      <Footer />
    </main>
  );
}
