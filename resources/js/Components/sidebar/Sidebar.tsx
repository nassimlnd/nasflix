import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    Award,
    CheckCircle2,
    Clock,
    Compass,
    Heart,
    Home,
    LogOut,
    PlusCircle,
    Settings,
    Star,
} from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Method } from "@inertiajs/core";

type SidebarGroupProps = {
    children: React.ReactNode;
    className?: string;
};

type SidebarGroupLabelProps = {
    children: React.ReactNode;
};

type SidebarLinkProps = {
    href: string;
    icon: any;
    text: string;
    method?: Method;
};

export default function Sidebar() {
    return (
        <div className="fixed w-[400px] h-screen border-r flex flex-col">
            <SidebarHeader>
                <div className="flex items-center gap-6">
                    <ApplicationLogo className={"w-10 h-fit"} />
                    <h1
                        className={
                            "hidden text-2xl font-bold text-center text-[#F5F5F6]"
                        }
                    >
                        Nasflix
                    </h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarLink href={""} icon={<Home />} text="Home" />
                    <SidebarLink href={""} icon={<Compass />} text="Discover" />
                    <SidebarLink href={""} icon={<Award />} text="Awards" />
                </SidebarGroup>
                <SidebarGroup className="flex-grow">
                    <SidebarGroupLabel>Library</SidebarGroupLabel>
                    <SidebarLink href={""} icon={<Clock />} text="Recent" />
                    <SidebarLink href={""} icon={<Star />} text="Top rated" />
                    <SidebarLink href={""} icon={<Heart />} text="Favorites" />
                    <SidebarLink
                        href={""}
                        icon={<PlusCircle />}
                        text="Watchlist"
                    />
                    <SidebarLink
                        href={""}
                        icon={<CheckCircle2 />}
                        text="Completed"
                    />
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>General</SidebarGroupLabel>
                    <SidebarLink
                        href={""}
                        icon={<Settings />}
                        text="Settings"
                    />
                    <SidebarLink href={""} icon={<LogOut />} text="Logout" />
                </SidebarGroup>
            </SidebarContent>
        </div>
    );
}

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mt-10 px-8 flex flex-col gap-12 h-full pb-12">
            {children}
        </div>
    );
};

export const SidebarHeader = ({ children }: { children: React.ReactNode }) => {
    return <div className="px-10 mt-12">{children}</div>;
};

export const SidebarFooter = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="border-t py-5 px-6 flex items-center gap-3">
            {children}
        </div>
    );
};

export function SidebarGroup({ children, className }: SidebarGroupProps) {
    return <div className={cn("space-y-2", className)}>{children}</div>;
}

export function SidebarGroupLabel({ children }: SidebarGroupLabelProps) {
    return <p className="pl-2 text-xs text-muted-foreground">{children}</p>;
}

export function SidebarLink({ href, icon, text, method }: SidebarLinkProps) {
    return (
        <Link
            href={href}
            className={cn(buttonVariants({ variant: "sidebarlink" }), "")}
            method={method ? method : "get"}
        >
            {icon}
            {text}
        </Link>
    );
}
