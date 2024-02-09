import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Head, Link } from "@inertiajs/react";
import { Bell } from "lucide-react";

export default function Settings({ user }: { user: User }) {
    return (
        <>
            <AuthenticatedLayout user={user}>
                <Head title="Settings" />
                <div className="px-24 py-12">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Settings</h1>
                            <p className="text-gray-500">
                                Manage your account settings
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="ghost" size={"icon"}>
                                <Bell size={24} />
                            </Button>
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
                                                .map((name) =>
                                                    name.charAt(0).toUpperCase()
                                                )
                                                .join("")}
                                        </div>
                                    </Link>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
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
                                        <Link
                                            href={route("profile.settings")}
                                            className="w-full px-2 py-1.5"
                                        >
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
                    <div className="mt-12 rounded-lg bg-popover px-8 py-6 space-y-6">
                        <div>
                            <p className="text-muted-foreground text-xs mb-2">
                                GENERAL
                            </p>
                            <div className="flex flex-col divide-y-2">
                                <div>
                                    <Link href="#" className="py-4 block">
                                        <p className="font-bold">Account</p>
                                        <p className="text-muted-foreground">
                                            Subtitle
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="py-4 block">
                                        <p className="font-bold">
                                            Notifications
                                        </p>
                                        <p className="text-muted-foreground">
                                            Subtitle
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href={route("profile.settings.m3u")}
                                        className="py-4 block"
                                    >
                                        <p className="font-bold">M3U File</p>
                                        <p className="text-muted-foreground">
                                            Subtitle
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-muted-foreground text-xs mb-2">
                                SECURITY
                            </p>
                            <div className="flex flex-col divide-y-2">
                                <div>
                                    <Link href="#" className="py-4 block">
                                        <p className="font-bold">Password</p>
                                        <p className="text-muted-foreground">
                                            Subtitle
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="py-4 block">
                                        <p className="font-bold">Profile PIN</p>
                                        <p className="text-muted-foreground">
                                            Subtitle
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="py-4 block">
                                        <p className="font-bold">
                                            Linked accounts
                                        </p>
                                        <p className="text-muted-foreground">
                                            Subtitle
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#" className="py-4 block">
                                        <p className="font-bold">
                                            Manage devices
                                        </p>
                                        <p className="text-muted-foreground">
                                            Subtitle
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
