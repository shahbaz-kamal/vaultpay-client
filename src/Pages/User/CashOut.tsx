import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";

import { CashOutForm } from "@/components/modules/User/Transactions/CashoutForm";
import RecentTransactionTable, { type ITransactionItem } from "@/components/RecentTransactionTable";
import { useGetMyTransactionQuery } from "@/redux/features/transactions/transaction.api";
import { TRANSACTION_TYPE } from "@/types/transaction.type";

import { BanknoteArrowUp } from "lucide-react";

export default function CashOut() {
  const { data: myTransaction } = useGetMyTransactionQuery({});

  console.log(myTransaction?.data);

  const cashOutData: ITransactionItem[] =
    myTransaction?.data
      .filter((singleData) => singleData.type === TRANSACTION_TYPE.CASH_OUT)
      .map((singleData) => ({
        id: singleData._id as string,
        status: singleData.status as string,
        agentEmail: singleData.receiverEmail as string,
        amount: singleData.amount as number,
        date: singleData.createdAt as Date,
        invoiceUrl: singleData.invoiceUrl as string,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5) || [];
  console.log(cashOutData);

  if (!myTransaction) return <LoadingPage></LoadingPage>;
  return (
    <div>
      <SidebarHeader heading="Transaction" subHeading="Cash Out" subSubHeading=""></SidebarHeader>
      <div className="container mx-auto px-5 py-6 space-y-6">
        <div className="w-full">
          <CashOutForm></CashOutForm>
        </div>
        <div>
          <DashboardTitle title="Recent Cash Outs" icon={<BanknoteArrowUp size={20}></BanknoteArrowUp>}></DashboardTitle>
          <RecentTransactionTable
            isCashOut={true}
            isAddMOney={false}
            isSendMoney={false}
            isCashIn={false}
            data={cashOutData}
          ></RecentTransactionTable>
        </div>
      </div>
    </div>
  );
}
