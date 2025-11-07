import SidebarHeader from "@/components/layouts/SidebarHeader";
import { AddMOneyForm } from "@/components/modules/AddMOneyForm";

import { Home, Link, Wallet } from "lucide-react";

export default function AddMoney() {
  return (
    <div>
      <SidebarHeader heading="Transaction" subHeading="Add Money" subSubHeading=""></SidebarHeader>
      <div className="container mx-auto px-5 py-6">
        <div className="w-full">
          <AddMOneyForm></AddMOneyForm>
        </div>
      </div>
    </div>
  );
}
