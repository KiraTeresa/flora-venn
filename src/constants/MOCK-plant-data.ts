import { PlantType } from "../types/plant.type";

export const MOCK_PLANT_DATA: PlantType[] = [
    {
        id: '1',
        name: 'Plant #1',
        image: '/images/Plant1.png',
        location: 'Bedroom',
        lastWatering: '2024-05-24T23:00:00.000Z',
        wateringInterval: 7,
        inCareSince: '2024-01-01T23:00:00.000Z',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
        waterAmount: 3,
        spot: 'indirect sunlight',
        careInstructions: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        careHistory: [
            {
                id: '1a',
                date: '24-05-2024',
                task: 'watered',
            },
            {
                id: '1b',
                date: '24-05-2024',
                task: 'trimmed',
            }
        ]
    },
    {
        id: '2',
        name: 'Plant #2',
        image: '/images/Plant2.png',
        location: 'Living Room',
        lastWatering: '2024-06-16T23:00:00.000Z',
        wateringInterval: 5,
        inCareSince: '2024-01-21T23:00:00.000Z',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
        waterAmount: 4,
        spot: 'part shade',
        careInstructions: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        careHistory: [
            {
                id: '2a',
                date: '24-05-2024',
                task: 'watered',
            },
            {
                id: '2b',
                date: '24-05-2024',
                task: 'trimmed',
            },
            {
                id: '2c',
                date: '29-05-2024',
                task: 'watered',
            },
            {
                id: '2d',
                date: '06-06-2024',
                task: 'watered',
            },
            {
                id: '2e',
                date: '11-06-2024',
                task: 'watered',
            },
            {
                id: '2f',
                date: '16-06-2024',
                task: 'watered',
            }
        ]
    },
    {
        id: '3',
        name: 'Plant #3',
        image: '/images/Plant3.png',
        location: 'Bathroom',
        lastWatering: '2024-05-27T23:00:00.000Z',
        wateringInterval: 7,
        inCareSince: '2024-02-22T23:00:00.000Z',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
        waterAmount: 1,
        spot: 'part shade',
        careInstructions: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        careHistory: [
            {
                id: '3a',
                date: '24-05-2024',
                task: 'watered',
            },
            {
                id: '3b',
                date: '24-05-2024',
                task: 'trimmed',
            }
        ]
    },
    {
        id: '4',
        name: 'Plant #4',
        image: '/images/Plant2.png',
        location: 'Living Room',
        lastWatering: '2024-05-27T23:00:00.000Z',
        wateringInterval: 2,
        inCareSince: '2024-03-03T23:00:00.000Z',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
        waterAmount: 1,
        spot: 'part shade',
        careInstructions: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        careHistory: [
            {
                id: '4a',
                date: '24-05-2024',
                task: 'watered',
            },
            {
                id: '4b',
                date: '24-05-2024',
                task: 'trimmed',
            }
        ]
    },
    {
        id: '5',
        name: 'Plant #5',
        image: '/images/Plant3.png',
        location: 'Kitchen',
        lastWatering: '2024-05-24T23:00:00.000Z',
        wateringInterval: 7,
        inCareSince: '2024-05-24T23:00:00.000Z',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
        waterAmount: 5,
        spot: 'direct sunlight',
        careInstructions: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        careHistory: [
            {
                id: '5a',
                date: '24-05-2024',
                task: 'watered',
            },
            {
                id: '5b',
                date: '24-05-2024',
                task: 'trimmed',
            }
        ]
    },
    {
        id: '6',
        name: 'Plant #6',
        image: '/images/Plant1.png',
        location: 'Living Room',
        lastWatering: '2024-05-24T23:00:00.000Z',
        wateringInterval: 14,
        inCareSince: '2024-05-24T23:00:00.000Z',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
        waterAmount: 1,
        spot: 'shade',
        careInstructions: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        careHistory: [
            {
                id: '6a',
                date: '24-05-2024',
                task: 'watered',
            },
            {
                id: '6b',
                date: '24-05-2024',
                task: 'trimmed',
            }
        ]
    }
]