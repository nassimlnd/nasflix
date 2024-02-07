import { Link } from "@inertiajs/react";
import { buttonVariants } from "./ui/button";

export default function SidebarLink({
    href,
    icon,
    text,
}: {
    href: string;
    icon: any;
    text: string;
}) {
    return (
        // "flex items-center gap-2"
        <Link
            href={href}
            className={buttonVariants({ variant: "sidebarlink" })}
        >
            {icon}
            {text}
        </Link>
    );
}
