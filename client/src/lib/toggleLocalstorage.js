export const setLocalstorageData = (key, data) => {
    if (!data) return;
    localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalstorageData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};
