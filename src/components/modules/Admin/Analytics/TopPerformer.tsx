import type { ITopPerformer, ITopUsersAndAgents } from "@/types/stats.type";
import { TopPerformerTable } from "./TopPerformerTable";
import LoadingPage from "@/components/layouts/LoadingPage";


interface IPropsTopPerformer {
  requiredData: ITopPerformer;
}


export interface ITableData {
  id: number
  transactionAmount: number
  name: string
  profilePicture: string | null
}

export default function TopPerformer({ requiredData }: IPropsTopPerformer) {

if(!requiredData) return <LoadingPage></LoadingPage>

  const usersData = requiredData.topUsers.map((item, index) => ({
    id: index + 1,
    profilePicture: item.profilePicture,

    name: item.name,
    transactionAmount: item.transactionAmount,
  }));
  const agentsData = requiredData.topAgents.map((item, index) => ({
    id: index + 1,
    profilePicture: item.profilePicture,

    name: item.name,
    transactionAmount: item.transactionAmount,
  }));
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <TopPerformerTable title="User" tableData={usersData }></TopPerformerTable>
      <TopPerformerTable title="Agent" tableData={agentsData}></TopPerformerTable>
    </div>
  );
}
