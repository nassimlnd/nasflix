import { Link, Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button, buttonVariants } from "@/Components/ui/button";
import { FormEventHandler, useEffect } from "react";
import InputError from "@/Components/InputError";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />

            <div
                className={
                    "max-w-7xl h-full mx-auto flex flex-col items-center justify-center gap-8"
                }
            >
                <div className={"flex flex-col items-center gap-8"}>
                    <div className="flex flex-col items-center justify-center">
                        <ApplicationLogo className={"w-10"} />
                        <h1
                            className={
                                "text-3xl font-bold text-center text-[#F5F5F6]"
                            }
                        >
                            Nasflix
                        </h1>
                        <p className="text-[#94969C]">
                            Enjoy the newest movies
                        </p>
                    </div>

                    <Link
                        href={route("login:get")}
                        className={buttonVariants({ variant: "default" })}
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </>
    );
}
