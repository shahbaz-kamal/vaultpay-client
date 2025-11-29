import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

interface FAQProps {
  content: string;
  title: string;
  id: string;
}

const FAQList: FAQProps[] = [
  {
    content: "VaultPay is a secure and fast digital payment platform designed for modern transactions.",
    id: "1",
    title: "What is VaultPay?",
  },
  {
    content: "Yes. VaultPay uses advanced encryption and multi-layer security to protect every transaction.",
    id: "2",
    title: "Is VaultPay safe to use?",
  },
  {
    content: "Yes. You can send and receive payments globally depending on your account type.",
    id: "3",
    title: "Does VaultPay support international payments?",
  },
  {
    content: "Most VaultPay transactions are processed instantly, with minimal delays during peak hours.",
    id: "4",
    title: "How fast are the transactions?",
  },
  {
    content: "No. Creating a VaultPay account is completely free with no initial setup cost.",
    id: "5",
    title: "Is there any setup fee?",
  },
  {
    content: "Yes. VaultPay includes tools for invoicing, analytics, and secure business payments.",
    id: "6",
    title: "Can businesses use VaultPay?",
  },
  {
    content: "Yes. Our support team is available 24/7 to assist users with any issues or questions.",
    id: "7",
    title: "Do you offer customer support?",
  },
  {
    content: "Yes. VaultPay provides developer-friendly APIs for seamless app and website integration.",
    id: "8",
    title: "Can I integrate VaultPay in my app?",
  },
];

export const FAQ = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#faq",
        start: "top 70%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.from("#faq h2", {
      opacity: 0,
      letterSpacing: "-6px",
      duration: 0.5,
      ease: "power2.out",
    })

      .from(
        ".faq-accordion-item",
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      // Animate contact link
      .from(
        ".faq-contact",
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <section id="faq" className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Frequently Asked <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Questions</span>
      </h2>

      <Accordion className="w-full space-y-2" collapsible defaultValue="3" type="single">
        {FAQList.map((list) => (
          <AccordionItem
            className="faq-accordion-item rounded-md border bg-background px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
            key={list.id}
            value={list.id}
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left font-semibold text-[15px] leading-6 outline-none ocus-visible:ring-0 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                {list.title}
                <PlusIcon
                  aria-hidden="true"
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  size={16}
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2 text-muted-foreground">{list.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="faq-contact font-medium mt-6 text-center ">
        Still have questions?{" "}
        <a rel="noreferrer noopener" href="#" className="text-primary transition-all border-primary hover:border-b-2">
          Contact us
        </a>
      </h3>
    </section>
  );
};
