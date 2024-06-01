import { PlantCard } from "@/components/plantCard";
import { Task } from "@/components/task";
import { MOCK_PLANT_DATA } from "@/src/constants/plant-data";
import clsx from "clsx";
import { dancingScript } from "../fonts";
import { CustomButton } from "@/components/button";

export default function Dashboard() {
    const plantCount = MOCK_PLANT_DATA.length;
    const today = new Date();

    const tasks = MOCK_PLANT_DATA.filter((plant) => {
        const nextDate = new Date(plant.lastWatering);
        nextDate.setDate(nextDate.getDate() + plant.wateringInterval)

        return nextDate <= today;
    })

    return (
        <main className="mx-5">
            <section className="flex flex-col gap-2 text-black">
                <h3 className="font-semibold">Today's tasks</h3>
                {tasks.map((plant) => <Task plant={plant} key={plant.id} />)}
            </section>
            <section className="text-center my-10">
                <p className="font-light">You have currently</p>
                <p className={clsx('text-3xl font-bold', dancingScript.className)}>{plantCount}</p>
                <p className="font-light">plant{plantCount > 1 && 's'} in your care</p>
                <CustomButton text="add new plant"
                    navigateTo="/new-plant" className="text-3xl mt-5" />
            </section>
            <section className=" text-black">
                <h3 className="font-semibold mb-2">Your plants</h3>
                {MOCK_PLANT_DATA.map((plant) =>
                    <PlantCard plant={plant} key={plant.id} />
                )}
            </section>
        </main>
    )
}