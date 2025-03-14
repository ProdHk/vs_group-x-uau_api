"use client"


export function setLocalStorage(key: string, value: string) {

    if (typeof window !== "undefined") {
        console.log("Definindo valores em localstorage")
        localStorage.setItem(key, value);
    }
}

