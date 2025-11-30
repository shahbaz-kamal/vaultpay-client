import { CommonLayout } from "@/components/layouts/CommonLayout";
import { Outlet } from "react-router";
import { generateRoutes } from "./utils/generateRoute";
import { adminSidebarItems } from "./routes/adminSidebarItems";


function App() {
  const data = generateRoutes(adminSidebarItems);
  console.log(data);
  return (
    <>
      <CommonLayout>
        <Outlet></Outlet>
      </CommonLayout>
    </>
  );
}

export default App;
