import cls from "./Card.module.css";
import { classNames } from "@/lib/classNames";

export const Card = (props) => {
    const { children, className } = props;

    return (
        <div className={classNames(cls.Card, [className])}>{children}</div>
    );
};
