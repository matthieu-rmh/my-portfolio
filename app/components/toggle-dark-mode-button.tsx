"use client"
import { SunIcon } from "@heroicons/react/24/outline";
import { toggleDarkModeButton } from "../lib/server-actions";

const ToggleDarkModeButton = () => {
    return(
        <button onClick={() => toggleDarkModeButton()} id="toggle-dark-mode-button" className="flex items-center justify-center rounded-xl w-9 h-9 text-sm">
            <SunIcon className="w-7 h-7 text-white dark:text-white"/>
        </button>
    );
};

export default ToggleDarkModeButton;