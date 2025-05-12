import { AppSidebar } from "@/components/app-sidebar";
import { FloatingActionButton } from "@/components/floating-action-button";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Plus } from "lucide-react";

const Investment = () => {
    return (
        <>
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <h1>Investment</h1>
                <FloatingActionButton Icon={Plus} />
            </SidebarInset>
        </SidebarProvider>
        </>
    )
};

export default Investment;