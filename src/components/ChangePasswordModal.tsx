import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useChangePasswordMutation } from "@/redux/features/auths/auth.api";
import { changePasswordSchema } from "@/schemas/changePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";
import CustomModal from "./CustomModal";
import Password from "./ui/Password";

type ChangePasswordFormValue = z.infer<typeof changePasswordSchema>;

export default function ChangePasswordModal() {
  const [open, setOpen] = useState(false);

  const [changePassword] = useChangePasswordMutation();

  const form = useForm<ChangePasswordFormValue>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = async (data: ChangePasswordFormValue) => {
    const toastId = toast.loading("Changing Password");

    console.log("FORM SUBMITTED:", data);

    try {
      const res = await changePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      }).unwrap();

      if (res.success) {
        toast.success("Password changed successfully", { id: toastId });
      }

        console.log("responseee", res);
      setOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
      setOpen(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Change Password</Button>

      <CustomModal open={open} onClose={() => setOpen(false)} title="Change Password">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
            {/* NAME */}
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old Password *</FormLabel>
                  <FormControl>
                    <Password {...field}></Password>
                  </FormControl>
                  <FormDescription className="sr-only">This is your Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password *</FormLabel>
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
