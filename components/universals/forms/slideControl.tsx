import { FC } from "react";

type StepType = {
    label: string, value: string
}

type SlideControlPropsType = {
    id: string,
    label: string,
    min: number,
    max: number,
    value: number,
    stepDistance: number,
    steps: StepType[],
    length: 3 | 5,
}

// !! Source: https://flowbite.com/docs/forms/range/#steps

export const SlideControl: FC<SlideControlPropsType> = ({ id, label, min, max, value, stepDistance, steps, length }) => {
    const threeSteps = (steps: StepType[]) =>
        <>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{steps[0].label}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{steps[1].label}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{steps[2].label}</span>
        </>

    const fiveSteps = (steps: StepType[]) =>
        <>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{steps[0].label}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{steps[1].label}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{steps[2].label}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{steps[3].label}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-4/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{steps[4].label}</span>
        </>


    return (
        <fieldset className="relative">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                id={id}
                type="range"
                min={min}
                max={max}
                value={value}
                step={stepDistance}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            {length === 3 ? threeSteps(steps) : fiveSteps(steps)}
        </fieldset>
    )
}