import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const Career = () => {
  const [openingData] = useState([]);

  const heroRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const openRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
    });

    if (whyRef.current) {
      gsap.from(whyRef.current.querySelectorAll(".why-animate"), {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 85%",
        },
      });
    }

    if (openRef.current) {
      gsap.from(openRef.current.querySelectorAll(".open-animate"), {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: openRef.current,
          start: "top 85%",
        },
      });
    }

    if (cultureRef.current) {
      gsap.from(cultureRef.current.querySelectorAll(".culture-animate"), {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cultureRef.current,
          start: "top 85%",
        },
      });
    }

  if(ctaRef.current){
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
      },
    });
  }
  }, [openingData]);

  return (
    <div className="space-y-20 container mx-auto">
      <title> Career || Vaultpay</title>
      {/* ======================= HERO SECTION ======================= */}
      <section ref={heroRef} className="bg-gradient-to-b from-primary/10 to-background py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Build the Future of Payments with <span className="text-primary">VaultPay</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Join a fast-moving fintech team creating secure, seamless, and innovative payment solutions for businesses and users worldwide.
        </p>
      </section>

      {/* ======================= WHY JOIN US ======================= */}
      <section ref={whyRef} className="px-6  mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Why Work at <span className="text-primary">VaultPay?</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm bg-background hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-foreground">🚀 Fast-Growing Fintech</h3>
            <p className="mt-2 text-muted-foreground">
              Be part of a rising platform transforming how people send, receive, and manage digital payments.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-background hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-foreground">🔐 Secure Tech Stack</h3>
            <p className="mt-2 text-muted-foreground">
              Work with cutting-edge technologies designed for security, scalability, and reliability.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-background hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-foreground">🌍 Remote-Friendly Culture</h3>
            <p className="mt-2 text-muted-foreground">
              Collaborate with talented people in a flexible, supportive, and remote-friendly environment.
            </p>
          </div>
        </div>
      </section>

      {/* ======================= OPEN POSITIONS ======================= */}
      <section ref={openRef} className="bg-muted/30 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-primary">Open Positions</h2>

        {/* CONDITION 1: No job openings */}
        {openingData.length === 0 && (
          <p className="text-center text-muted-foreground mt-6 text-lg">
            🚫 There are no job openings right now.
            <br />
            Please check back later.
          </p>
        )}

        {/* CONDITION 2: Show job openings */}
        {/* {openingData.length > 0 && (
          <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {openingData.map((job, index) => (
              <div key={index} className="open-animate p-6 border rounded-xl bg-background shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-muted-foreground mt-2">{job.description}</p>

                <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/80 transition w-full">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )} */}
      </section>

      {/* ======================= CULTURE SECTION ======================= */}
      <section ref={cultureRef} className="px-6  mx-auto py-10">
        <h2 className="text-3xl font-bold text-center text-primary">Our Culture</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-background border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">💡 Innovation Focused</h3>
            <p className="text-muted-foreground mt-2">We experiment fast, learn fast, and ship impactful solutions that matter.</p>
          </div>

          <div className="p-6 bg-background border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">🤝 Team First</h3>
            <p className="text-muted-foreground mt-2">A collaborative environment where everyone’s voice matters.</p>
          </div>

          <div className="p-6 bg-background border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">📚 Growth Mindset</h3>
            <p className="text-muted-foreground mt-2">We support learning, skill development, and continuous improvement.</p>
          </div>
        </div>
      </section>

      {/* ======================= CTA SECTION ======================= */}
      <section ref={ctaRef} className="py-16 text-center px-6 bg-primary/10 rounded-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground">Ready to Join VaultPay?</h2>
        <p className="text-muted-foreground mt-2">Be part of a team building secure, intelligent, and next-gen payment technology.</p>
        <button className="mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition">
          Explore Opportunities
        </button>
      </section>
    </div>
  );
};

export default Career;
