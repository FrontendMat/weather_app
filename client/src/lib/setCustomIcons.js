import { CustomIcons } from "@/lib/consts";

export const setCustomIcons = (data) => {
    const updatedData = data?.map((item) => {
        const type = item.weatherType;
        const newIcon = CustomIcons[type] || item.icon;
        return {
            ...item,
            icon: newIcon,
        };
    });

    return updatedData;
};

export const setCustomIcon = (data) => {
    const type = data.weatherType;
    const newIcon = CustomIcons[type] || data.icon;

    return {
        ...data,
        icon: newIcon,
    };
};
