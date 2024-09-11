'use server';
import { cookies } from "next/headers";

export const toggleDarkModeButton = async () => {
    console.log("HEOHWOEH");
    console.log(cookies());
}