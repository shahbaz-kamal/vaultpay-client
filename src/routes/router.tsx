import App from "@/App";
import {  DashboardLayout } from "@/components/layouts/DashboardLayout";
import { About } from "@/Pages/About";
import { Homepage } from "@/Pages/Home/Homepage";



import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
        // public routes
      { index: true, Component: Homepage },
      { path: "about", Component: About },
       // Protected Routes
    ],
  },
  //Admin Routes
  {
path:"/admin",
Component:DashboardLayout,
children:[{}]
  },
]);
