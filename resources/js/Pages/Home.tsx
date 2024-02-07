import {Link, Head, useForm} from '@inertiajs/react';
import { PageProps } from '@/types';
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {Button} from "@/Components/ui/button";
import {FormEventHandler, useEffect} from "react";
import InputError from "@/Components/InputError";

export default function Home({ auth }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Welcome" />

            <div className={"max-w-7xl h-full mx-auto flex flex-col items-center justify-center gap-8"}>
                <div className={"flex flex-col items-center"}>
                    <ApplicationLogo className={"w-10"} />
                    <h1 className={"text-3xl font-bold text-center text-[#F5F5F6]"}>Welcome back</h1>
                    <p className={"text-[#94969C]"}>Welcome back! Please enter your details.</p>
                </div>
                <form onSubmit={submit} className={"w-[360px] space-y-5"}>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            required
                            autoFocus
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            className="mt-1 block w-full"
                            required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <Button type="submit" className="w-full" disabled={processing}>Login</Button>
                </form>
            </div>

        </>
    );
}
