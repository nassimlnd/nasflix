import { Head, Link } from "@inertiajs/react";
import { Movie, PageProps, User } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Input } from "@/Components/ui/input";
import {
    ArrowLeft,
    Bell,
    ChevronLeft,
    ChevronRight,
    Plus,
    Search,
} from "lucide-react";
import { Button, buttonVariants } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MovieCard from "@/Components/card/MovieCard";

export default function Dashboard({
    user,
    data,
}: {
    user: User;
    data: Array<Movie>;
}) {
    const [activeTab, setActiveTab] = useState("Movies");
    const tabs = ["Movies", "Series", "TV Shows"];

    if (data.length == 0) {
        console.log("No data found");
    } else {
        console.log("Data found : ", data);
    }

    return (
        <>
            <AuthenticatedLayout user={user}>
                <Head title="Home" />
                <div className="flex flex-col px-24 py-12">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-6">
                            {/* underline underline-offset-8 decoration-primary decoration-2 */}
                            {tabs.map((tab) => {
                                return (
                                    <Button
                                        key={tab}
                                        variant={"link"}
                                        onClick={() => {
                                            console.log(
                                                "Changed tab to : ",
                                                tab
                                            );
                                            setActiveTab(tab);
                                        }}
                                        className={cn(
                                            "text-base text-white font-bold",
                                            activeTab == tab
                                                ? "underline underline-offset-8 decoration-primary decoration-2"
                                                : ""
                                        )}
                                    >
                                        {tab}
                                    </Button>
                                );
                            })}
                        </div>
                        <div className="relative bg-background">
                            <div className="absolute top-0 left-3 h-full flex items-center justify-center">
                                <Search
                                    size={24}
                                    className="text-muted-foreground"
                                />
                            </div>
                            <Input
                                type="search"
                                placeholder="Search"
                                className="w-[400px] relative pl-12 py-6 bg-transparent"
                            />
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
                                            href={""}
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
                    {activeTab == "Movies" && (
                        <div className="w-full mt-16">
                            <div className="max-w-5xl mx-auto relative">
                                <img
                                    src="/assets/images/Picture.png"
                                    alt="Movie"
                                    className="w-full rounded-lg"
                                />
                                <div className="absolute flex flex-col justify-between top-0 left-0 px-12 py-8 w-full h-full">
                                    <p className="text-4xl font-bold pt-4">
                                        The Crown
                                    </p>
                                    <div className="flex justify-between">
                                        <Button
                                            variant={"secondary"}
                                            size={"icon"}
                                        >
                                            <ChevronLeft />
                                        </Button>
                                        <Button
                                            variant={"secondary"}
                                            size={"icon"}
                                        >
                                            <ChevronRight />
                                        </Button>
                                    </div>
                                    <div className="flex justify-between">
                                        <Button
                                            variant={"secondary"}
                                            className="flex gap-2 items-center text-base"
                                        >
                                            <Plus />
                                            Watchlist
                                        </Button>
                                        <Button className="text-base">
                                            Watch now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-16 space-y-4">
                                <h2 className="font-bold text-3xl">
                                    Popular on Nasflix
                                </h2>
                                <div className="flex flex-wrap gap-6 max-w-full">
                                    {data.map((movie) => {
                                        return (
                                            <MovieCard
                                                key={movie.id}
                                                title={movie.title}
                                                category={movie.category}
                                                duration={movie.duration}
                                                image={movie.image}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </AuthenticatedLayout>
        </>
    );
}
