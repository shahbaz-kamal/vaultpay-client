import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactUsSchema } from "@/schemas/contactUseSchema";
import type { IContactUs } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import contactUsImage from "@/assets/images/contact_us.png";
import { Mail, PhoneCall } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import type { JSX } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ContactInformation {
  name: string;
  icon: JSX.Element;
  title: string;
  data: string;
}

const contactInformation: ContactInformation[] = [
  {
    name: "Phone",
    icon: <PhoneCall size={28} className="text-primary" />,
    title: "Call Us",
    data: "+880 1799839985",
  },
  {
    name: "Email",
    icon: <Mail size={28} className="text-primary" />,
    title: "Write an Email",
    data: "shahbazkamal384@gmail.com",
  },
  {
    name: "Address",
    icon: <FaLocationDot size={28} className="text-primary" />,
    title: "Visit Our Office",
    data: "House: 9, Road: 25, Pallabi, Dhaka",
  },
];

const ContactUs = () => {
  const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactUsSchema>) => {
    const messageData: Partial<IContactUs> = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    if (data.subject) messageData.subject = data.subject;

    console.log("MessageData", messageData);
  };

  useGSAP(() => {
    gsap.from(".animate-heading,.animate-paragraph", {
      opacity: 0,
      letterSpacing: "-6px",
      duration: 1.1,
      ease: "power2.out",
    });
    // gsap.from(".animate-paragraph", {
    //   opacity: 0,
    //   y: 30,
    //   duration: 0.8,
    //   stagger: 0.2,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: ".animate-paragraph",
    //     start: "top 85%",
    //   },
    // });
    // Animate form and form fields
    gsap.from(".animate-form, .animate-form-field", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".animate-form",
        start: "top 85%",
      },
    });

    // Animate image with continuous floating
    gsap.to(".animate-image", {
      y: 20,

      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate contact info cards
    gsap.from(".animate-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".animate-card",
        start: "top 85%",
      },
    });
  }, []);
  return (
    <div className="container mx-auto py-12">
      <h2 id="Contact-us-title-title" className="animate-heading title text-3xl lg:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Contact</span> Us
      </h2>
      <p className="animate-paragraph text-center mt-4">Send Us MEssage</p>
      {/* ---------- Top Section (Form + Image) ---------- */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Form */}
        <div className="animate-form">
          {/* flex w-full h-full items-center justify-center  */}
          <Form {...form}>
            <form className="space-y-4 w-full" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="animate-form-field">
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">Your name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="animate-form-field">
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">Email address</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="animate-form-field">
                    <FormLabel>Message Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Message Subject" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">Subject</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="animate-form-field">
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea className="h-20 lg:h-40" placeholder="Your Message" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">Message</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </Form>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end ">
          <img className="animate-image w-full max-w-sm md:max-w-md object-contain" src={contactUsImage} alt="Contact illustration" />
        </div>
      </div>

      {/* ---------- Contact Information Section ---------- */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactInformation.map((item, index) => (
          <div key={index} className="animate-card flex items-center gap-4 border rounded-lg p-4 bg-background shadow-sm">
            <div>{item.icon}</div>
            <div>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="text-muted-foreground">{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
