'use client'
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
    children: React.ReactNode;
}

export async function SessionProvider({ children }: Props) {

    return (
        <Provider>
            {children}
        </Provider>
    )
}