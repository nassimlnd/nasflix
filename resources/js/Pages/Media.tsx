import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Movie, Serie, TvShow, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

type MediaProps = {
    media: Movie | Serie | TvShow;
    user: User;
    data: any;
};

export default function Media({ media, user, data }: MediaProps) {
    const handleWatchNow = () => {
        axios
            .post(route("media.download"), {
                media: media,
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log("Download started...");
                }
            });
    };

    return (
        <>
            <AuthenticatedLayout user={user}>
                {media.title || media.tvg_name ? (
                    <>
                        <Head title={media.title || media.tvg_name} />
                        <div className="px-24 py-12">
                            <div className="flex items-center">
                                <Link
                                    href={route("dashboard")}
                                    className="text-muted-foreground"
                                >
                                    Home
                                </Link>
                                <ChevronRight size={16} />
                                <p>{media.title || media.tvg_name}</p>
                            </div>
                            <div className="rounded-lg bg-card px-12 py-16 mt-10">
                                <div className="flex justify-between">
                                    <div className="space-y-6 w-1/2">
                                        <h1 className="text-3xl">
                                            {media.title || media.tvg_name}
                                        </h1>
                                        <p className="text-muted-foreground">
                                            {data.overview ?? "No overview"}
                                        </p>
                                        {media.state === "active" ? (
                                            <Button onClick={handleWatchNow}>
                                                Watch Now
                                            </Button>
                                        ) : (
                                            <Button>Download now</Button>
                                        )}
                                    </div>
                                    <div>
                                        <img
                                            className="max-h-[400px] rounded-md object-cover"
                                            src={media.tvg_logo}
                                            alt={media.title || media.tvg_name}
                                        />
                                    </div>
                                </div>
                                {/*<div className="space-y-2">
                                    <h2 className="text-2xl mt-10">
                                        Distribution
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Id provident
                                        reiciendis odio ipsa sint vel autem!
                                        Nihil, animi nisi possimus quod
                                        obcaecati eum quos? Sunt a modi quo
                                        accusamus ducimus.
                                    </p>
                                        </div>*/}
                                {true ? (
                                    <div className="space-y-6">
                                        <h2 className="text-2xl mt-10">
                                            Lecteur
                                        </h2>
                                        <ReactPlayer
                                            url={media.url}
                                            controls
                                            width="100%"
                                            height="700px"
                                        />
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <h1>Media not found</h1>
                    </div>
                )}
            </AuthenticatedLayout>
        </>
    );
}
