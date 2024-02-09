import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Head, Link, useForm } from "@inertiajs/react";
import { Bell, ChevronRight } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Progress } from "@/Components/ui/progress";

export default function M3USettings({ user }: { user: User }) {
    interface FormProps {
        m3ufile: File | undefined;
    }

    const { data, setData, post, progress } = useForm<FormProps>({
        m3ufile: undefined,
    });

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            setData("m3ufile", e.currentTarget.files[0]);
        }
    };

    function submit(e: any) {
        e.preventDefault();
        post(route("profile.settings.m3u.store"), {
            onSuccess: () => {
                console.log("Uploaded.");
            },
        });
    }

    return (
        <>
            <AuthenticatedLayout user={user}>
                <Head title="M3U File Settings" />
                <div className="px-24 py-12">
                    <div className="flex items-center justify-between">
                        <div
                            className="flex items-center gap-2
                        "
                        >
                            <p className="text-muted-foreground">Settings</p>
                            <ChevronRight size={16} />
                            <p>M3U File</p>
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
                            <p className="text-lg font-semibold">
                                M3U File Settings
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Manage your M3U file settings
                            </p>
                        </div>
                        <div>
                            <form className="space-y-6" onSubmit={submit}>
                                <div className="space-y-2">
                                    <Label htmlFor="input">M3U File</Label>
                                    <Input
                                        type="file"
                                        id="input"
                                        onChange={handleFile}
                                        required
                                        className="file:text-white file:bg-primary p-0 h-fit file:p-4"
                                    />
                                    {progress && (
                                        <Progress
                                            value={progress.percentage}
                                            className="mt-2"
                                            max={100}
                                        />
                                    )}
                                </div>
                                <Button>Upload</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
