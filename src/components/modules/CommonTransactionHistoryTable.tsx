import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "../ui/input";
import { DatePicker } from "../DatePicker";

import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { useGetAllTransactionsQuery, useGetMyTransactionQuery } from "@/redux/features/transactions/transaction.api";
import { Role } from "@/types/user.type";
import Pagination from "./PaginationComp";
import LoadingPage from "../layouts/LoadingPage";
import type { ITransaction } from "@/types";
import { format } from "date-fns";
import { Button } from "../ui/button";

export function CommonTransactionHistoryTable() {
  const [searchText, setSearchText] = useState("");
  const [fromDate, setFromDate] = useState<string | undefined>();
  const [toDate, setToDate] = useState<string | undefined>();
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [matchedData,setMatchedData]=useState(0)

  const { data: userData, isLoading: userLoading } = useGetMeQuery(undefined);

  console.log("My transaction", userData);
  const params = {
    searchTerm: searchText,
    to: toDate,
    from: fromDate,
    limit,
    page: pageNumber,
  };
  const isUserOrAgent = userData?.data.role === Role.USER || userData?.data.role === Role.AGENT;

  const { data: myTransactions, isLoading: myLoading } = useGetMyTransactionQuery(params, {
    skip: !isUserOrAgent,
    refetchOnMountOrArgChange: true,
  });
  const { data: allTransactions, isLoading: allLoading } = useGetAllTransactionsQuery(params, {
    skip: isUserOrAgent,
    refetchOnMountOrArgChange: true,
  });

  const transactionList: ITransaction[] = isUserOrAgent ? myTransactions?.data ?? [] : allTransactions?.data ?? [];
  console.log("My Transaction", myTransactions);
  console.log("All Transacxtion", allTransactions);

  console.log(transactionList);
  // useEffect(() => {
  //   console.log("Search:", searchText);
  //   console.log("From:", fromDate);
  //   console.log("To:", toDate);

  //   // Call API or filter data here
  // }, [searchText, fromDate, toDate]);


  useEffect(() => {
    const transactionMeta = isUserOrAgent ? myTransactions?.meta : allTransactions?.meta;
    if (transactionMeta?.totalPage) {
      setTotalPages(transactionMeta.totalPage);
    }
    const matchedDocument=isUserOrAgent ? myTransactions?.meta?.noOfMatchedDocuments : allTransactions?.meta?.noOfMatchedDocuments;

    if (matchedDocument !== undefined) setMatchedData(matchedDocument)
  }, [myTransactions, allTransactions, isUserOrAgent]);

  if (userLoading || myLoading || allLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <Label className="px-1 mb-3"> Search Transactions</Label>
          {/* you can search by   "name","email","type""sources","status","notes","senderEmail","receiverEmail", "source" */}
          <Input placeholder="Name / Email / Type / Status / Notes..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>

        <div className="w-full">
          <DatePicker onChange={(date) => setFromDate(date?.toISOString())} label="Filter By Date (From)"></DatePicker>
        </div>
        <div>
          <DatePicker onChange={(date) => setToDate(date?.toISOString())} label="Filter By Date (TO)"></DatePicker>
        </div>
      </div>

      <div className="mb-6">
        {" "}
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">S/ N</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-center">Source</TableHead>
              <TableHead className="text-center">Sender</TableHead>
              <TableHead className="text-center">Receiver</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Invoice</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionList.map((transaction, index) => (
              <TableRow key={transaction._id}>
                <TableCell className="font-medium text-center">{index + 1}</TableCell>
                <TableCell className="text-center">{transaction.status}</TableCell>
                <TableCell className="text-center">{transaction.type}</TableCell>
                <TableCell className="text-center">{transaction.source}</TableCell>
                <TableCell className="text-center">{transaction.senderEmail ? transaction.senderEmail : "N/ A"}</TableCell>
                <TableCell className="text-center">{transaction.receiverEmail}</TableCell>
                <TableCell className="text-center">{transaction.amount}</TableCell>
                <TableCell className="text-center">{format(new Date(transaction.createdAt), "PPpp")}</TableCell>
                <TableCell className="text-center">
                  <Button onClick={() => window.open(transaction.invoiceUrl as string)}>Invoice</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
        </Table>
      </div>
      <Pagination
        currentPage={pageNumber}
        totalPages={totalPages}
        paginationItemsToDisplay={10}
        setLimit={setLimit}
        setPageNumber={setPageNumber}
        matchedData={matchedData}
        dataOnCurrentPage={transactionList.length}
      ></Pagination>
    </div>
  );
}
