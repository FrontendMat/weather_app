import { CustomIcons } from "@/lib/consts";

export const setCustomIcon = (data) => {
    if (!data) return;
    const type = data.weatherType;
    const newIcon = CustomIcons[type] || data.icon;

    return {
        ...data,
        icon: newIcon,
    };
};

export const setCustomIcons = (data) => {
    const updatedData = data?.map((item) => {
        return setCustomIcon(item);
    });

    return updatedData;
};


