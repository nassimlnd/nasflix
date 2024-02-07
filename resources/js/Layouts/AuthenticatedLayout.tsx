import { useState, PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import ApplicationLogo from "@/Components/ApplicationLogo";
import SidebarLink from "@/Components/SidebarLink";
import { Film, Home } from "lucide-react";
import Sidebar from "@/Components/Sidebar";

export default function Authenticated({
    user,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="h-full w-full flex">
            <Sidebar user={user} />
            <div>{children}</div>
        </div>
    );
}
