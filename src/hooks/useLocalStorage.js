import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(key);
        try {
            return saved !== null ? JSON.parse(saved) : defaultValue;
        } catch (e) {
            console.error(`Error parsing the ${key} value from localStorage`, e);
            return defaultValue;
        }
    }
    return defaultValue;
}

export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}
