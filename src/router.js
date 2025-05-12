import { createBrowserRouter } from "react-router";
import Dashboard from "@/app/Dashboard";
import Transactions from "@/app/Transactions";
import Categories from "@/app/Categories";
import Tags from "@/app/Tags";
import Recurring from "@/app/Recurring";
import Assets from "@/app/Assets";
import Targets from "@/app/Targets";
import Settings from "@/app/Settings";
import Learning from "@/app/Learning";
import Help from "@/app/Help";
import Loans from "@/app/Loans";
import Receivables from "@/app/Receivables";
import Feedback from "@/app/Feedback";

export const router = createBrowserRouter([

    //  MAIN
    {
        path: "/",
        Component: Dashboard
    },
    {
        path: "/transactions",
        Component: Transactions
    },
    {
        path: "/categories",
        Component: Categories
    },
    {
        path: "/tags",
        Component: Tags
    },
    {
        path: "/recurring",
        Component: Recurring
    },
    {
        path: "/assets",
        Component: Assets
    },
    {
        path: "/targets",
        Component: Targets
    },

    //  USER HELPERS
    {
        path: "/settings",
        Component: Settings
    },
    {
        path: "/learning",
        Component: Learning
    },
    {
        path: "/help",
        Component: Help
    },
    {
        path: "/feedback",
        Component: Feedback
    },

    //  FUTURE
    {
        path: "/loan",
        Component: Loans
    },
    {
        path: "/receivables",
        Component: Receivables
    }
]);