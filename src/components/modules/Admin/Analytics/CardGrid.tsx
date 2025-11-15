import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TCardDisplayDataType, type DashboardCard } from "@/types";


interface IProps {
  cardObject: DashboardCard[];
  cardDisplayDataType: TCardDisplayDataType;
}

export default function CardGrid({ cardObject, cardDisplayDataType }: IProps) {
  let symbol = "";

  if (cardDisplayDataType === TCardDisplayDataType.moneyCount) symbol = "৳";

  return (
    <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Wallet Balance */}

      {cardObject.map((singleCard) => (
        <Card className="">
          <CardHeader className="flex items-center justify-between gap-2">
            <CardTitle className=""> {singleCard.title}</CardTitle>
            {singleCard.icon}
          </CardHeader>
          <CardContent>
            <p className="text-2xl">
              {symbol} {singleCard.data}
            </p>
            <p className="">{singleCard.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
