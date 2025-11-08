import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import type z from "zod";

import { toast } from "sonner";

import { addMoneySchema } from "@/schemas/addMoneyFormSchema";
import { useAddMOneyMutation } from "@/redux/features/transactions/transaction.api";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";

export function CashOutForm({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [addMOney] = useAddMOneyMutation();
  const { data: userData } = useGetMeQuery(undefined);

  //   console.log(userData);
  const form = useForm<z.infer<typeof addMoneySchema>>({
    resolver: zodResolver(addMoneySchema),
    defaultValues: {
      amount: 20,
      notes: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof addMoneySchema>) => {
    const addMOneyInfo = {
      amount: data.amount,
      notes: data.notes,
      receiverEmail: userData?.data?.email as string,
    };
    const toastId = toast.loading("Please Wait");
    try {
      console.log(addMOneyInfo);
      const result = await addMOney(addMOneyInfo).unwrap();
      console.log(result.data);
      if (result.success) {
        window.open(result.data.payment);
        toast.success("Please Complete the Payment Process", { id: toastId });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent>
          <Form {...form}>
            <form className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-6 " onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount *</FormLabel>
                    <FormControl>
                      <Input placeholder="Amount you want to add" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">This is your Amount</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes *</FormLabel>
                    <FormControl>
                      <Input placeholder="Notes" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">This is your Notes</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className=" w-full col-span-2" type="submit">
                Add Money
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
