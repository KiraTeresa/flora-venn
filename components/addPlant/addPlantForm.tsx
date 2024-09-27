'use client'

import { FC } from "react"
import { TextInput } from "../universals/forms/textInput"
import { SelectOptions } from "../universals/forms/selectOptions"
import { MOCK_ROOM_DATA } from "@/src/constants/MOCK-room-data"
import { TextArea } from "../universals/forms/textArea"
import { wateringPlan } from "@/src/constants/watering-plan"
import { RadioButton } from "../universals/forms/radioButton"
import { SlideControl } from "../universals/forms/slideControl"
import { sunshineSteps } from "@/src/constants/sunshine-steps"
import { waterSteps } from "@/src/constants/water-steps"
import { CustomButton } from "../universals/button"

export const AddPlantForm: FC = () => {
    const onSubmit = () => {
        console.log('SUBMITTING...')
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="font-semibold text-xl pt-6">Add your own Plant</h2>
            <TextInput />
            <SelectOptions options={MOCK_ROOM_DATA} />
            <SlideControl id="sunshine" label="Sunshine" min={0} max={2} value={1} stepDistance={1} steps={sunshineSteps} length={3} />
            <TextArea id="bio" label="Plant bio" rows={5} cols={33} maxLength={250} />
            <fieldset >
                <legend>Watering Plan</legend>
                {wateringPlan.map(
                    (plan) => <RadioButton label={plan.name} value={plan.value} name="watering-plan" />
                )}
            </fieldset>
            <SlideControl id="water" label="Amount of water" min={0} max={4} value={1} stepDistance={1} steps={waterSteps} length={5} />
            <TextArea id="care" label="Care instructions" rows={5} cols={100} maxLength={250} />
            <CustomButton text="add to your care" />
        </form>
    )
}