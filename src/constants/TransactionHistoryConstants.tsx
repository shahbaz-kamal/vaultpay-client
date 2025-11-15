import { Button } from "@/components/ui/button";
import type { ITransactionHistoryTableData } from "@/types";
import {
  type ColumnDef
} from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

export default function TransactionHistoryConstants() {
  const columns: ColumnDef<ITransactionHistoryTableData>[] = [
    {
      accessorKey: "id",
      header: () => {
          return (
            <div className="text-center">
             S/N
            </div>
          );
        },
      cell: ({ row }) => <div className="capitalize text-center">{row.getValue("id")}</div>,
    },
  
    {
      accessorKey: "senderEmail",
      header: ({ column }) => {
        return (
          <div className="text-center">
            <Button className="text-center" variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
              Sender Email
              <ArrowUpDown />
            </Button>
          </div>
        );
      },
      cell: ({ row }) => <div className="lowercase text-center">{row.getValue("senderEmail")}</div>,
    },
    {
      accessorKey: "receiverEmail",
      header: ({ column }) => {
        return (
        <div className="text-center">  <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Reciever Email
        <ArrowUpDown />
      </Button></div>
        );
      },
      cell: ({ row }) => <div className="lowercase text-center">{row.getValue("receiverEmail")}</div>,
    },
    {
      accessorKey: "type",
      header: ()=>(<div className="text-center"> Type</div>),
      cell: ({ row }) => <div className="capitalize text-center">{row.getValue("type")}</div>,
    },
    //   {
    //     accessorKey: "amount",
    //     header: () => <div className="text-right">Amount</div>,
    //     cell: ({ row }) => {
    //       const amount = parseFloat(row.getValue("amount"));
  
    //       // Format the amount as a dollar amount
    //       const formatted = new Intl.NumberFormat("en-US", {
    //         style: "currency",
    //         currency: "BDT",
    //       }).format(amount);
  
    //       return <div className="text-right font-medium">{formatted}</div>;
    //     },
  
    //   },
  
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
         <div className="text-center"> <Button className="text-center" variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
         Amount
         <ArrowUpDown />
       </Button></div>
        );
      },
      cell: ({ row }) => <div className="text-center"><span className="text-lg">৳</span> {row.getValue("amount")}</div>,
    },
    {
      accessorKey: "transactionDate",
      header: "Date",
      cell: ({ row }) => {
        const date = row.getValue("transactionDate") as string
        const formattedDate = format(new Date(date), "PPpp")
    
        return <div className="capitalize">{formattedDate}</div>
      }
    }
  ,  
  
    //   {
    //     id: "actions",
    //     enableHiding: false,
    //     cell: ({ row }) => {
    //       const payment = row.original;
  
    //       return (
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button variant="ghost" className="h-8 w-8 p-0">
    //               <span className="sr-only">Open menu</span>
    //               <MoreHorizontal />
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent align="end">
    //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //             <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>Copy payment ID</DropdownMenuItem>
    //             <DropdownMenuSeparator />
    //             <DropdownMenuItem>View customer</DropdownMenuItem>
    //             <DropdownMenuItem>View payment details</DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       );
    //     },
    //   },
  ];
  return columns;
}
