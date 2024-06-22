import { FC } from "react"
import { InfoBox } from "../universals/infoBox"
import { CareHistory } from "./careHistory"
import { CareHistoryElement } from "@/src/types/care.type"

export const CareSection: FC<{ careHistory: CareHistoryElement[], careInstructions: string }> = ({ careHistory, careInstructions }) => {
    return (
        <div className="relative pt-10">
            <img src="/images/bg-element-mobile-2.png" alt="background design element" className="absolute -start-5 top-0 -z-10 max-w-none md:hidden" />
            <CareHistory historyArr={careHistory} className="md:hidden" />
            <InfoBox headline="care instruction" content={careInstructions} className="max-w-4xl md:ms-5 md:me-5" />
        </div>
    )
}