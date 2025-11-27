// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
import LoadingPage from "@/components/layouts/LoadingPage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import type { ITestimonial } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, Github, LightbulbIcon, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
// import { LightBulbIcon } from "./Icons";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  const [testimonialData, setTestimonialData] = useState<ITestimonial[]>([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonialData(data))
      .catch((error) => console.log(error));
  }, []);
  useGSAP(()=>{
    gsap.from('.sandwitch-top-card', {
      opacity: 0,
      yPercent: -100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from('.sandwitch-bottom-card', {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
  },[])
  console.log(testimonialData);
  if (!testimonialData) return <LoadingPage></LoadingPage>;
  const firstReview = testimonialData[0];
  const secondReview = testimonialData[1];




  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="sandwitch-top-card absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src={firstReview?.photoUrl || "https://i.pravatar.cc/150?img=32"} />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">{firstReview?.name}</CardTitle>
            <CardDescription>{firstReview?.email}</CardDescription>
          </div>
        </CardHeader>

        <CardContent>{firstReview?.description}</CardContent>
      </Card>

      {/* Team */}
      <Card className="sandwitch-top-card absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={secondReview?.photoUrl || "https://i.pravatar.cc/150?img=58"}
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">{secondReview?.name || "Leo Miranda"}</CardTitle>
          <CardDescription className="font-normal text-primary">{secondReview?.title || "Full Stack Developer"}</CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            {secondReview?.description.slice(0, 200) ||
              " I really enjoy transforming ideas into functional software that exceeds expectations"}
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/shahbaz-kamal"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <Github className="w-5 h-5" />
            </a>
            {/* <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a> */}

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/shahbaz-kamal/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="sandwitch-bottom-card absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free Add Money
            <Badge variant="secondary" className="text-sm text-primary">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">৳0</span>
            <span className="text-muted-foreground"> /Cash In</span>
          </div>
          <div>
            <span className="text-3xl font-bold">৳0</span>
            <span className="text-muted-foreground"> /Add Money</span>
          </div>
          <div>
            <span className="text-3xl font-bold">৳20</span>
            <span className="text-muted-foreground"> /1000 BDT Cash Out</span>
          </div>
          <div>
            <span className="text-3xl font-bold">৳5</span>
            <span className="text-muted-foreground"> /send Money</span>
          </div>

          {/* <CardDescription>
            Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
          </CardDescription> */}
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Email Transaction invoice", "View all Trasnaction History"].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" /> <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="sandwitch-bottom-card absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightbulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              Switch instantly between beautiful light and dark themes for optimal viewing day or night.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
