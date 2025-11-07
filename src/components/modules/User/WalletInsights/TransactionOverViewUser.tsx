import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, ReceiptText } from "lucide-react";
import { TransactionByTypeUserPieChart } from "./TransactionByTypeUserPieChart";


export default function TransactionOverViewUser() {
  const cardObject = [
    {
      title: "Total Transactions",
      icon: <ReceiptText className="w-8 h-8" style={{ color: "var(--chart-1)" }} />,
      data: 12540,
      description: "Total number of transactions processed so far",
      type: "count",
    },
    {
      title: "Transactions Amount",
      icon: <Banknote className="w-8 h-8" style={{ color: "var(--chart-2)" }} />,
      data: 12540,
      description: "Total monetary value of all processed transactions",
      type: "money",
    },
  ];
  return (
     <div className="space-y-6">
         {/* Total transactions (card format)-  */}
         <div className=" grid gap-6 md:grid-cols-1 lg:grid-cols-2">
           {cardObject.map((singleCard) => (
             <Card className="">
               <CardHeader className="flex items-center justify-between">
                 <CardTitle className=""> {singleCard.title}</CardTitle>
                 {singleCard.icon}
               </CardHeader>
               <CardContent>
                 <p className="text-2xl">
                   {singleCard.type === "money" ? "৳" : ""} {singleCard.data}
                 </p>
                 <p className="">{singleCard.description}</p>
               </CardContent>
             </Card>
           ))}
         </div>
         <TransactionByTypeUserPieChart></TransactionByTypeUserPieChart>
       </div>
  );
}
