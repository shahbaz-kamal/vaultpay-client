import { Features } from "@/components/modules/HomePage/Features/Features";
import { Hero } from "@/components/modules/HomePage/HeroSection/Hero";



export default function HomePage() {
 return (
    <div className="container mx-auto space-y-6 py-6">
     <Hero></Hero>
     <Features></Features>
    </div>
 );
};

