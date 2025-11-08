import DashboardTitle from "@/components/layouts/DashboardTitle";
import SidebarHeader from "@/components/layouts/SidebarHeader";

import PaymentChannels from "@/components/modules/PaymentChannels";
import { CashOutForm } from "@/components/modules/User/Transactions/CashoutForm";

import {  Wallet2 } from "lucide-react";

export default function CashOut() {
  return (
    <div>
      <SidebarHeader heading="Transaction" subHeading="Cash Out" subSubHeading=""></SidebarHeader>
      <div className="container mx-auto px-5 py-6 space-y-6">
        <div className="w-full">
        <CashOutForm></CashOutForm>
        </div>
        <div>
          <DashboardTitle title="Payment Channels" icon={<Wallet2 size={20}></Wallet2>}></DashboardTitle>
          <PaymentChannels></PaymentChannels>
        </div>
      </div>
    </div>
  );
}
