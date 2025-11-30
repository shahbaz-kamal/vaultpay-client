import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState, type JSX } from "react";

import image from "@/assets/images/addMoney.png";
import {
  LogIn,
  UserPlus,
  CreditCard,
  Receipt,
  ArrowRightLeft,
  Send,
  UserCheck,
  Wallet,
  DollarSign,
  HandCoins,
  BadgeCheck,
  ClipboardList,
  CheckCircle,
  ArrowBigLeft,
  ArrowBigRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface FeatureProps {
  name: string;
  data: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}

const featureData: FeatureProps[] = [
  ////  ADD MONEY
  {
    name: "Add Money",
    data: [
      {
        title: "Login / Register",
        description: "Sign in to your VaultPay account or create one if you're new.",
        icon: <LogIn size={28} color="#ff6900" />,
      },
      {
        title: "Go to Add Money",
        description: "Open your dashboard and select the “Add Money” option.",
        icon: <CreditCard size={28} color="#ff6900" />,
      },
      {
        title: "Enter Amount & Details",
        description: "Type the desired amount and add a note before continuing.",
        icon: <ClipboardList size={28} color="#ff6900" />,
      },
      {
        title: "Complete Secure Payment",
        description: "You’ll be redirected to the SSLCommerz payment page to finalize your transaction securely.",
        icon: <Receipt size={28} color="#ff6900" />,
      },
    ],
  },

  ////SEND MONEY
  {
    name: "Send Money",
    data: [
      {
        title: "Login / Register",
        description: "Access your VaultPay account or sign up instantly.",
        icon: <LogIn size={28} color="#ff6900" />,
      },
      {
        title: "Go to Send Money",
        description: "From your dashboard, choose the 'Send Money' option.",
        icon: <ArrowRightLeft size={28} color="#ff6900" />,
      },
      {
        title: "Provide Receiver Details",
        description: "Enter the recipient’s email, amount, and an optional note.",
        icon: <Send size={28} color="#ff6900" />,
      },
      {
        title: "Confirm Transfer",
        description: "Review the information and click ‘Send Money’ to complete the transfer.",
        icon: <CheckCircle size={28} color="#ff6900" />,
      },
    ],
  },

  // // CASH IN
  {
    name: "Cash In",
    data: [
      {
        title: "Login / Register",
        description: "Sign in to continue or register to start using VaultPay.",
        icon: <LogIn size={28} color="#ff6900" />,
      },
      {
        title: "Become an Agent",
        description: "Contact support to enable agent access (skip if already an agent).",
        icon: <UserCheck size={28} color="#ff6900" />,
      },
      {
        title: "Go to Cash In",
        description: "Navigate to the dashboard and select the ‘Cash In’ option.",
        icon: <HandCoins size={28} color="#ff6900" />,
      },
      {
        title: "Enter Cash-In Details",
        description: "Provide the user’s email and amount to deposit, then click ‘Cash In’.",
        icon: <ClipboardList size={28} color="#ff6900" />,
      },
    ],
  },

  // //CASH OUT
  {
    name: "Cash Out",
    data: [
      {
        title: "Login / Register",
        description: "Sign in or register using your email. Google users can skip verification.",
        icon: <LogIn size={28} color="#ff6900" />,
      },
      {
        title: "Go to Cash Out",
        description: "Open your dashboard and select the ‘Cash Out’ option.",
        icon: <Wallet size={28} color="#ff6900" />,
      },
      {
        title: "Enter Withdrawal Amount",
        description: "Type the amount you want to withdraw and provide required details.",
        icon: <DollarSign size={28} color="#ff6900" />,
      },
      {
        title: "Confirm Cash Out",
        description: "Review your request and confirm to complete the process.",
        icon: <BadgeCheck size={28} color="#ff6900" />,
      },
    ],
  },
];

export const HowItWorks = () => {

  const containerRef = useRef<HTMLElement | null>(null);
  const initialAnimatedRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalTransactionType = featureData.length;

  const goToSlide = (index: number) => {
    const newIndex = (index + totalTransactionType) % totalTransactionType;
    setCurrentIndex(newIndex);
  };

  useGSAP(() => {
    // Master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#howItWorks",
        start: "top 75%", // animation starts when 75% of the section is visible
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.from("#howItWorks-title", {
      opacity: 0,
      letterSpacing: "-6px",
      duration: 0.2,
      ease: "power2.out",
    })
      .from(
        ".howItWorks-description",
        {
          opacity: 0,
          y: 20,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .from(
        ".howItWorks-nav-item",
        {
          opacity: 0,
          y: 20,
          duration: 0.2,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.1"
      )

      // 4️⃣ Left Arrow
      .from(
        ".left-arrow",
        {
          opacity: 0,
          x: -20,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .from(
        ".howItWorks-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.92,
          duration: 0.2,
          ease: "expo.out",
          stagger: 0.15,
        },
        "-=0.1"
      )
      // 6️⃣ Right Arrow
      .from(".right-arrow", {
        opacity: 0,
        x: 20,
        duration: 0.2,
        ease: "power2.out",
      });

      tl.call(() => {
        initialAnimatedRef.current = true;
        // ensure final visible state and remove the inline transform/opacity that GSAP applied during enter
        // so future animations don't conflict with those inline values.
        gsap.set(".howItWorks-card", { opacity: 1, y: 0, scale: 1, clearProps: "all" });
        gsap.set([".left-arrow", ".right-arrow", ".howItWorks-nav-item"], { clearProps: "all" });
      });
  }, []);

  // useGSAP(
  //   () => {
  //     const cards = gsap.utils.toArray(".howItWorks-card");
  
  //     // reset instantly BEFORE animation (no flicker)
  //     gsap.set(cards, { opacity: 0, y: 40, scale: 0.92 });
  
  //     // animate in
  //     gsap.to(cards, {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       duration: 0.35,
  //       ease: "power2.out",
  //       stagger: 0.1,
  //     });
  //   },
  //   { dependencies: [currentIndex], scope: currentRef }
  // );
  
  useEffect(() => {
    if (!initialAnimatedRef.current) return; 
    const cards = gsap.utils.toArray<HTMLDivElement>(".howItWorks-card");
  

    gsap.fromTo(
      cards,
      { y: 40 }, // do not touch opacity or scale
      {
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.15,
        overwrite: "auto",
      }
    );
  }, [currentIndex]);

  return (
    <section id="howItWorks" className="container  mx-auto px-4 md:px-0">
      <h2 id="howItWorks-title" className="text-3xl md:text-4xl font-bold text-center">
        How It <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Works </span>
        Step-by-Step Guide
      </h2>
      <p className="howItWorks-description md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground text-center">
        Follow these simple steps to navigate through VaultPay's key features and make the most of your digital wallet experience.
      </p>

      <nav className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10  mb-8 relative z-10 md:max-w-6xl md:mx-auto ">
        {featureData.map((feature, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              onClick={() => goToSlide(index)}
              key={index}
              className={`howItWorks-nav-item md:text-xl text-lg pb-2 cursor-pointer hover:text-primary hover:border-primary border-b-1 transition-colors 
            ${isActive ? "text-primary border-primary font-bold" : " text-muted-foreground  font-medium border-muted-foreground/50"}
         `}
            >
              <CardTitle> {feature.name}</CardTitle>
            </button>
          );
        })}
      </nav>
      {/* content */}
      <div className="relative w-full flex justify-center items-center gap-2 ">
        <button
          className="left-arrow text-primary absolute -left-10 top-1/2 -translate-y-1/2 z-20"
          onClick={() => goToSlide(currentIndex - 1)}
        >
          <ArrowBigLeft size={30} />
        </button>
        <button
          className="right-arrow absolute text-primary  -right-10 top-1/2 -translate-y-1/2 z-20"
          onClick={() => goToSlide(currentIndex + 1)}
        >
          <ArrowBigRight size={30} />
        </button>

        <div ref={containerRef} className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          {featureData[currentIndex].data.map((steps, idx) => (
            
            <Card key={idx} className="bg-muted/50 howItWorks-card">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {steps.icon}
                  {steps.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{steps.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
