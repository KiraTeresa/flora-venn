import { FC } from "react";

interface PlantCardProps {
    plant: PlantType,
}

export const PlantCard: FC<PlantCardProps> = ({ plant }) => {
    return (
        <a href={`/plant/${plant.id}`} className="bg-white flex gap-2 items-center p-2">
            <img src={plant.image} alt={plant.name} className="h-20 w-20" />
            <div>
                <p className="font-medium">{plant.name}</p>
                <p className="font-light">{plant.location}</p>
            </div>
        </a>
    )
}