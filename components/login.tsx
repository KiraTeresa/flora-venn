'use client';

import { dancingScript } from "@/app/fonts";
import clsx from "clsx";
import { FC } from "react";
import { CustomButton } from "./button";

export const Login: FC = () => {
    const onLogin = () => {
        console.log('Clicked Login Button')
    }

    return (
        <div className="relative bg-secondary drop-shadow-md h-500 w-full pt-10 px-5 md:rounded-3xl md:h-96 md:w-80">
            <h1 className={clsx('text-highlight text-5xl text-center sm:text-6xl md:hidden', dancingScript.className)}>Welcome to <span className="text-primary">FloraVenn</span></h1>
            <img src="/images/Illustration.png" width={300} height={300} alt="Illustration women with plant" className="absolute bottom-4 left-1/2 -translate-x-1/2 pt-20" />
            <CustomButton text="Login" onClick={onLogin} className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 text-4xl" />
        </div>
    )
}