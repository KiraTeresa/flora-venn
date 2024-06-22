import { dancingScript } from "@/app/fonts";
import clsx from "clsx";
import { FC } from "react";

export const InfoBox: FC<{ headline: string, content: string }> = ({ headline, content }) => {
    return (
        <div className="mt-8 bg-white rounded-2xl p-5">
            <h3 className={clsx("font-bold text-secondary text-2xl", dancingScript.className)}>{headline}</h3>
            <p className="text-black text-sm pt-2">{content}</p>
        </div>
    )
}