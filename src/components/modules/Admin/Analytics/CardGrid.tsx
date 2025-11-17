import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import { TCardDisplayDataType, type DashboardCard } from "@/types";

import { useRef } from "react";

interface IProps {
  cardObject: DashboardCard[];
  cardDisplayDataType: TCardDisplayDataType;
}

export default function CardGrid({ cardObject, cardDisplayDataType }: IProps) {
  // animating numbers
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  useCountUp(
    numberRefs.current,
    cardObject.map((c) => c.data)
  );

  let symbol = "";

  if (cardDisplayDataType === TCardDisplayDataType.moneyCount) symbol = "৳";
  console.log(symbol);

  return (
    <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Wallet Balance */}

      {cardObject.map((singleCard, idx) => (
        <Card className="">
          <CardHeader className="flex items-center justify-between gap-2">
            <CardTitle className=""> {singleCard.title}</CardTitle>
            {singleCard.icon}
          </CardHeader>
          <CardContent>
            <p className="text-2xl flex items-center gap-2">
              <span className=" text-primary font-bold"> {symbol}</span>
              <span
                ref={(el) => {
                  numberRefs.current[idx] = el;
                }}
              >
                {singleCard.data}
              </span>
            </p>
            <p className="">{singleCard.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
