import { createBrowserRouter, useLoaderData } from "react-router";
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
import { useEffect } from "react";
import { useActivePageStore } from "./store/activePage";

const pageValue = (page) => {
    return {
        page
    }
};

const load = (Component) => {

    return (props) => {
        const data = useLoaderData();
        const setCurrentPage = useActivePageStore(state => state.setCurrentPage);

        useEffect(() => {
            setCurrentPage(data.page); // for example, if props has a `pageName`
        }, [data.page]);

        return <Component {...props} />;
    }    
};


export const router = createBrowserRouter([

    //  MAIN
    {
        path: "/",
        Component: load(Dashboard),
        loader: () => pageValue("Dashboard")
    },
    {
        path: "/transactions",
        Component: load(Transactions),
        loader: () => pageValue("Transactions")
    },
    {
        path: "/categories",
        Component: load(Categories),
        loader: () => pageValue("Categories")
    },
    {
        path: "/tags",
        Component: load(Tags),
        loader: () => pageValue("Tags")
    },
    {
        path: "/recurring",
        Component: load(Recurring),
        loader: () => pageValue("Recurring")
    },
    {
        path: "/assets",
        Component: load(Assets),
        loader: () => pageValue("Assets")
    },
    {
        path: "/targets",
        Component: load(Targets),
        loader: () => pageValue("Targets")
    },

    //  USER HELPERS
    {
        path: "/settings",
        Component: load(Settings),
        loader: () => pageValue("Settings")
    },
    {
        path: "/learning",
        Component: load(Learning),
        loader: () => pageValue("Learning")
    },
    {
        path: "/help",
        Component: load(Help),
        loader: () => pageValue("Help")
    },
    {
        path: "/feedback",
        Component: load(Feedback),
        loader: () => pageValue("Feedback")
    },

    //  FUTURE
    {
        path: "/loan",
        Component: load(Loans),
        loader: () => pageValue("Loans / Debts")
    },
    {
        path: "/receivables",
        Component: load(Receivables),
        loader: () => pageValue("Receivables")
    }
]);