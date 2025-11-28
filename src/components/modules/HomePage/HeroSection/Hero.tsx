

import { Button, buttonVariants } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { HeroCards } from "./HeroCards";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export const Hero = () => {
  useGSAP(() => {
    const sandwitchTopSplit = new SplitText(".sandwitch-top", { type: "lines" });
    const sandwitchMiddleSplit = new SplitText(".sandwitch-middle", { type: "lines" });

    gsap.from(sandwitchTopSplit.lines, {
      opacity: 0,
      yPercent: -100,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(sandwitchMiddleSplit.lines, {
      opacity: 0,
      yPercent: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(".sandwitch-bottom", {
      opacity: 0,
      yPercent: 100,
      duration: 1.2,
      ease: "expo.out",
      // stagger: 0.06,
    });
  }, []);

  return (
    <section className="container grid xl:grid-cols-2 place-items-center py-0 xl:py-10 gap-10 px-4 md:px-0 ">
      <div className="text-center xl:text-start space-y-6 ">
        <main className="text-5xl md:text-6xl font-bold sandwitch-top">
          <h1 className="inline">
            <span className="  inline bg-gradient-to-r from-[#ff6900]  to-[oklch(0.47_0.157_37.304)] text-transparent bg-clip-text">
              VaultPay
            </span>{" "}
            digital wallet
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r to-[oklch(0.47_0.157_37.304)]  via-[oklch(0.553_0.195_38.402)] from-[oklch(0.646_0.222_41.116)] text-transparent bg-clip-text">
              secure
            </span>{" "}
            transactions
          </h2>
        </main>

        <p className="sandwitch-middle text-xl text-muted-foreground md:w-10/12 mx-auto xl:mx-0">
          Build your React landing page effortlessly with the required sections to your project.
        </p>

        <div className="sandwitch-bottom space-y-4 md:space-y-0 md:space-x-4 ">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/shahbaz-kamal/vaultpay-client"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <FaGithub className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 hidden xl:block">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
