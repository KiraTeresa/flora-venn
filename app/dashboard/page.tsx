import { PlantCardMobile } from "@/components/dashboard/plantCardMobile";
import { Task } from "@/components/dashboard/task";
import { MOCK_PLANT_DATA } from "@/src/constants/MOCK-plant-data";
import clsx from "clsx";
import { dancingScript } from "../fonts";
import { CustomButton } from "@/components/universals/button";
import { PlantCardDesktop } from "@/components/dashboard/plantCardDesktop";

export default function Dashboard() {
    const plantCount = MOCK_PLANT_DATA.length;
    const today = new Date();

    const tasks = MOCK_PLANT_DATA.filter((plant) => {
        const nextDate = new Date(plant.lastWatering);
        nextDate.setDate(nextDate.getDate() + plant.wateringInterval)

        return nextDate <= today;
    })

    return (
        <main className="max-w-screen-xl mx-5 mb-5 md:m-auto md:flex md:gap-20">
            <section className="flex flex-col gap-2 text-black md:w-1/3 md:ms-5 md:mt-5">
                <h3 className="font-semibold">Today's tasks</h3>
                {tasks.map((plant) => <Task plant={plant} key={plant.id} />)}
            </section>
            <div className="md:w-full md:me-5">
                <section className="text-center my-10">
                    <p className="font-light md:text-2xl">You have currently</p>
                    <p className={clsx('text-3xl font-bold', dancingScript.className)}>{plantCount}</p>
                    <p className="font-light md:text-2xl">plant{plantCount > 1 && 's'} in your care</p>
                    <CustomButton text="add new plant"
                        navigateTo="/new-plant" className="text-2xl mt-5" />
                </section>
                <section className=" text-black">
                    <h3 className="font-semibold mb-2">Your plants</h3>
                    <div className="md:hidden">
                        {MOCK_PLANT_DATA.map((plant) =>
                            <PlantCardMobile plant={plant} key={plant.id} />
                        )}
                    </div>
                    <div className="hidden md:grid md:grid-cols-2 md:gap-4">
                        {MOCK_PLANT_DATA.map((plant) =>
                            <PlantCardDesktop plant={plant} key={plant.id} />
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}