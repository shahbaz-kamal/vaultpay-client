import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { authApi, useGetMeQuery, useLogoutMutation } from "@/redux/features/auths/auth.api";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { ModeToggle } from "./ModeToggler";
import { User } from "lucide-react";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";

interface IProps {
  heading: string;
  subHeading: string;
  subSubHeading: string;
}
export default function SidebarHeader({ heading, subHeading, subSubHeading }: IProps) {
  const { data: userData } = useGetMeQuery(undefined);

  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    const toastId = toast.loading("Logging Out...");
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState());
      toast.success("Log Out Successful", { id: toastId });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
      <div className="flex items-center w-full justify-between gap-2 px-3">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb className="flex justify-around w-full">
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">{heading}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className={!subSubHeading ? "text-primary font-medium" : "hidden md:block"}>{subHeading}</BreadcrumbPage>
              </BreadcrumbItem>
              {subSubHeading && (
                <>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-primary font-medium">{subSubHeading}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2">
          {/* {!userData?.data?.profilePhoto &&  <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/?size=48&id=13042&format=png" alt="" />} */}
          {!userData?.data?.email && (
            <Button asChild variant="default" size="sm" className="text-sm ">
              <Link to={"/login"}> Login</Link>
            </Button>
          )}
          {userData?.data?.email && (
            <Button onClick={handleLogout} variant="outline" size="sm" className="text-sm ">
              Logout
            </Button>
          )}
          <ModeToggle></ModeToggle>
          {userData?.data && userData?.data?.profilePicture && (
            <img className="h-8 w-8 rounded-full" src={userData?.data?.profilePicture} alt="" />
          )}
          {userData?.data && !userData?.data?.profilePicture && <User className="text-primary " size={30} />}
        </div>
      </div>
    </header>
  );
}
