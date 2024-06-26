import { FC } from "react"
import { STATS } from "../../src/constants/stats"
import { StatsElement } from "./statsElement"
import { PlantType } from "@/src/types/plant.type"
import clsx from "clsx"

export const StatsList: FC<{ plantDetails: PlantType, className?: string }> = ({ plantDetails, className }) => {
    return (
        <div className={clsx("flex flex-col gap-4 mt-8 p-5 md:flex-wrap md:flex-row md:justify-between", className)}>
            {
                STATS.map((stat) => {
                    const content = plantDetails[stat.id] as string;
                    return <StatsElement statsElement={stat} content={content} />
                })
            }
        </div>
    )
}