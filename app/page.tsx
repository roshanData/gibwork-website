import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { StatsStrip } from "@/components/stats-strip";
import { LogoList } from "@/components/logo-list";
import { CryptoNative } from "@/components/crypto-native";
import { LookingFor } from "@/components/looking-for";
import { Testimonial } from "@/components/testimonial";
import { CTA } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col z-0 relative">
      <Nav />
      <Hero />
      <StatsStrip />
      <LogoList />
      <CryptoNative />
      <LookingFor />
      <Testimonial />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
}
