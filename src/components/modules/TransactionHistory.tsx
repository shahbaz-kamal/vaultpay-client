/* eslint-disable @typescript-eslint/no-explicit-any */
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
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TransactionHistoryConstants from "@/constants/TransactionHistoryConstants";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import type { ITransaction } from "@/types";
import type { TRANSACTION_SOURCE, TRANSACTION_TYPE } from "@/types/transaction.type";
import { Role } from "@/types/user.type";
import { useNavigate } from "react-router";
import LoadingPage from "../layouts/LoadingPage";

interface IProps {
  requiredData: Partial<ITransaction>[];
}

export function TransactionHistory({ requiredData }: IProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns = TransactionHistoryConstants() as ColumnDef<
    {
      _id?: string;
      transactionId?: string;
      type?: TRANSACTION_TYPE;
      source?: TRANSACTION_SOURCE;
      amount?: number;
      status?: string;
      createdAt?: Date;
      transactionDate: Date | undefined;
    },
    any
  >[];

  const data = (requiredData || []).map((item, index) => ({
    id: index + 1,
    transactionDate: item.createdAt,
    ...item,
  }));

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
  const navigate = useNavigate();

  const { data: userData } = useGetMeQuery(undefined);

  let navigateToTransactionHistory = "";

  if (userData?.data?.role === Role.USER) navigateToTransactionHistory = "/user/transaction-history";
  if (userData?.data?.role === Role.AGENT) navigateToTransactionHistory = "/agent/transaction-history";

  if (!userData) return <LoadingPage></LoadingPage>;
  return (
    <div className="w-full">
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
          <Button variant="outline" size="sm" onClick={() => navigate(navigateToTransactionHistory)}>
            View All Transaction
          </Button>
        </div>
      </div>
    </div>
  );
}
