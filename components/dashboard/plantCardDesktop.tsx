import { PlantType } from "@/src/types/plant.type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface PlantCardProps {
    plant: PlantType,
}

export const PlantCardDesktop: FC<PlantCardProps> = ({ plant }) => {
    const today = new Date();
    const nextDate = new Date(plant.lastWatering);
    nextDate.setDate(nextDate.getDate() + plant.wateringInterval)

    const nextWatering = Math.floor((nextDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const inCareSince = new Date(plant.inCareSince)

    return (
        <Link href={`/plant/${plant.id}`} className="bg-white flex gap-2 items-center px-2 py-5">
            <img src={plant.image} alt={plant.name} className="h-20 w-20" />
            <div>
                <p className="font-medium">{plant.name}</p>
                <p className="font-light">Embellishes your <span className="font-medium">{plant.location}</span></p>
                <p className="font-light">Next watering in <span className={clsx("font-medium", nextWatering < 0 && 'text-red-500')}>{nextWatering}</span></p>
                <p className="font-light">In your care since <span className="font-medium">{inCareSince.toDateString()}</span></p>
            </div>
        </Link>
    )
}