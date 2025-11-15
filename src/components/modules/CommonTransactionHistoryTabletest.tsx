import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { ArrowDownToLine, ArrowUpDown, ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TRANSACTION_SOURCE, TRANSACTION_STATUS, TRANSACTION_TYPE } from "@/types/transaction.type";
import { format } from "date-fns";

interface CommonTransacHistory {
  id: string;
  status: TRANSACTION_STATUS;
  type: TRANSACTION_TYPE; // or TRANSACTION_TYPE if you have enum
  source: TRANSACTION_SOURCE;
  senderEmail: string;
  receiverEmail: string;
  amount: number;
  date: Date | string;
  invoiceUrl: string;
}

const data: CommonTransacHistory[] = [
  {
    id: "m5gr84i9",
    status: TRANSACTION_STATUS.COMPLETED,
    type: TRANSACTION_TYPE.ADD_MONEY,
    source: TRANSACTION_SOURCE.USER,
    senderEmail: "a@b.com",
    receiverEmail: "c@d.com",
    amount: 316,
    date: "2025-11-08T10:12:03.512+00:00",
    invoiceUrl: "https://res.cloudinary.com/dxbkmcxax/image/upload/v1762596729/pdf/pdf/invoice-INV-20251108-1163E3-1762596727759.pdf",
  },
];
// const data: Payment[] = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     status: "success",
//     email: "ken99@example.com",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     status: "success",
//     email: "Abe45@example.com",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     status: "processing",
//     email: "Monserrat44@example.com",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     status: "success",
//     email: "Silas22@example.com",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 721,
//     status: "failed",
//     email: "carmella@example.com",
//   },
// ];

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

export const columns: ColumnDef<CommonTransacHistory>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center"> S/N </div>,
    cell: ({ row }) => <div className="text-center"> {row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center"> Status</div>,

    cell: ({ row }) => <div className="capitalize text-center">{row.getValue("status")}</div>,
  },
  {
    accessorKey: "type",

    header: () => <div className="text-center"> Type</div>,
    cell: ({ row }) => <div className="capitalize text-center">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "senderEmail",
    header: ({ column }) => {
      return (
        <div className="text-center">
          {" "}
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
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
        <div className="text-center">
          {" "}
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Receiver Email
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.getValue("receiverEmail")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BDT",
      }).format(amount);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Date
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const formatedDate = format(new Date(row.getValue("date")), "Pp");

      return <div className="lowercase text-center">{formatedDate}</div>;
    },
  },
  {
    accessorKey: "invoiceUrl",
    header:"",
    enableHiding: false,

    cell: ({ row }) => {
      return <Button onClick={() => window.open(row.getValue("invoiceUrl"))}><ArrowDownToLine /> Invoice</Button>;
    },
  },
];

export function CommonTransactionHistoryTzcxczxcable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
