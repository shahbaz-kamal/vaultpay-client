import SidebarHeader from "@/components/layouts/SidebarHeader";
import UserManageMentTable from "@/components/modules/Admin/UserManagement/UserManagementTable";
import { Role } from "@/types/user.type";


export default function ManageAgents() {
 return (
       <div>
         <SidebarHeader heading="User Management" subHeading="Manage Agents" subSubHeading=""></SidebarHeader>
         <div className="container mx-auto px-5 py-6">
           <UserManageMentTable role={Role.AGENT}></UserManageMentTable>
         </div>
       </div>
 );
};
