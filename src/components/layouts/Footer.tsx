import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Logo } from "@/assets/icons/Logo";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useGSAP } from "@gsap/react";

const socials = [
  {link:"https://www.facebook.com/tamim.chowdhury.543/",
    label: "Facebook",
    icon: <FaFacebook></FaFacebook>,
  },

  {link:"https://www.linkedin.com/in/shahbaz-kamal/",
    label: "LinkedIn",
    icon: <FaLinkedin></FaLinkedin>,
  },
  {link:"https://github.com/shahbaz-kamal",
    label: "Github",
    icon: <FaGithub></FaGithub>,
  },
];
export function Footer() {
  useGSAP(() => {
    const footer = document.getElementById("footer-section");
    if (!footer) return;

    const items = footer.querySelectorAll(".footer-animate");

    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <footer id="footer-section" className="bg-background  py-10 mt-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="footer-animate mb-6 text-foreground">
          <Logo />
        </div>

        {/* Description */}
        <p className="footer-animate max-w-md text-center text-muted-foreground leading-relaxed">
          Stay connected with VaultPay. Explore insights, updates, and useful resources crafted to help you stay informed.
        </p>

        {/* Navigation links */}
        <ul className="footer-animate mt-10 flex flex-wrap justify-between w-full gap-6 md:gap-10">
          {["About", "Careers", "History", "Services", "Projects", "Blog"].map((item) => (
            <li key={item}>
              <a href="#" className="text-foreground transition hover:text-foreground/70">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <ul className="footer-animate mt-10 flex gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.link} className="text-foreground transition hover:text-foreground/70">
                <span className="sr-only">{s.label}</span>
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-animate mx-auto flex max-w-7xl justify-center px-4 mt-10  sm:px-6">
          <p className="text-center font-medium text-balance text-muted-foreground">
            {`©${new Date().getFullYear()}`} VaultPay — Made with dedication to redefine modern payments.
          </p>
        </div>
      </div>
    </footer>
  );
}
