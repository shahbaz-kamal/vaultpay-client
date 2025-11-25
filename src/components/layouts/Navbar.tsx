import { Logo } from "@/assets/icons/Logo";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ModeToggle } from "./ModeToggler";
import { Link, useLocation } from "react-router";
import { authApi, useGetMeQuery, useLogoutMutation } from "@/redux/features/auths/auth.api";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { role } from "@/constants/role";
import { User } from "lucide-react";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { active: true, href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/admin", label: "Dashboard", role: role.superAdmin },
  { href: "/user", label: "Dashboard", role: role.user },
  { href: "/agent", label: "Dashboard", role: role.agent },
];

export default function Navbar() {
  const location = useLocation();
  const { data: userData } = useGetMeQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  console.log(userData);

  const handleLogout = async () => {
    const toastId = toast.loading("Logging Out...");
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState());
      dispatch(authApi.util.invalidateTags(["USER"]));
      toast.success("Log Out Successful", { id: toastId });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };
  return (
    <header className="border-b px-4 ">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const isActive = location.pathname === link.href;

                    // role matching
                    const canShow = link.role === "PUBLIC" || link.role === userData?.data?.role;

                    if (!canShow) return null;

                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          className={`py-1.5 font-medium hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`}
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary hover:text-primary/90">
              <Logo />
            </a>
            {/* Navigation menu */}

            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;

                  // role matching
                  const canShow = link.role === "PUBLIC" || link.role === userData?.data?.role;

                  if (!canShow) return null;

                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        className={`py-1.5 font-medium hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`}
                      >
                        <Link to={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
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
            <img className="h-8 w-8 rounded-full" src={userData?.data?.profilePicture} alt="profile Picture" />
          )}
          {userData?.data && !userData?.data?.profilePicture && <User className="text-primary " size={30} />}
        </div>
      </div>
    </header>
  );
}
