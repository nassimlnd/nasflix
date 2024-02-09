import Authenticated from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import React from "react";
import ReactPlayer from "react-player";

export default function Player({ user }: { user: User }) {
    return (
        <>
            <Authenticated user={user}>
                <ReactPlayer
                    url="http://r365mail.biz:2103/movie/Cr5ZQUazyj/430866556543/120476.mkv"
                    width={"100%"}
                    height={"100%"}
                    controls
                />
            </Authenticated>
        </>
    );
}
