import cls from "./Button.module.css";

export const Button = (props) => {
    const { children, onClick, ...otherProps } = props;

    return (
        <button className={cls.Button} onClick={onClick} {...otherProps}>
            {children}
        </button>
    );
};
