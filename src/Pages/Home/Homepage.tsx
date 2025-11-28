import { Features } from "@/components/modules/HomePage/Features/Features";
import { Hero } from "@/components/modules/HomePage/HeroSection/Hero";
import { Investors } from "@/components/modules/HomePage/Investor/Investor";



export default function HomePage() {
 return (
    <div className="container mx-auto space-y-20   py-6">
     <Hero></Hero>
     <Investors></Investors>
     <Features></Features>
    </div>
 );
};

