export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Movie {
    id: number;
    title: string;
    tvg_id: string;
    tvg_name: string;
    tvg_logo: string;
    group_title: string;
    url: string;
    state: string;
}

export interface Serie {
    id: number;
    title: string;
    tvg_id: string;
    tvg_name: string;
    tvg_logo: string;
    group_title: string;
    url: string;
    state: string;
}

export interface TvShow {
    id: number;
    title: string;
    tvg_id: string;
    tvg_name: string;
    tvg_logo: string;
    group_title: string;
    url: string;
    state: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
