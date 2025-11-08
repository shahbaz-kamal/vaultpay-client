import { useSearchParams, useNavigate } from "react-router";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { XCircle, ArrowLeft, Wallet, AlertTriangle, Receipt } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";

const SslFailed = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const transactionId = searchParams.get("transactionId") ?? "";
  const message = searchParams.get("message") ?? "Your payment could not be processed.";

  useEffect(() => {
    if (!message) {
      toast.error("Invalid route access");
      navigate("/");
    }
  }, [message]);

  return (
    <div className="w-full flex justify-center p-4 md:p-10">
      <Card className="w-full max-w-xl shadow-md border border-red-300 dark:border-red-800">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <XCircle className="w-14 h-14 text-red-600 dark:text-red-400" />
          </div>

          <CardTitle className="text-2xl font-bold text-red-600 dark:text-red-400">
            Payment Failed
          </CardTitle>

          <CardDescription className="text-md text-red-500 dark:text-red-300">
            Unfortunately, your transaction could not be completed.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Failure Message */}
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Reason</p>
            <p className="font-medium flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertTriangle className="w-4 h-4" />
              {message}
            </p>
          </div>

          {/* Transaction ID */}
          {transactionId && (
            <>
              <Separator />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Transaction ID</p>
                <p className="font-semibold break-all">{transactionId}</p>
              </div>
            </>
          )}

          <Separator />

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
              onClick={() => navigate("/user/add-money")}
            >
              <Wallet className="w-4 h-4 mr-2" />
              Try Again (Add Money)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SslFailed;
