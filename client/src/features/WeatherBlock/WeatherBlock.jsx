import { WeatherInfo } from "@/components/WeatherInfo/WeatherInfo";
import { SearchForm } from "@/components/SearchForm/SearchForm";
import cls from "./WeatherBlock.module.css";
import { memo, useEffect, useState } from "react";
import { getCurrentWeatherData } from "./api/getCurrentWeatherData";
import { LAST_CITY_WEATHER } from "@/lib/consts";
import {
    setLocalstorageData,
    getLocalstorageData,
} from "@/lib/toggleLocalstorage";
import { setCustomIcon } from "@/lib/setCustomIcons";
import { useFetching } from "@/lib/hooks/useFetching";

export const WeatherBlock = memo(() => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const { fetching, error, isLoading } = useFetching(getCurrentWeatherData);

    useEffect(() => {
        const lastCity = getLocalstorageData(LAST_CITY_WEATHER, null);
        setCurrentWeather(lastCity);
    }, [setCurrentWeather]);

    const onWeatherSearch = async (city) => {
        const data = await fetching(city);
        setCurrentWeather(data);
        setLocalstorageData(LAST_CITY_WEATHER, data);
    }

    const updatedData = setCustomIcon(currentWeather);

    return (
        <div className={cls.WeatherBlock}>
            <WeatherInfo
                error={error}
                isLoading={isLoading}
                data={updatedData}
            />
            <SearchForm callback={onWeatherSearch} />
        </div>
    );
});
