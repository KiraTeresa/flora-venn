import { dancingScript } from "@/app/fonts"
import { CareHistoryElement } from "@/src/types/care.type"
import clsx from "clsx"
import { FC } from "react"

export const CareHistory: FC<{ historyArr: CareHistoryElement[] }> = ({ historyArr }) => {
    return (
        <div className="mt-8 p-5">
            <h3 className={clsx("font-bold text-secondary text-2xl", dancingScript.className)}>care history</h3>
            {
                historyArr.map((history) => <p className="text-white pt-2">{history.date}: {history.task}</p>)
            }
        </div>
    )
}