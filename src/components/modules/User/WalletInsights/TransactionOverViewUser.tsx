import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReceiptText } from "lucide-react";


export default function TransactionOverViewUser() {
  return (
    <div>
        {/* FIrst ROw */}
      <div className=" grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* card component */}
        <Card className="">
          <CardHeader className="flex items-center justify-between gap-2">
            <CardTitle className=""> Total transactions </CardTitle>
            <ReceiptText className="w-8 h-8" style={{ color: "var(--chart-1)" }} />
          </CardHeader>
          <CardContent>
            <p className="text-2xl">5</p>
            <p className="">All Time</p>
          </CardContent>
        </Card>
  
      </div>
    </div>
  );
}
