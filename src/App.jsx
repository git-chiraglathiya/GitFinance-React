import Dashboard from "@/app/Dashboard";
import { ThemeProvider } from "@/components/theme-provider";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App
