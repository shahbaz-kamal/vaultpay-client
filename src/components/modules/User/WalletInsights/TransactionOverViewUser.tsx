// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ITransactionOverviewUser } from "@/types";
import { convertType } from "@/utils/convertType";
import { Banknote, ReceiptText } from "lucide-react";
import { useNavigate } from "react-router";
import { TransactionByTypeUserPieChart } from "./TransactionByTypeUserPieChart";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import LoadingPage from "@/components/layouts/LoadingPage";
import { Role } from "@/types/user.type";

interface IProps {
  requiredData: ITransactionOverviewUser;
}
export default function TransactionOverViewUser({ requiredData }: IProps) {
  // console.log("From TransactionOverview", requiredData);

  const { data: userData } = useGetMeQuery(undefined);
  const navigate = useNavigate();
  if (!userData) return <LoadingPage></LoadingPage>;
  console.log("From Transaction Overview Page", requiredData);

  if (!requiredData) {
    return (
      <Card className="w-full border-dashed">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <svg
              className="h-6 w-6 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <CardTitle className="mt-4">No Transactions Yet</CardTitle>
          <CardDescription>Your transaction history will appear here once you start using the platform.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">Make your first payment, transfer, or deposit to see it listed here.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => navigate(`${userData?.data.role === Role.USER ? "/user/add-money" : "/agent/add-money"}`)}
            className=" hover:cursor-pointer"
          >
            Add Money?
          </Button>
        </CardFooter>
      </Card>
    );
  }
  const cardObject = [
    {
      title: "Total Transactions",
      icon: <ReceiptText className="w-8 h-8" style={{ color: "var(--chart-1)" }} />,
      data: requiredData?.totalTransaction,
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

  const numberOfTransactionByTypeData = requiredData.transactionByType.map((item) => ({
    type: convertType(item.type) as string,
    chartData: item.count as number,
    fill: `var(--color-${item.type.toLowerCase()})` as string,
    rawType: item.type.toLowerCase(),
  }));
  const transactionAmountByTypeData = requiredData.transactionByType.map((item) => ({
    type: convertType(item.type) as string,
    chartData: item.amount as number,
    fill: `var(--color-${item.type.toLowerCase()})` as string,
    rawType: item.type.toLowerCase(),
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
