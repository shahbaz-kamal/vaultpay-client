import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, ReceiptText } from "lucide-react";
import { TransactionBySourceChart } from "./TransactionBySourceChart";
import { TransactionByTypeChart } from "./TransactionByTypeChart";

import type { ITransactionOverview } from "@/types";

import { convertType } from "@/utils/convertType";
import { convertSource } from "@/utils/convertSource";

interface ITransactionOverviewProps {
  requiredData: ITransactionOverview;
}
interface IChartData {
  type: string;
  transactionData: number;
}
interface IChartDataSource {
  source: string;
  transactionData: number;
}
export default function TransactionOverview({ requiredData }: ITransactionOverviewProps) {
  console.log("TRO", requiredData);
  const cardObject = [
    {
      title: "Total Transactions",
      icon: <ReceiptText className="w-8 h-8" style={{ color: "var(--chart-1)" }} />,
      data: requiredData.totalTransaction,
      description: "Total number of transactions processed so far by all users and agents",
      type: "count",
    },
    {
      title: "Transactions Amount",
      icon: <Banknote className="w-8 h-8" style={{ color: "var(--chart-2)" }} />,
      data: requiredData.totalTransactionAmount,
      description: "Total monetary value of all processed transactions by users and agents",
      type: "money",
    },
  ];

  // For NumberofTransactionByType

  const numberOfTransactionByTypeData = requiredData.transactionByType.map((item) => ({
    type: convertType(item.type),
    transactionData: item.count,
  }));
  // For NumberofTransactionByType

  const transactionAmountByTypeData = requiredData.transactionByType.map((item) => ({
    type: convertType(item.type),
    transactionData: item.amount,
  }));

  // For NumberofTransactionBySource

  const numberOfTransactionBySourceData = requiredData.transactionBySource.map((item) => ({
    source: convertSource(item.source),
    transactionData: item.count,
  }));
  // For NumberofTransactionBySource

  const sourceAmount = requiredData.transactionBySource.map((item) => ({
    source: convertSource(item.source),
    transactionData: item.amount,
  }));
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
      <div className=" grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <TransactionByTypeChart
          footerData="Displaying Total Number of transaction data across all periods"
          chartTitle="Number of Transaction By Type"
          isShowNumber={true}
          chartData={numberOfTransactionByTypeData as IChartData[]}
        ></TransactionByTypeChart>

        <TransactionByTypeChart
          chartTitle=" Transaction Amount By Type"
          footerData="Displaying total transaction amount across all periods"
          isShowNumber={false}
          chartData={transactionAmountByTypeData as IChartData[]}
        ></TransactionByTypeChart>

        <TransactionBySourceChart
        isShowNumber={true}
          chartTitle="Number of Transaction By Source"
          footerData="Displaying Total Number of transaction data across all periods"
          chartData={numberOfTransactionBySourceData as IChartDataSource[]}
        ></TransactionBySourceChart>
        <TransactionBySourceChart  isShowNumber={false}
          chartTitle="Transaction Amount By Source"
          footerData="Displaying total transaction amount across all periods"
          chartData={sourceAmount as IChartDataSource[]}
        ></TransactionBySourceChart>
      </div>
    </div>
  );
}
