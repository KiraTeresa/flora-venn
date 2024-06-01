import { dancingScript } from "@/app/fonts";
import clsx from "clsx";
import { FC } from "react";

export const Header: FC = () => {
    // some code goes here

    return (
        <header>
            <div className={clsx('text-4xl font-bold', dancingScript.className)}>FloraVenn</div>
            <p>Username</p>
        </header>
    )
}