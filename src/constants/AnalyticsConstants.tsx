/* eslint-disable @typescript-eslint/no-unused-vars */
import type { TUser } from "@/components/modules/Admin/Analytics/TopPerformerTable";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  type ColumnDef
} from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export default function AnalyticsConstants({title}:{title:string}) {
  const columns: ColumnDef<TUser>[] = [

    {
      accessorKey: "id",
      header: "",
      cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "profilePhoto",
      header: "",
      cell: ({ row }) => <div className="capitalize"><img className="w-5 h-5 md:w-10 md:h-10 rounded-full" src={row.getValue("profilePhoto")} alt="" /></div>,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "transactionAmount",
      header: () => <div className="">Transaction Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("transactionAmount"));
  
        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "BDT",
        }).format(amount);
  
        return <div className=" font-medium">{formatted}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: () => {
      
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View {title}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
 return columns
};


