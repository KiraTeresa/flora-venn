import { RoomType } from "@/src/types/room.type";
import { FC } from "react";

export const SelectOptions: FC<{ options: RoomType[] }> = ({ options }) => {
    return (
        <div>
            <label htmlFor="room">Room</label>
            <select>
                <option value="">Select Room</option>
                {options.map((option) =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    )
}