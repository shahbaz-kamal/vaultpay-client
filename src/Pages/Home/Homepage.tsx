import { Crew } from "@/components/modules/HomePage/Crew/Crew";
import { FAQ } from "@/components/modules/HomePage/FAQ/FAQ";
import { Features } from "@/components/modules/HomePage/Features/Features";
import { Hero } from "@/components/modules/HomePage/HeroSection/Hero";
import { HowItWorks } from "@/components/modules/HomePage/HowItWorks/HowItWorks";
import { Investors } from "@/components/modules/HomePage/Investor/Investor";
import NewsLetter from "@/components/modules/HomePage/NewsLetter/NewsLetter";
import { Testimonials } from "@/components/modules/HomePage/Testimonial/Testimonial";

import "./Homepage.css";

export default function HomePage() {
  return (
    <div className="w-full space-y-20   py-6">
      <Hero></Hero>
      <Investors></Investors>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <Crew></Crew>
      <FAQ></FAQ>
      <div id="news-letter" className=" bg-background/60 py-28 px-4">
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
}
