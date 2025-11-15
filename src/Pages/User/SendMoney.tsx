import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";

import { SendMOneyForm } from "@/components/modules/User/Transactions/SendMoneyForm";
import RecentTransactionTable, { type ITransactionItem } from "@/components/RecentTransactionTable";
import { useGetMyTransactionQuery } from "@/redux/features/transactions/transaction.api";
import { TRANSACTION_TYPE } from "@/types/transaction.type";

import { BanknoteArrowUp } from "lucide-react";

export default function SendMoney() {
  const { data: myTransaction } = useGetMyTransactionQuery({});

  console.log(myTransaction?.data);

  const sendMoneyData: ITransactionItem[] =
    myTransaction?.data
      .filter((singleData) => singleData.type === TRANSACTION_TYPE.SEND_MONEY)
      .map((singleData) => ({
        id: singleData._id as string,
        status: singleData.status as string,
        receiverEmail: singleData.receiverEmail as string,
        amount: singleData.amount as number,
        date: singleData.createdAt as Date,
        invoiceUrl: singleData.invoiceUrl as string,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5) || [];
  console.log(sendMoneyData);

  if (!myTransaction) return <LoadingPage></LoadingPage>;
  return (
    <div>
      <SidebarHeader heading="Transaction" subHeading="Send Money" subSubHeading=""></SidebarHeader>
      <div className="container mx-auto px-5 py-6 space-y-6">
        <div className="w-full">
       <SendMOneyForm></SendMOneyForm>
        </div>
        <div>
          <DashboardTitle title="Recent Send Money" icon={<BanknoteArrowUp size={20}></BanknoteArrowUp>}></DashboardTitle>
          <RecentTransactionTable
            isCashOut={false}
            isAddMOney={false}
            isSendMoney={true}
            isCashIn={false}
            data={sendMoneyData}
          ></RecentTransactionTable>
        </div>
      </div>
    </div>
  );
}
