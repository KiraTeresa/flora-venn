import { FC } from "react";

export const TextInput: FC = () => {
    return (
        <div className="flex flex-col">
            <label>What's the name of your plant?</label>
            <input type="text" />
        </div>
    )
}