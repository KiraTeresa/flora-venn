import { dancingScript } from "@/app/fonts"
import { CareHistoryElement } from "@/src/types/care.type"
import clsx from "clsx"
import { FC } from "react"

export const CareHistory: FC<{ historyArr: CareHistoryElement[], className?: string }> = ({ historyArr, className }) => {
    return (
        <div className={clsx("relative mt-8 p-5", className)}>
            <img src="/images/bg-element-desktop.png" alt="background design element" className="absolute -mt-10 -z-10 max-w-none hidden md:block" />
            <h3 className={clsx("font-bold text-secondary text-2xl md:pt-20 md:ps-10", dancingScript.className)}>care history</h3>
            {
                historyArr.map((history) => <p className="text-white pt-2 md:ps-10">{history.date}: {history.task}</p>)
            }
        </div>
    )
}