import { AppSidebar } from "@/components/app-sidebar";
import { FloatingActionButton } from "@/components/floating-action-button";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Plus } from "lucide-react";

const Help = () => {
    return (
        <>
            <SidebarProvider>
                <AppSidebar variant="inset" />
                <SidebarInset>
                    <SiteHeader />
                    <h1>Get Help</h1>
                    <FloatingActionButton Icon={Plus} />
                </SidebarInset>
            </SidebarProvider>
        </>
    )
};

export default Help;