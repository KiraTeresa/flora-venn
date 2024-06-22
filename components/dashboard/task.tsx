'use client';

import clsx from "clsx";
import { FC, useState } from "react";

interface TaskProps {
    plant: PlantType,
}

export const Task: FC<TaskProps> = ({ plant }) => {
    const [isDone, setIsDone] = useState(false);

    const toggleCheckbox = () => {
        setIsDone(!isDone);
    }

    return (
        <div className="bg-white flex justify-between items-center px-2 md:max-w-80">
            <img src={plant.image} alt={plant.name} className="h-10 w-10" />
            <p className="w-1/2 font-medium">{plant.name}</p>
            <button type="button" onClick={toggleCheckbox} className="rounded-full border-black border-2 border-solid h-8 w-8">
                <img src="/images/Check.png" alt="checkmark" className={clsx('ms-2 -mt-2', !isDone && 'hidden')} />
            </button>
        </div>
    )
}