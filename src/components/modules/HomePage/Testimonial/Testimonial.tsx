import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonialData(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(testimonialData);

  useGSAP(() => {
    if (testimonialData.length === 0) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
    tl.from(".testimonial-title", {
      opacity: 0,
      letterSpacing: "-6px",
      duration: 1,
      ease: "power2.out",
    })
      .from(
        ".testimonial-description",
        {
          opacity: 0,
          y: 20,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(".testimonial-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      })
     
  }, [testimonialData]);
  return (
    <section id="testimonials" className="container mx-auto px-4 md:px-0">
      <h2 className="testimonial-title text-3xl md:text-4xl font-bold text-center ">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"> People Love </span>
        VaultPay
      </h2>

      <p className="testimonial-description text-xl text-muted-foreground pt-4 pb-8 text-center ">
        See how real users rely on VaultPay for fast, secure, and effortless transactions every day.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonialData.map(({ name, email, photoUrl, description }) => (
          <Card key={name} className=" testimonial-card max-w-md md:break-inside-avoid overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt="" src={photoUrl} />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{email}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
