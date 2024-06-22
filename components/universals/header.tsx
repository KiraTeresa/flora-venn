import { dancingScript } from "@/app/fonts";
import clsx from "clsx";
import { FC } from "react";

export const Header: FC = () => {
    return (
        <header className="bg-white px-5 my-5">
            <div className="relative max-w-screen-xl m-auto flex justify-between items-center py-2">
                <a href="/dashboard" className="flex">
                    <img src="/images/Illustration.png" alt="Illustration women with plant" className="hidden absolute h-16 w-16 bottom-0 md:block" />
                    <p className={clsx('text-4xl font-bold md:ps-16', dancingScript.className)}>FloraVenn</p>
                </a>
                <p className="text-highlight">Username</p>
            </div>
        </header>
    )
}