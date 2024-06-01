'use client';

import { dancingScript } from "@/app/fonts"
import clsx from "clsx"
import { useRouter } from "next/navigation";
import { FC } from "react"

interface ButtonProps {
    text: string,
    className?: string,
    onClick?: () => void,
    navigateTo?: string,
}

export const CustomButton: FC<ButtonProps> = ({ text, className, onClick, navigateTo = "/" }) => {
    const router = useRouter();
    const handleClick = () => {
        onClick ? onClick() : router.push(navigateTo);
    }

    return (
        <button type="button" onClick={() => handleClick()} className={clsx("bg-button text-white rounded-2xl py-1 px-10", dancingScript.className, className)}>{text}</button>
    )
}