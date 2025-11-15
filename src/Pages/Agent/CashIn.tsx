import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import { CashInForm } from "@/components/modules/Agent/Transaction/CashInForm";

import RecentTransactionTable, { type ITransactionItem } from "@/components/RecentTransactionTable";
import { useGetMyTransactionQuery } from "@/redux/features/transactions/transaction.api";
import { TRANSACTION_TYPE } from "@/types/transaction.type";

import { BanknoteArrowUp } from "lucide-react";

export default function CashIn() {
  const { data: myTransaction } = useGetMyTransactionQuery({});

  console.log(myTransaction?.data);

  const cashInData: ITransactionItem[] =
    myTransaction?.data
      .filter((singleData) => singleData.type === TRANSACTION_TYPE.CASH_IN)
      .map((singleData) => ({
        id: singleData._id as string,
        status: singleData.status as string,
        userEmail: singleData.receiverEmail as string,
        amount: singleData.amount as number,
        date: singleData.createdAt as Date,
        invoiceUrl: singleData.invoiceUrl as string,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5) || [];
  console.log(cashInData);

  if (!myTransaction) return <LoadingPage></LoadingPage>;
  return (
    <div>
      <SidebarHeader heading="Transaction" subHeading="Cash In" subSubHeading=""></SidebarHeader>
      <div className="container mx-auto px-5 py-6 space-y-6">
        <div className="w-full">
          <CashInForm></CashInForm>
        </div>
        <div>
          <DashboardTitle title="Recent Cash Ins" icon={<BanknoteArrowUp size={20}></BanknoteArrowUp>}></DashboardTitle>
          <RecentTransactionTable
            isCashOut={false}
            isAddMOney={false}
            isSendMoney={false}
            isCashIn={true}
            data={cashInData}
          ></RecentTransactionTable>
        </div>
      </div>
    </div>
  );
}
