import { WateringPlanType } from "@/src/types/watering-plan.type";
import { FC } from "react";

export const RadioButton: FC<{ label: string, value: number, name: string }> =
    ({ label, value, name }) => {
        return (
            <>
                <label htmlFor={name}>{label}</label>
                <input type="radio" id={value.toString()} value={value} name={name} />
            </>
        )
    }