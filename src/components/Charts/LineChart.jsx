import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const LineChartComponent = ({ data }) => {
    const { darkMode } = useContext(AppContext);

    return (
        <div
        className={`p-4 rounded-2xl shadow ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
        >
        <h3 className="mb-4 font-semibold">Balance Trend</h3>

        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
            <CartesianGrid stroke={darkMode ? "#444" : "#ccc"} />
            <XAxis dataKey="date" stroke={darkMode ? "#ccc" : "#333"} />
            <YAxis stroke={darkMode ? "#ccc" : "#333"} />
            <Tooltip
                contentStyle={{
                backgroundColor: darkMode ? "#1f2937" : "#fff",
                border: "none",
                color: darkMode ? "#fff" : "#000",
                }}
            />
            <Line
                type="monotone"
                dataKey="amount"
                stroke={darkMode ? "#60a5fa" : "#2563eb"}
                strokeWidth={2}
            />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;