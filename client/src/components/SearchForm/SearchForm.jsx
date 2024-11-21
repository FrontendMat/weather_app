import { Input } from "@/ui/Input/Input";
import { Button } from "@/ui/Button/Button";
import cls from "./SearchForm.module.css";
import { memo, useCallback, useState } from "react";
import { AppLink } from "@/ui/AppLink/AppLink";
import { RoutePath } from "@/app/router/routeConfig";
import { validateInputData } from "@/lib/validateInputData";

export const SearchForm = memo((props) => {
    const { callback, isLoading } = props;
    const [value, setValue] = useState("");

    const onInputChange = useCallback((value) => {
        setValue(value);
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!validateInputData(value)) {
            alert("Please, enter correct city name");
            return;
        }

        callback(value);
        setValue("");
    };

    return (
        <form className={cls.container}>
            <label className={cls.text}>
                Enter the city
                <Input
                    value={value}
                    onChange={onInputChange}
                    className={cls.input}
                    placeholder="Start entering the name of the city"
                />
            </label>
            <Button disabled={isLoading} onClick={onFormSubmit}>
                Submit
            </Button>
            <AppLink className={cls.link} to={RoutePath.list}>
                Show history
            </AppLink>
        </form>
    );
});
