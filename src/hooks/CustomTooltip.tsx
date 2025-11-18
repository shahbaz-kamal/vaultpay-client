import { type TooltipProps } from "recharts";

interface IProps extends TooltipProps<number, string> {
  isShowNumber: boolean;
}

export const CustomTooltip = ({ active, payload, label, isShowNumber }: IProps) => {
  if (!active || !payload?.length) return null;

  const value = payload[0].value;

  return (
    <div className="rounded-md  bg-background p-2 shadow">
      <p className="font-semibold text-foreground">{label}</p>
      <p className="text-sm text-foreground">{isShowNumber ? `Transactions: ${value}` : `Amount: ${value} BDT`}</p>
    </div>
  );
};
