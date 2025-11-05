import { TopPerformerTable } from "./TopPerformerTable";

export default function TopPerformer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TopPerformerTable title="User" ></TopPerformerTable>
      <TopPerformerTable title="Agent"></TopPerformerTable>
    </div>
  );
}
