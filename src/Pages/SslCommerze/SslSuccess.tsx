import { useGetSingleTransactionQuery } from "@/redux/features/transactions/transaction.api";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import LoadingPage from "@/components/layouts/LoadingPage";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { format } from "date-fns";
import { ArrowLeft, Calendar, CheckCircle2, Mail, Wallet } from "lucide-react";

export default function SslSuccess() {
  const { data: userData } = useGetMeQuery(undefined);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const transactionId = searchParams.get("transactionId") ?? "";
  const message = searchParams.get("message") ?? "";

  // Redirect if missing params
  useEffect(() => {
    if (!transactionId || !message) {
      toast.error("You are not permitted to view this route");
      navigate("/");
    }
  }, [transactionId, message]);

  const { data: transactionData, isLoading } = useGetSingleTransactionQuery({ transactionId }, { skip: !transactionId });

  const txn = transactionData?.data;

  const handleAddMoreMoney = async () => {
    if (userData?.data.role === "USER") {
      navigate("/user/add-money");
    } else if (userData?.data.role === "AGent") {
      navigate("/agent/add-money");
    }
  };
  // const handleBackToDashboard = async () => {
  //   if (userData?.data.role === "USER") {
  //     navigate("/user/wallet-insights");
  //   } else if (userData?.data.role === "AGENT") {
  //     navigate("/agent/wallet-summary");
  //   }
  // };

  if (isLoading || !txn || !userData?.data.email) return <LoadingPage></LoadingPage>;

  return (
    <div className="w-full flex justify-center p-4 md:p-10">
      <Card className="w-full max-w-xl shadow-md border border-blue-200 dark:border-blue-800">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <CheckCircle2 className="w-14 h-14 text-blue-600 dark:text-blue-400" />
          </div>

          <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Add Money Successfull</CardTitle>

          <CardDescription className="text-md">Your transaction has been completed securely.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Transaction ID</p>
            <p className="font-semibold break-all">{txn.transactionId}</p>
          </div>

          <Separator />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Amount */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Amount</p>
              <p className="font-semibold text-xl text-blue-600 dark:text-blue-400">৳{txn.amount}</p>
            </div>

            {/* Type */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Transaction Type</p>
              <Badge variant="outline" className="border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300">
                {txn.type}
              </Badge>
            </div>

            {/* Status */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge className="bg-blue-600 text-white dark:bg-blue-400">{txn.status}</Badge>
            </div>
            {/* Reciept */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Reciept</p>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer"
                onClick={() => {
                  if (txn.invoiceUrl) {
                    window.open(txn.invoiceUrl, "_blank");
                  }
                }}
              >
                Download Reciept
              </Button>
            </div>

            {/* Fee */}
            {txn.transactionFee && (
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Transaction Fee</p>
                <p className="font-semibold">৳{txn.transactionFee}</p>
              </div>
            )}
          </div>

          <Separator />

          {/* Emails */}
          <div className="space-y-3">
            {txn.senderEmail && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Sender:</span> {txn.senderEmail}
              </div>
            )}

            {txn.receiverEmail && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Receiver:</span> {txn.receiverEmail}
              </div>
            )}
            {txn.source && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Source:</span> {txn.source}
              </div>
            )}
          </div>

          <Separator />

          {/* Dates */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="font-medium">Created:</span> {format(new Date(txn.createdAt), "PPpp")}
              {/* {new Date(txn.createdAt).toLocaleString()} */}
            </div>

            {txn.completedAt && (
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Completed:</span> {new Date(txn.completedAt).toLocaleString()}
              </div>
            )}
          </div>

          <Separator />

          {/* Notes */}
          {txn.notes && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Notes</p>
              <p className="font-medium">{txn.notes}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col  gap-3 pt-4">
            <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            {/* <Button variant="outline" className="w-full" onClick={handleBackToDashboard}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button> */}

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
              onClick={handleAddMoreMoney}
            >
              <Wallet className="w-4 h-4 mr-2" />
              Add More Money
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
