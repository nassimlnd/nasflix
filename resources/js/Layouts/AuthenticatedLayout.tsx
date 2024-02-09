import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import Sidebar from "@/Components/sidebar/Sidebar";
import { Link } from "@inertiajs/react";

export default function Authenticated({
    user,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <div className="flex h-full w-full">
            <Sidebar />
            <div className="ml-[350px] h-full w-full">{children}</div>
        </div>
    );
}
