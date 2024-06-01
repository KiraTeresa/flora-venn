interface PlantType {
    id: string,
    name: string,
    image: string,
    location: 'Bedroom' | 'Bathroom' | 'Kitchen' | 'Living Room',
    lastWatering: string,
    wateringInterval: number,
    inCareSince: string,
}