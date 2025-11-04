import LoadingPage from "@/components/layouts/LoadingPage";
import SidebarHeader from "@/components/layouts/SidebarHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { role } from "@/constants/role";
import { useGetMeQuery } from "@/redux/features/auths/auth.api";
import { Wallet, ArrowDownCircle, ArrowUpCircle, Loader } from "lucide-react";


export default function WalletSummary() {
const {data:userData,isLoading}=useGetMeQuery(undefined)

if(isLoading) return <LoadingPage></LoadingPage>
console.log(userData)

const cardObject = [
    {
      title: "Current Balance",
      icon: <Wallet className="text-blue-500 w-5 h-5" />,
      data: 12540,
      description: "Available for use",
    },
    {
      title: userData?.data?.role===role.user? "Total Cash In From Agent":"Total Cash In To User",
      icon: <ArrowDownCircle className="text-green-500 w-5 h-5" />,
      data: 26800,
      description: "All Time",
    },
    {
      title: "Total Cash Out",
      icon: <ArrowUpCircle className="text-red-500 w-5 h-5" />,
      data: 25000,
      description: "All Time",
    },
    {
      title: "Total Add Money",
      icon: <ArrowDownCircle className="w-5 h-5 text-green-600" />,
      data: 200,
      description: "All TIme",
    },
  ];

  return (
    <div>
      <SidebarHeader heading="Dashboard" subHeading="Overview" subSubHeading="Wallet Summary" />

      <div className="container mx-auto px-5 py-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Wallet Balance */}

        {cardObject.map((singleCard) => (
          <Card className="">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="">{singleCard.title}</CardTitle>
              {singleCard.icon}
            </CardHeader>
            <CardContent>
              <p className="text-2xl">৳{singleCard.data}</p>
              <p className="">{singleCard.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
