import { BlueHelix } from "@/assets/icons/BlueHelix";
import { IronCrest } from "@/assets/icons/IronCrest";
import { NovaInvest } from "@/assets/icons/NovaInvest";
import { PrimeCapital } from "@/assets/icons/PrimeCapital";
import { SilverLine } from "@/assets/icons/SilverLine";
import { VertexVenture } from "@/assets/icons/VertexVenture";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { JSX } from "react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <PrimeCapital />,
    name: "Prime Capital",
  },
  {
    icon: <VertexVenture></VertexVenture>,
    name: "Vertex Venture",
  },
  {
    icon: <NovaInvest></NovaInvest>,
    name: "Nova Invest",
  },
  {
    icon: <BlueHelix></BlueHelix>,
    name: "Blue Helix",
  },
  {
    icon: <IronCrest></IronCrest>,
    name: "Iron Crest",
  },
  {
    icon: <SilverLine></SilverLine>,
    name: "Silver Line",
  },
];

export const Investors = () => {

    useGSAP(() => {
        gsap.from(".investor-item", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: "#sponsors",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }, []);
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">Investors and founders</h2>

      <div className="flex flex-wrap justify-center xl:justify-between items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div key={name} className="investor-item flex items-center gap-3 text-muted-foreground/60">
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
