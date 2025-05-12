import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconCalendar,
  IconDashboard,
  IconDatabase,
  IconTargetArrow,
  IconCoins,
  IconFileAi,
  IconCategory,
  IconTags,
  IconFileDescription,
  IconFileWord,
  IconSend,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSchool,
  IconSearch,
  IconSettings,
  IconUsers
} from "@tabler/icons-react"

import {   
  GalleryVerticalEnd,
  AudioWaveform,
  Command 
} from "lucide-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"

import { TeamSwitcher } from "@/components/team-switcher"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  teams: [
    {
      name: "All Accounts",
      logo: GalleryVerticalEnd,
      plan: "Accounts",
    },
    {
      name: "Chirag Lathiya",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Rameshbhai Lathiya",
      logo: Command,
      plan: "Free",
    },
  ],
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: IconDashboard,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: IconListDetails,
    },
    {
      title: "Categories",
      url: "/categories",
      icon: IconCategory,
    },
    {
      title: "Tags",
      url: "/tags",
      icon: IconTags
      //examples: ["refundable", "non-refundable", "temparory", "TV Debt", "Personal Loan"]
    },
    {
      title: "Recurring",
      url: "/recurring",
      icon: IconCalendar,
    },
    {
      title: "Assets",
      url: "/assets",
      icon: IconCoins,
    },
    {
      title: "Assets",
      url: "/assets",
      icon: IconCoins,
    },
    {
      title: "Targets",
      url: "/targets",
      icon: IconTargetArrow,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Learning",
      url: "/learning",
      icon: IconSchool,
    },
    {
      title: "Get Help",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Feedback",
      url: "/help",
      icon: IconSend,
    }
  ],
  recurring: [
    {
      name: "Income",
      url: "/recurring-income",
      icon: IconDatabase,
    },
    {
      name: "Expenses",
      url: "/recurring-expense",
      icon: IconReport,
    },
    {
      name: "Investment",
      url: "/recurring-investment",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <img src="/logo.png" width={20} height={20} />
                <span className="text-base font-semibold">Git Finance</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.recurring} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
