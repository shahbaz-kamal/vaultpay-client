import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGetNewsLetterInfoQuery, useStoreNewsLetterMutation } from "@/redux/features/newsLetter/newLetter.api";

import { newsLetterSchema } from "@/schemas/newsLetterSchema";
import { useGSAP } from "@gsap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";

export default function NewsLetter() {
  const [storeNewsLetter] = useStoreNewsLetterMutation();

  const form = useForm<z.infer<typeof newsLetterSchema>>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      email: "",
    },
  });
  useGSAP(() => {
    gsap.from(".newsletter-anim", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#newsletter-section",
        start: "top 70%",
        once: true, // animate only once
      },
    });
  }, []);
  const onSubmit = async (data: z.infer<typeof newsLetterSchema>) => {
    const toastId = toast.loading("Subscribing...");
    try {
      console.log({ email: data.email });
      const res = await storeNewsLetter(data).unwrap();
      if (res.success) {
        toast.success("NewsLetter subscription Successfull", { id: toastId });
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.data.message as string);
    }
  };

  return (
    <div id="newsletter-section" className="container mx-auto px-4 md:px-0 py-10">
      <h2 className="newsletter-anim text-3xl md:text-4xl font-bold text-center mb-6">
        Stay Updated With
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"> VaultPay News</span>
      </h2>

      <p className="newsletter-anim text-center text-muted-foreground mb-6">
        Join our newsletter to receive the latest updates, features, and insights.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" newsletter-anim flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
        >
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Enter your email" {...field} className="w-full" />
                </FormControl>
                <FormDescription className="sr-only">This is your email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
}
