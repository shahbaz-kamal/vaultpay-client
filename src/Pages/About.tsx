import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import aboutBg from '@/assets/images/about_bg.jpg'

export default function About() {
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const missionRef = useRef(null);

  // ABOUT SECTION ANIMATION
  useGSAP(() => {
    if (!aboutRef.current) return;

    const q = gsap.utils.selector(aboutRef.current);

    gsap.from(q(".about-animate"), {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });
  }, []);

  // WHY VAULTPAY SECTION

  useGSAP(() => {
    if (!whyRef.current) return;

    const q = gsap.utils.selector(whyRef.current);

    gsap.from(q(".why-animate"), {
      opacity: 0,
      y: 35,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: whyRef.current,
        start: "top 60%",
      },
    });
  }, []);

  useGSAP(() => {
    if (!missionRef.current) return;

    const q = gsap.utils.selector(missionRef.current);

    gsap.from(q(".mission-animate"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <title className="font-bold text-primary"> About || Vaultpay</title>
      {/*         ABOUT SECTION          */}

      <section ref={aboutRef} className="bg-background sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="about-animate text-2xl font-bold text-foreground md:text-3xl">
              Powering Fast, Secure & Smarter Payments for Everyone
            </h2>

            <p className="about-animate hidden text-muted-foreground md:mt-4 md:block">
              VaultPay provides seamless, secure, and lightning-fast digital payments. Whether you're paying bills, transferring funds, or
              managing daily expenses—VaultPay makes it effortless.
            </p>

            <div className="about-animate mt-4 md:mt-8">
              <a
                href="/register"
                className="inline-block rounded-sm bg-primary px-12 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/80 focus:ring-2 focus:ring-ring focus:outline-hidden"
              >
                Start Using VaultPay
              </a>
            </div>
          </div>
        </div>

        <img
          alt="VaultPay payment illustration"
          src={aboutBg}
          className="about-animate h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%-4rem)] md:rounded-ss-[60px]"
        />
      </section>

   
      {/*       WHY VAULTPAY SECTION     */}
     
      <section ref={whyRef} id="why-vaultpay" className="container mx-auto px-4 py-10 mt-10">
        <h2 className="why-animate text-3xl font-bold text-center text-foreground">
          Why <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">VaultPay?</span>
        </h2>

        <p className="why-animate max-w-2xl mx-auto text-center text-muted-foreground mt-4">
          Our platform delivers fast, secure, and reliable transactions—built for modern financial needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Bank-Grade Security",
              desc: "Protected with industry-leading encryption and secure authentication.",
            },
            {
              title: "Instant Transfers",
              desc: "Fund transfers that reach their destination in seconds, not hours.",
            },
            {
              title: "Always Available",
              desc: "99.99% uptime ensures your financial tools never stop working.",
            },
          ].map((item) => (
            <div key={item.title} className="why-animate p-6 rounded-lg border bg-background shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ */}
      {/*        MISSION SECTION          */}
      {/* ------------------------------ */}
      <section ref={missionRef} id="mission" className="container mx-auto px-4 py-10">
        <h2 className="mission-animate text-3xl font-bold text-center bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          Our Mission
        </h2>

        <p className="mission-animate max-w-2xl mx-auto text-center text-muted-foreground mt-4">
          We aim to redefine digital payments by making them instant, universally accessible, and truly secure—empowering people and
          businesses everywhere.
        </p>
      </section>
    </div>
  );
}
