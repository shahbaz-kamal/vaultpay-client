
import { MonthlyTransactionAmount } from "../../MonthlyTransactionAmount";
import { MonthlyTransactionComparisonLineChart } from "../../MonthlyTransactionComparisonLineChart";

export default function MonthlyActivityUser() {
  return (
    <div className="space-y-6">
        <MonthlyTransactionAmount></MonthlyTransactionAmount>
      <MonthlyTransactionComparisonLineChart></MonthlyTransactionComparisonLineChart>
    </div>
  );
}
