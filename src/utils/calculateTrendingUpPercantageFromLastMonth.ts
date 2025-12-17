import type { IMonthlyTransactionAmount } from "@/types";

export const calculateTrendingUpPercantageFromLastMonth = (data: IMonthlyTransactionAmount[], length: number) => {
  // console.log("Length",length)
  if (length < 2) return null;
  const currentMothsAmount = data[length - 1].amount;
  const previousMonthAmount = data[length - 2].amount;
  const changePercentage = ((currentMothsAmount - previousMonthAmount) / previousMonthAmount) * 100;
  return changePercentage.toFixed(1);
};
