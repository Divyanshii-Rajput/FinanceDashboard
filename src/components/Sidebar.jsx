import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Sidebar = ({ current, setCurrent }) => {
    const { darkMode } = useContext(AppContext);
    const menu = ["Dashboard", "Transactions", "Insights"];

    return (
        <div
        className={`w-60 h-screen p-4 space-y-4 transition-all ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
        >
        <h2 className="text-xl font-bold"> Finance</h2>

        {menu.map((item) => (
            <div
            key={item}
            onClick={() => setCurrent(item)}
            className={`p-2 rounded cursor-pointer transition ${
                current === item
                ? "bg-blue-500 text-white"
                : darkMode
                ? "hover:bg-gray-700"
                : "hover:bg-gray-100"
            }`}
            >
            {item}
            </div>
        ))}
        </div>
    );
};

export default Sidebar;