import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, ReceiptText } from "lucide-react";
import { TransactionByTypeUserPieChart } from "./TransactionByTypeUserPieChart";
import type { ITransactionOverviewUser } from "@/types";
import { convertType } from "@/utils/convertType";

interface IProps {
  requiredData: ITransactionOverviewUser;
}
export default function TransactionOverViewUser({ requiredData }: IProps) {
  // console.log("From TransactionOverview", requiredData);
  const cardObject = [
    {
      title: "Total Transactions",
      icon: <ReceiptText className="w-8 h-8" style={{ color: "var(--chart-1)" }} />,
      data: requiredData.totalTransaction,
      description: "Total number of transactions processed so far",
      type: "count",
    },
    {
      title: "Transactions Amount",
      icon: <Banknote className="w-8 h-8" style={{ color: "var(--chart-2)" }} />,
      data: requiredData.transactionsAmount,
      description: "Total monetary value of all processed transactions",
      type: "money",
    },
  ];
  const desktopData = [
    { month: "active", desktop: 186, fill: "var(--color-active)" },
    { month: "february", desktop: 305, fill: "var(--color-february)" },
    // { month: "march", desktop: 237, fill: "var(--color-march)" },
    // { month: "april", desktop: 173, fill: "var(--color-april)" },
    // { month: "may", desktop: 209, fill: "var(--color-may)" },
  ];
  const numberOfTransactionByTypeData = requiredData.transactionByType.map((item, index) => ({
    type: convertType(item.type) as string,
    chartData: item.count as number,
    fill: `var(--color-${item.type.toLowerCase()})` as string,
    rawType: item.type.toLowerCase()
  }));
  const transactionAmountByTypeData = requiredData.transactionByType.map((item, index) => ({
    type: convertType(item.type) as string,
    chartData: item.amount as number,
    fill: `var(--color-${item.type.toLowerCase()})` as string,
    rawType: item.type.toLowerCase()
  }));
  return (
    <div className="space-y-6">
      {/* Total transactions (card format)-  */}
      <div className=" grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {cardObject.map((singleCard, index) => (
          <div key={index}>
            {" "}
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
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransactionByTypeUserPieChart
          title="Number of Transactions By Type"
          payload={numberOfTransactionByTypeData}
          isMoneyCount={false}
        ></TransactionByTypeUserPieChart>
        <TransactionByTypeUserPieChart
          title="Transaction Amount By Type"
          payload={transactionAmountByTypeData}
          isMoneyCount={true}
        ></TransactionByTypeUserPieChart>
      </div>
    </div>
  );
}
