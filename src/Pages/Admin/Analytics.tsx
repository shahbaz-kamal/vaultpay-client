import DashboardTitle from "@/components/layouts/DashboardTitle";
import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import UserAndAgentOverview from "@/components/modules/Admin/Analytics/UserAndAgentOverview";

import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { Users } from "lucide-react";

export default function Analytics() {
  const { data: userData, isLoading } = useGetMeQuery(undefined);

  if (isLoading) return <LoadingPage></LoadingPage>;
  console.log(userData);

  return (
    <div>
      <SidebarHeader heading="Dashboard" subHeading="Analytics" subSubHeading="" />

      <div className="container mx-auto px-5 py-6">
        <DashboardTitle title="User & Agent Overview" icon={<Users size={20} />}></DashboardTitle>

        {/* User & Agent Overview */}
        <UserAndAgentOverview></UserAndAgentOverview>
      </div>
    </div>
  );
}
