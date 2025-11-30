
import SidebarHeader from "@/components/layouts/SidebarHeader";
import UserManageMentTable from "@/components/modules/Admin/UserManagement/UserManagementTable";

import { Role } from "@/types/user.type";


export default function ManageUsers() {


    // if(!allUsers) return <LoadingPage></LoadingPage>
  return (
    <div>
      <title > Manage Users || Vaultpay</title>
      <SidebarHeader heading="User Management" subHeading="Manage Users" subSubHeading=""></SidebarHeader>
      <div className="container mx-auto px-5 py-6">
        <UserManageMentTable role={Role.USER}></UserManageMentTable>
      </div>
    </div>
  );
}
