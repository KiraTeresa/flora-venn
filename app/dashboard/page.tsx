import { Task } from "@/components/task";
import { MOCK_PLANT_DATA } from "@/src/constants/plant-data";

export default function Dashboard() {
    const today = new Date();

    const tasks = MOCK_PLANT_DATA.filter((plant) => {
        const nextDate = new Date(plant.lastWatering);
        nextDate.setDate(nextDate.getDate() + plant.wateringInterval)

        return nextDate <= today;
    })

    return (
        <>
            <section className="flex flex-col gap-2 mx-5 text-black">
                <h3 className="font-semibold">Today's tasks</h3>
                {tasks.map((plant) => <Task plant={plant} key={plant.id} />)}
            </section>
            <section>Plant count</section>
            <section>Your plants</section>
        </>
    )
}