import { StatsElementType } from "@/src/types/stats.type"
import { FC } from "react"

interface StatsElementProps {
    statsElement: StatsElementType,
    content: string,
}

export const StatsElement: FC<StatsElementProps> = ({ statsElement, content }) => {
    return (
        <div className="flex gap-4 items-center">
            <div className="h-10 w-10 flex justify-center align-center">
                <img src={statsElement.src} alt={statsElement.alt} />
            </div>
            <span className="text-sm text-black">{content}</span>
        </div>
    )
}