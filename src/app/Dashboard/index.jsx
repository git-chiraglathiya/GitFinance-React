import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Plus } from "lucide-react";

import data from "./data.json"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>

        <Sheet>
            <SheetTrigger asChild>
                <Button
                variant="default"
                className={`
                    fixed z-50 bottom-4
                    left-1/2 -translate-x-1/2
                    rounded-full w-14 h-14
                    sm:left-auto sm:right-6 sm:translate-x-0
                    sm:rounded-md sm:w-14 sm:h-14
                    md:right-10
                    flex items-center justify-center
                `}
                >
                <Plus className="w-6 h-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Bottom Sheet Content</h2>
                <p>This is your bottom sheet content.</p>
                </div>
            </SheetContent>
        </Sheet>

      </SidebarInset>
    </SidebarProvider>
  )
}
