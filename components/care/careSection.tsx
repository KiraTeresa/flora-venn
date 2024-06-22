import { FC } from "react"
import { InfoBox } from "../infoBox"
import { CareHistory } from "./careHistory"
import { CareHistoryElement } from "@/src/types/care.type"

export const CareSection: FC<{ careHistory: CareHistoryElement[], careInstructions: string }> = ({ careHistory, careInstructions }) => {
    return (
        <div className="relative pt-10">
            <img src="/images/bg-element-mobile-2.png" alt="background design element" className="absolute -start-5 top-0 -z-10 max-w-none" />
            <CareHistory historyArr={careHistory} />
            <InfoBox headline="care instruction" content={careInstructions} />
        </div>
    )
}