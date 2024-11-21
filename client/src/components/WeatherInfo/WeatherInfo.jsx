import { memo } from "react";
import cls from "./WeatherInfo.module.css";
import { classNames } from "@/lib/classNames";
import { Loader } from "@/ui/Loader/Loader";
import { Card } from "@/ui/Card/Card";

export const WeatherInfo = memo((props) => {
    const { data, isCard, isLoading, error, className } = props;

    if (isLoading) return <Loader />;

    if (error) return <div>{error}</div>;

    if (!data) return <div>{`No data(`}</div>;

    if (isCard) {
        return (
            <Card className={classNames(cls.WeatherInfo, [className])}>
                <div className={cls.info_text}>
                    <h3 className={cls.location}>
                        {data.city}, {data.country}
                    </h3>
                    <p className={cls.weather}>{data.weatherType}</p>
                </div>
                <div className={cls.info_ui}>
                    <h1 className={cls.temperature}>{data.temperature}°</h1>
                    <img className={cls.img} src={data.icon} alt="Photo" />
                </div>
            </Card>
        );
    }

    return (
        <div>
            <img className={cls.img} src={data.icon} alt="Photo" />
            <h3 className={cls.location}>
                {data.city}, {data.country}
            </h3>
            <h1 className={cls.temperature}>{data.temperature}°</h1>
            <p className={cls.weather}>{data.weatherType}</p>
        </div>
    );
});
