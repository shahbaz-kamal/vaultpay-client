import { Crew } from "@/components/modules/HomePage/Crew/Crew";
import { Features } from "@/components/modules/HomePage/Features/Features";
import { Hero } from "@/components/modules/HomePage/HeroSection/Hero";
import { HowItWorks } from "@/components/modules/HomePage/HowItWorks/HowItWorks";
import { Investors } from "@/components/modules/HomePage/Investor/Investor";
import { Testimonials } from "@/components/modules/HomePage/Testimonial/Testimonial";



export default function HomePage() {
 return (
    <div className="container mx-auto space-y-20   py-6">
     <Hero></Hero>
     <Investors></Investors>
     <Features></Features>
     <HowItWorks></HowItWorks>
     <Testimonials></Testimonials>
     <Crew></Crew>
    </div>
 );
};

