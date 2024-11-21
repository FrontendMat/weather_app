import { API_URL } from "@/lib/consts";

export const getWeatherHistory = async () => {
    const response = await fetch(`${API_URL}/weather/history`);
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const data = await response.json();
    return data;
};
