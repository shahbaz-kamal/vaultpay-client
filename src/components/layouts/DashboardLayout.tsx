import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
  
} from "@/components/ui/sidebar"
import SidebarHeader from "./SidebarHeader"
import { Outlet } from "react-router"

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
       {/* sidebar header starts */}
     {/* will be updated later*/}
       {/* sidebar header ends */}
        

        <Outlet></Outlet>
      </SidebarInset>
    </SidebarProvider>
  )
}
