import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import addMoney from "@/assets/images/addMoney.png";
import sendMoney from "@/assets/images/sendMoney.png";
import cashIn from "@/assets/images/cashIn.png";
import cashOut from "@/assets/images/cashOut.png";
import { Badge } from "@/components/ui/badge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Add Money Instantly",
    description: "Top-up your VaultPay wallet in seconds using bank transfer, card, or mobile banking. Designed for speed and reliability.",
    image: addMoney,
  },
  {
    title: "Send Money Effortlessly",
    description: "Transfer funds to anyone securely with a clean and intuitive interface. No friction, just fast and smooth payments.",
    image: sendMoney,
  },
  {
    title: "Cash-In From Any Partner Agent",
    description: "Deposit money into your VaultPay account through verified agents. Optimized for convenience and safety.",
    image: cashIn,
  },
  {
    title: "Cash-Out Anywhere",
    description: "Withdraw your wallet balance from any partnered cash-out point. Simple, fast, and always secure.",
    image: cashOut,
  },
];

const featureList: string[] = [
  "Add Money",
  "Send Money",
  "Cash In",
  "Cash Out",
  "Real-Time Security Alerts",
  "Dark/Light Theme",
  "Transaction Insights",
  "Smart Dashboard",
  "24/7 Support",
  "User Reviews",
];

export const Features = () => {
  useGSAP(() => {
    // Master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#features",
        start: "top 70%", // animation starts when 75% of the section is visible
        toggleActions: "play none none none",
      },
    });

    tl.from("#features-title", {
      opacity: 0,
      letterSpacing: "-6px",
      duration: 1,
      ease: "power2.out",
    })
      .from(
        ".feature-badge",
        {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.05,
        },
        "-=0.2"
      )
      .from(
        ".feature-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.92,
          duration: 0.5,
          ease: "expo.out",
          stagger: 0.1,
        },
        "-=0.1"
      );

    // Floating animation (runs continuously)
    gsap.to(".feature-img", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    
  }, []);
  return (
    <section id="features" className="container  space-y-8 px-4 md:px-0">
      <h2 id="features-title" className="title text-3xl lg:text-4xl font-bold text-center">
        Many <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Great Features</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm feature-badge">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="feature-card">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img src={image} alt="About feature" className="feature-img w-[200px] lg:w-[300px] mx-auto" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
