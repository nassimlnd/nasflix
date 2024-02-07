import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import SidebarLink from "@/Components/SidebarLink";
import { User } from "@/types";
import { Film, Home, LogOut } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Link } from "@inertiajs/react";

export default function Sidebar({ user }: { user: User }) {
    return (
        <div className="w-[300px] border-r flex flex-col">
            <div className="flex items-center justify-center gap-6">
                <ApplicationLogo className={"w-5"} />
                <h1 className={"text-2xl font-bold text-center text-[#F5F5F6]"}>
                    Nasflix
                </h1>
            </div>
            <div className="mt-6 px-4 space-y-2 h-full">
                <SidebarLink href={""} icon={<Home />} text="Home" />
                <SidebarLink href={""} icon={<Film />} text="Movies" />
            </div>
            <div className="border-t py-5 px-6 flex items-center gap-3">
                <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-[#F5F5F6]">
                    {user.name.split(" ")[0].charAt(0).toUpperCase() +
                        user.name.split(" ")[1].charAt(0).toUpperCase()}
                </div>
                <p className="font-bold flex-grow text-sm">{user.name}</p>
                <Link
                    href={route("logout")}
                    method="post"
                    className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                    })}
                >
                    <LogOut size={16} />
                </Link>
            </div>
        </div>
    );
}
