import { Link } from "react-router-dom";
import { classNames } from "@/lib/classNames";
import cls from "./AppLink.module.css";

export const AppLink = (props) => {
    const { className, to, children, ...otherProps } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
