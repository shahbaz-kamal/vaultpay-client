import DashboardTitle from "@/components/layouts/DashboardTitle";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import { AddMoneyForm } from "@/components/modules/AddMoneyForm";

import PaymentChannels from "@/components/modules/PaymentChannels";
import RecentTransactionTable, { type ITransactionItem } from "@/components/RecentTransactionTable";
import { useGetMyTransactionQuery } from "@/redux/features/transactions/transaction.api";
import { TRANSACTION_TYPE } from "@/types/transaction.type";

import { BanknoteArrowDown, BanknoteArrowUp, Wallet2 } from "lucide-react";

export default function AddMoney() {
  // const cashOutData = [
  //   {
  //     id: "INV001",
  //     status: "Paid",
  //     agentEmail: "a@b.com",
  //     amount: 20,
  //     date: "2025-11-04T17:02:21.080+00:00",
  //     invoiceUrl: "invoice",
  //   },
  // ];

  const { data: myTransaction } = useGetMyTransactionQuery({});
  
    console.log(myTransaction?.data);
  
    const addMOneyData: ITransactionItem[] =
      myTransaction?.data
        .filter((singleData) => singleData.type === TRANSACTION_TYPE.ADD_MONEY)
        .map((singleData) => ({
          id: singleData._id as string,
          status: singleData.status as string,
          agentEmail: singleData.receiverEmail as string,
          amount: singleData.amount as number,
          date: singleData.createdAt as Date,
          invoiceUrl: singleData.invoiceUrl as string,
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0,5) || [];
    console.log(addMOneyData);

  return (
    <div className="overflow-x-hidden">
      <SidebarHeader heading="Transaction" subHeading="Add Money" subSubHeading=""></SidebarHeader>
      <div className="container mx-auto px-5 py-6 space-y-6">
        <div className="w-full">
          <AddMoneyForm></AddMoneyForm>
        </div>

        <div>
          <DashboardTitle title="Recent Add Money" icon={<BanknoteArrowDown size={20}></BanknoteArrowDown>}></DashboardTitle>
          <RecentTransactionTable
            isCashOut={false}
            isAddMOney={true}
            isSendMoney={false}
            isCashIn={false}
            data={addMOneyData}
          ></RecentTransactionTable>
        </div>
        <div>
          <DashboardTitle title="Payment Channels" icon={<Wallet2 size={20}></Wallet2>}></DashboardTitle>
          <PaymentChannels></PaymentChannels>
        </div>
      </div>
    </div>
  );
}
