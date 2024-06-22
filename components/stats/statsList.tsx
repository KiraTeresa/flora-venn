import { FC } from "react"
import { STATS } from "../../src/constants/stats"
import { StatsElement } from "./statsElement"
import { PlantType } from "@/src/types/plant.type"

export const StatsList: FC<{ plantDetails: PlantType }> = ({ plantDetails }) => {
    return (
        <div className="flex flex-col gap-4 mt-8 p-5">
            {
                STATS.map((stat) => {
                    const content = plantDetails[stat.id] as string;
                    return <StatsElement statsElement={stat} content={content} />
                })
            }
        </div>
    )
}