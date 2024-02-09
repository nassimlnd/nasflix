import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type MovieCardProps = {
    title: string;
    category: string;
    duration: string;
    image: string;
};

export default function MovieCard({
    title,
    category,
    duration,
    image,
}: MovieCardProps) {
    console.log(image);
    return (
        <div className="w-fit rounded-lg relative">
            <img src={image} alt="Movie" className="max-w-[200px] rounded-lg" />
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
                        <Button className="w-full">Watch</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
