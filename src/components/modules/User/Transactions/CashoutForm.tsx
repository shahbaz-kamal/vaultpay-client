import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import type z from "zod";

import { toast } from "sonner";

import { useAddMOneyMutation, useCashOutMutation } from "@/redux/features/transactions/transaction.api";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { cashOutSchema } from "@/schemas/transactionSchemas";
import type { ICashOut } from "@/types";

type CashOutFormValues = z.infer<typeof cashOutSchema>;

export function CashOutForm({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [cashOut] = useCashOutMutation();
  const { data: userData } = useGetMeQuery(undefined);

  //   console.log(userData);
  const form = useForm<CashOutFormValues>({
    resolver: zodResolver(cashOutSchema),
    defaultValues: {
      receiverEmail: "",
      amount: 20,
      notes: "",
    },
  });
  const onSubmit = async (data: CashOutFormValues) => {
    const cashOutInfo: ICashOut = {
      senderEmail: userData?.data?.email as string,
      amount: data.amount,
      notes: data.notes,
      receiverEmail: data.receiverEmail as string,
    };
    const toastId = toast.loading("Cash Out Is Processing");
    try {
      console.log(cashOutInfo);
      const result = await cashOut(cashOutInfo).unwrap();
      console.log(result.data);
      if (result.success) {
        toast.success("Cash Out Successfull", { id: toastId });
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
            <form className="space-y-3 grid grid-cols-1 md:grid-cols-3 gap-6 " onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="receiverEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agent Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Agent Email" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">This is your Amount</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount *</FormLabel>
                    <FormControl>
                      <Input placeholder="Amount you want to add" {...field} onChange={(e) => field.onChange(Number(e.target.value))} />
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
              <Button className=" w-full col-span-1  md:col-span-3" type="submit">
                Cash Out
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
