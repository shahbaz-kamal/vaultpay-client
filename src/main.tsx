import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "@/routes/router.tsx";
import { ThemeProvider } from "./providers/theme.provider";

const savedTheme = localStorage.getItem("vite-ui-theme");

if (savedTheme === "dark" || savedTheme === "light") {
  document.documentElement.classList.add(savedTheme);
} else {
  // If no saved theme, match system preference
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.add(systemPrefersDark ? "dark" : "light");
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
