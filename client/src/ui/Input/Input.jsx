import cls from "./Input.module.css";
import { memo } from "react";
import { classNames } from "@/lib/classNames";

export const Input = memo((props) => {
    const { className, value, onChange, type, placeholder } = props;

    const onInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            className={classNames(cls.Input, [className])}
            value={value}
            onChange={onInputChange}
            placeholder={placeholder}
            type={type}
        />
    );
});
