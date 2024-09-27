import { FC } from "react";

type TextAreaType = {
    id: string,
    label: string,
    rows: number,
    cols: number,
    maxLength: number,
}

export const TextArea: FC<TextAreaType> = ({ id, label, rows, cols, maxLength }) => {
    return (
        <div>
            <label>{label}</label>
            <textarea id={id} name={id} rows={rows} cols={cols} maxLength={maxLength} />
        </div>
    )
}