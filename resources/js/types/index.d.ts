export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Movie {
    id: number;
    title: string;
    category: string;
    duration: string;
    image: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
