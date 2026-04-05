import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SummaryCard = ({ title, amount, color }) => {
    const { darkMode } = useContext(AppContext);

    return (
        <div
        className={`p-4 rounded-2xl shadow transition ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
        >
        <h3 className="text-gray-400">{title}</h3>
        <p className={`text-2xl font-bold ${color}`}>₹ {amount}</p>
        </div>
    );
};

export default SummaryCard;