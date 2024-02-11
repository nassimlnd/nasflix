import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Movie, User } from "@/types";
import React from "react";
import ReactPlayer from "react-player";

interface PlayerProps {
    user: User;
    movie: Movie;
}

export default function Player({ user, movie }: PlayerProps) {
    return (
        <>
            <Authenticated user={user}>
                {/*<ReactPlayer
                    volume={1}
                    url={movie.url}
                    width={"100%"}
                    height={"100%"}
                    controls
                />*/}
                <video
                    src={movie.url}
                    controls
                    className="w-full h-full"
                ></video>
            </Authenticated>
        </>
    );
}
