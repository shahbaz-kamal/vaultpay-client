import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Link } from "react-router";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";

export interface ITransactionItem {
  invoiceUrl: string;
  status: string;
  agentEmail?: string;
  source?: string;
  receiverEmail?: string;
  userEmail?: string;
  amount: number;
  date: Date;
}

interface IProps<T extends ITransactionItem> {
  isCashOut: boolean;
  isSendMoney: boolean;
  isAddMOney: boolean;
  isCashIn: boolean;
  data: T[];
}

// id: "INV001",
// status: "Paid",
// agentEmail: "a@b.com",
// amount: 20,
// date: "hello",

export default function RecentTransactionTable<T extends ITransactionItem>({
  isCashOut,
  isSendMoney,
  isAddMOney,
  isCashIn,
  data,
}: IProps<T>) {
const {data:myData}=useGetMeQuery(undefined)

let viewAlllink=""

  return (
    <div>
      <Table>
        <TableCaption><Button ><Link to={viewAlllink}>View All Transactions </Link> </Button></TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="w-[100px] text-center">S/N</TableHead>
            <TableHead className="text-center">Status</TableHead>
            {isCashOut && <TableHead className="text-center">Agent Email</TableHead>}
            {isAddMOney && <TableHead className="text-center">Source</TableHead>}
            {isSendMoney && <TableHead className="text-center">Reciever Email</TableHead>}
            {isCashIn && <TableHead className="text-center">User Email</TableHead>}
            <TableHead className="text-center">Amount</TableHead>
            <TableHead className="text-center"> Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="text-center">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.status}</TableCell>
              {isCashOut && <TableCell>{item.agentEmail}</TableCell>}
              {isAddMOney && <TableCell>{item.source}</TableCell>}
              {isSendMoney && <TableCell>{item.receiverEmail}</TableCell>}
              {isCashIn && <TableCell>{item.userEmail}</TableCell>}
              <TableCell className="">{item.amount}</TableCell>
              <TableCell>{format(new Date(item.date), "PPpp")}</TableCell>
              <TableCell className="">
                <Button variant="link" onClick={() => window.open(item.invoiceUrl)}>
                  Download Invoice
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
