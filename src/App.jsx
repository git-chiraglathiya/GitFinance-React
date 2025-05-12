import Dashboard from "@/app/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

function App() {

  let router = createBrowserRouter([
    {
      path: "/",
      Component: Dashboard
    },
  ]);

  return (
    <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
    </>
  )
}

export default App
