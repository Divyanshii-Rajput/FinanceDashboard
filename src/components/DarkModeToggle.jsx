import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(AppContext);

    return (
        <div
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center cursor-pointer"
        >
        <div
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
            darkMode ? "bg-blue-500" : "bg-gray-300"
            }`}
        >
            <div
            className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                darkMode ? "translate-x-6" : ""
            }`}
            />
        </div>

        <span className="ml-2 text-sm font-medium">
            {darkMode ? "Light" : "Dark"}
        </span>
        </div>
    );
};

export default DarkModeToggle;