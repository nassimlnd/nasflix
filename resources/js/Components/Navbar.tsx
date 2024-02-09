import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import { Search } from "lucide-react";
import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import { buttonVariants } from "./ui/button";
import { User } from "@/types";
import { Link } from "@inertiajs/react";

export default function Navbar({ user }: { user: User }) {
    return (
        <div className="fixed bg-gradient-to-b from-black/75 to-transparent flex justify-between top-0 left-0 w-full px-12 py-6">
            <div className="flex gap-10">
                <div className="flex items-center gap-1">
                    <ApplicationLogo className="w-8 h-fit" />
                    <h3 className="text-lg font-bold text-center text-[#F5F5F6]">
                        NASFLIX
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        href={""}
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Home
                    </Link>
                    <Link
                        href={""}
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Movies
                    </Link>
                    <Link
                        href={""}
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Series
                    </Link>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <Link
                    href="#"
                    className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                    })}
                >
                    <Search size={20} />
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Link
                            href="#"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "icon",
                            })}
                        >
                            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-[#F5F5F6]">
                                {user.name
                                    .split(" ")
                                    .map((name) => name.charAt(0).toUpperCase())
                                    .join("")}
                            </div>
                        </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="p-0">
                            <Link
                                href={route("profile.edit")}
                                className="w-full px-2 py-1.5"
                            >
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="p-0">
                            <Link href={""} className="w-full px-2 py-1.5">
                                Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="p-0">
                            <Link
                                href={route("logout")}
                                method="post"
                                className="w-full px-2 py-1.5"
                            >
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
