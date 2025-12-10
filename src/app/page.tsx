"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import FeatureList from "@/components/FeatureList";
import HeroFull from "@/components/HeroFull";
import ContentCards from "@/components/ContentCards";
import QuoteForm from "@/components/QuoteForm";
import CollageHero from "@/components/CollageHero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeatureWithCard from "@/components/FeatureWithCard";
import ImageCardCarousel from "@/components/ImageCardCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="font-inter">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <Image
          src="/Bg-Graphic.png"
          alt="Background"
          fill
          className="-z-10 mt-58"
          priority
        />
        <FeatureSection />
        <FeatureList />
      </div>
      <HeroFull />
      <ContentCards />
      <QuoteForm />
      <CollageHero />
      <TestimonialCarousel />
      <FeatureWithCard />
      <ImageCardCarousel />
      <FaqAccordion />
      <Footer />
    </div>
  );
}
