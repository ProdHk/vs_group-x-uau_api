"use client"



export function getLocalStorage(key: string) {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem(key);
        return value
    }
}
