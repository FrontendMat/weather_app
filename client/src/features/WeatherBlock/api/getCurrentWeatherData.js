import { API_URL } from "@/lib/consts";

export const getCurrentWeatherData = async (city) => {
    const response = await fetch(`${API_URL}/weather/current?city=${city}`);
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const data = await response.json();
    return data;
};
