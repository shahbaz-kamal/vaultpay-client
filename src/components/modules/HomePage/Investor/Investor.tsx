import { BlueHelix } from "@/assets/icons/BlueHelix";
import { IronCrest } from "@/assets/icons/IronCrest";
import { NovaInvest } from "@/assets/icons/NovaInvest";
import { PrimeCapital } from "@/assets/icons/PrimeCapital";
import { SilverLine } from "@/assets/icons/SilverLine";
import { VertexVenture } from "@/assets/icons/VertexVenture";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

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
      delay: 0.2,
      scrollTrigger: {
        trigger: "#sponsors",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".title-header", {
      opacity: 0,
      letterSpacing: "-6px",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#sponsors",
        start: "top 90%",
      },
    });
  }, []);
  return (
    <section id="sponsors" className="container mx-auto mt-0 xl:mt-28  px-4 md:px-0 ">
      <h2 className="title-header text-center text-3xl lg:text-4xl font-bold mb-8 text-primary ">Investors and founders</h2>

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
