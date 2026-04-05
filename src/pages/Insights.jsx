import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
    const { transactions, darkMode } = useContext(AppContext);

    const categoryMap = {};
    transactions.forEach((t) => {
        if (t.type === "expense") {
        categoryMap[t.category] =
            (categoryMap[t.category] || 0) + t.amount;
        }
    });

    const highestCategory = Object.keys(categoryMap).reduce(
        (a, b) => (categoryMap[a] > categoryMap[b] ? a : b),
        ""
    );

    const totalExpense = Object.values(categoryMap).reduce(
        (a, b) => a + b,
        0
    );

    return (
        <div className="space-y-4">
        <h2 className="text-lg font-semibold">Insights</h2>

        <div
            className={`p-4 rounded-2xl shadow ${
            darkMode ? "bg-gray-800" : "bg-white"
            }`}
        >
            <p>Highest spending category: <strong>{highestCategory || "N/A"}</strong></p>
            <p>Total expense: ₹ {totalExpense}</p>
            <p className="text-gray-400 mt-2">
            Tip: Try reducing spending in your highest category.
            </p>
        </div>
        </div>
    );
};

export default Insights;