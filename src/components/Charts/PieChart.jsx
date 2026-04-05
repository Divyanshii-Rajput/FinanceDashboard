import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b"];

const PieChartComponent = ({ data }) => {
    const { darkMode } = useContext(AppContext);

    return (
        <div
        className={`p-4 rounded-2xl shadow ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
        >
        <h3 className="mb-4 font-semibold">Spending Breakdown</h3>

        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
            <Pie data={data} dataKey="value" outerRadius={100} label>
                {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>

            <Tooltip
                contentStyle={{
                backgroundColor: darkMode ? "#1f2937" : "#fff",
                border: "none",
                color: darkMode ? "#fff" : "#000",
                }}
            />
            </PieChart>
        </ResponsiveContainer>
        </div>
    );
};

export default PieChartComponent;