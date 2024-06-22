import { CareHistoryElement } from "./care.type";

export interface PlantType {
    [key: string]: string | number | CareHistoryElement[], // TODO: index signature
    id: string,
    name: string,
    image: string,
    location: 'Bedroom' | 'Bathroom' | 'Kitchen' | 'Living Room',
    lastWatering: string,
    wateringInterval: number,
    inCareSince: string,
    description: string,
    waterAmount: 1 | 2 | 3 | 4 | 5,
    spot: 'part shade' | 'shade' | 'direct sunlight' | 'indirect sunlight',
    careInstructions: string,
    careHistory: CareHistoryElement[],
}