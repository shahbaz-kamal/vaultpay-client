import { CommonLayout } from "@/components/layouts/CommonLayout";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <CommonLayout>
        <Outlet></Outlet>
      </CommonLayout>
    </>
  );
}

export default App;
