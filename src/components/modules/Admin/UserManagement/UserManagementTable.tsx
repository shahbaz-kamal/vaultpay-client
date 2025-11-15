import LoadingPage from "@/components/layouts/LoadingPage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import UpdateProfileModal from "@/components/UpdateProfileModal";
import { cn } from "@/lib/utils";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";

import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import { IsActive, Role, type IUser } from "@/types/user.type";

import { useState } from "react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

interface IProps {
  role: Role;
}

export default function UserManageMentTable({ role }: IProps) {
  const [searchText, setSearchText] = useState("");

  const params = {
    searchTerm: searchText,
    role: Role.USER,
  };
  const { data: allUsers, isLoading: allLoading } = useGetAllUsersQuery(params, {
    refetchOnMountOrArgChange: true,
  });

  const { data: currentUserData } = useGetMeQuery(undefined);
  console.log(allUsers);
  if (!allUsers) return <LoadingPage></LoadingPage>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <Label className="px-1 mb-3"> Search Users</Label>
          {/* you can search by   "name","email","type""sources","status","notes","senderEmail","receiverEmail", "source" */}
          <Input placeholder="Name / Email / " value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
      </div>
      <Table className="w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">SN</TableHead>
            <TableHead className="text-center">Photo</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Role</TableHead>
            <TableHead className="text-center">Verification</TableHead>
            <TableHead className="text-center">Deleted?</TableHead>
            <TableHead className="text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allUsers.data.map((user: IUser, index: number) => (
            <TableRow key={user._id || index}>
              {/* SN */}
              <TableCell className="font-medium text-center">{index + 1}</TableCell>

              {/* Photo */}
              <TableCell className="text-center">
                <div className="flex justify-center">
                  <img src={user.profilePicture || "/default-user.png"} alt="User" className="w-10 h-10 rounded-full object-cover border" />
                </div>
              </TableCell>

              {/* Name */}
              <TableCell className="text-center">{user.name}</TableCell>

              {/* Email */}
              <TableCell className="text-center">{user.email}</TableCell>

              {/* Status Badge */}
              <TableCell className="text-center">
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    user.isActive === IsActive.ACTIVE ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  )}
                >
                  {user.isActive}
                </span>
              </TableCell>

              {/* Role Badge */}
              <TableCell className="text-center">
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold capitalize",
                    user.role === Role.ADMIN && "bg-purple-100 text-purple-700",
                    user.role === Role.AGENT && "bg-blue-100 text-blue-700",
                    user.role === Role.SUPER_ADMIN && "bg-red-100 text-red-700",
                    user.role === Role.USER && "bg-gray-100 text-gray-700"
                  )}
                >
                  {user.role}
                </span>
              </TableCell>

              {/* Verification */}
              <TableCell className="text-center">
                {user.isVerified ? (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">Verified</span>
                ) : (
                  <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">Not Verified</span>
                )}
              </TableCell>

              {/* Deleted Badge */}
              <TableCell className="text-center">
                {user.isDeleted ? (
                  <span className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full">Deleted</span>
                ) : (
                  <span className="px-3 py-1 text-xs bg-green-100 text-green-900 rounded-full">No</span>
                )}
              </TableCell>

              {/* ACTIONS */}
              <TableCell className="text-center space-x-2">
                <UpdateProfileModal buttonText="Update" userData={user} currentUserRole={currentUserData?.data.role}></UpdateProfileModal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
