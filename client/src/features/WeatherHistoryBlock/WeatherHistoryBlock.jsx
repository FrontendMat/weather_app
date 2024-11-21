import { memo, useCallback, useEffect, useState } from "react";
import { getWeatherHistory } from "./api/getWeatherHistory";
import { WeatherInfo } from "@/components/WeatherInfo/WeatherInfo";
import cls from "./WeatherHistoryBlock.module.css";
import arrow from "@/assets/arrow.svg";
import { AppLink } from "@/ui/AppLink/AppLink";
import { setCustomIcons } from "@/lib/setCustomIcons";
import { RoutePath } from "@/app/router/routeConfig";
import { useFetching } from "@/lib/hooks/useFetching";
import { Loader } from "@/ui/Loader/Loader";
import {
    setLocalstorageData,
    getLocalstorageData,
} from "@/lib/toggleLocalstorage";
import { WEATHER_HISTORY } from "@/lib/consts";

export const WeatherHistoryBlock = memo(() => {
    const [historyList, setHistoryList] = useState([]);
    const { fetching, error, isLoading } = useFetching(getWeatherHistory);

    useEffect(() => {
        getHistory();
        const data = getLocalstorageData(WEATHER_HISTORY, null);
        setHistoryList(data);
    }, []);

    const getHistory = useCallback(async () => {
        const data = await fetching();
        setHistoryList(data);
        setLocalstorageData(WEATHER_HISTORY, data);
    }, [fetching]);

    const updatedData = setCustomIcons(historyList);

    if (isLoading) return <Loader />;

    if (error) return <div>{error}</div>;

    return (
        <div className={cls.WeatherHistoryBlock}>
            <div className={cls.panel}>
                <AppLink className={cls.btn} to={RoutePath.main}>
                    <img src={arrow} alt="" />
                </AppLink>
                <h3 className={cls.title}>Weather History</h3>
            </div>
            {/* here we can add virtualized list and pagination */}
            {updatedData?.length > 0 ? (
                updatedData?.map((item) => (
                    <WeatherInfo
                        key={item._id}
                        className={cls.item}
                        isCard
                        data={item}
                    />
                ))
            ) : (
                <h1>{`No data yet(`}</h1>
            )}
        </div>
    );
});
