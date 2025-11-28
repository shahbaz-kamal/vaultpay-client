import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useSetPasswordMutation } from "@/redux/features/auths/auth.api";
import { setPasswordSchema } from "@/schemas/setPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";
import CustomModal from "./CustomModal";
import Password from "./ui/Password";

type SetPasswordFormValue = z.infer<typeof setPasswordSchema>;

export default function SetPasswordModal() {
  const [open, setOpen] = useState(false);

  const [setPassword] = useSetPasswordMutation();

  const form = useForm<SetPasswordFormValue>({
    resolver: zodResolver(setPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (data: SetPasswordFormValue) => {
    const toastId = toast.loading("Setting Password");

    console.log("FORM SUBMITTED:", data);

    try {
      const res = await setPassword({
        password: data.password,
      }).unwrap();

      if (res.success) {
        toast.success("Password has been set successfully", { id: toastId });
      }

      //   console.log("responseee", res);
      setOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
      setOpen(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Set Password</Button>

      <CustomModal open={open} onClose={() => setOpen(false)} title="Set Password">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
            {/* NAME */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password *</FormLabel>
                  <FormControl>
                    <Password {...field}></Password>
                  </FormControl>
                  <FormDescription className="sr-only">This is your Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* BUTTONS */}
            <div className="flex gap-6">
              <Button type="button" variant="destructive" className="flex-1 md:basis-[48%]" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1 md:basis-[48%]">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CustomModal>
    </>
  );
}
