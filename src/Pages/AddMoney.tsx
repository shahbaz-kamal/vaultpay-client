import DashboardTitle from "@/components/layouts/DashboardTitle";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import { AddMoneyForm } from "@/components/modules/AddMoneyForm";

import PaymentChannels from "@/components/modules/PaymentChannels";

import { Wallet2 } from "lucide-react";

export default function AddMoney() {


  return (
    <div className="overflow-x-hidden">
      <SidebarHeader heading="Transaction" subHeading="Add Money" subSubHeading=""></SidebarHeader>
      <div className="container mx-auto px-5 py-6 space-y-6">
        <div className="w-full">
          <AddMoneyForm></AddMoneyForm>
        </div>
        <div>
          <DashboardTitle title="Payment Channels" icon={<Wallet2 size={20}></Wallet2>}></DashboardTitle>
          <PaymentChannels></PaymentChannels>
        </div>
      </div>
    </div>
  );
}
