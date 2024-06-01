import { dancingScript } from "@/app/fonts";
import clsx from "clsx";
import { FC } from "react";

export const Header: FC = () => {
    return (
        <header className="bg-white flex justify-between items-center px-5 py-2 my-5">
            <div className={clsx('text-4xl font-bold ', dancingScript.className)}>FloraVenn</div>
            <p className="text-highlight">Username</p>
        </header>
    )
}