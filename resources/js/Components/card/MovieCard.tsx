import { Plus } from "lucide-react";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";

type MovieCardProps = {
    id: any;
    title: string;
    category: string;
    duration: string;
    image: string;
};

export default function MovieCard({
    id,
    title,
    category,
    duration,
    image,
}: MovieCardProps) {
    return (
        <div className="w-fit rounded-lg relative">
            <img
                src={image}
                alt="Movie"
                className="max-w-[200px] rounded-lg"
                loading="lazy"
            />
            <div className="absolute top-0 left-0 px-4 py-4 flex flex-col justify-between w-full h-full bg-gradient-radial from-transparent to-black/75">
                <p className="font-extrabold text-xl">{title}</p>
                <div className="space-y-1">
                    <div className="flex justify-between text-sm font-semibold">
                        <p>{duration}</p>
                        <p>{category}</p>
                    </div>
                    <div className="flex gap-1">
                        <Button
                            variant={"secondary"}
                            size={"icon"}
                            className="p-2"
                        >
                            <Plus />
                        </Button>
                        <Link
                            href={`/watch/movie/${id}`}
                            className={cn(
                                buttonVariants({ variant: "default" }),
                                "w-full"
                            )}
                        >
                            Watch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
