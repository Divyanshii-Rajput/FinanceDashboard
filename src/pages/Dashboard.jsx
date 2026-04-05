import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/SummaryCard";
import LineChartComponent from "../components/Charts/LineChart";
import PieChartComponent from "../components/Charts/PieChart";

const Dashboard = () => {
    const { transactions } = useContext(AppContext);

    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((acc, t) => acc + t.amount, 0);

    const expense = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => acc + t.amount, 0);

    const balance = income - expense;

    const monthlyData = transactions.map((t) => ({
        date: t.date,
        amount: t.type === "expense" ? -t.amount : t.amount,
    }));

    const categoryMap = {};
    transactions.forEach((t) => {
        if (t.type === "expense") {
        categoryMap[t.category] =
            (categoryMap[t.category] || 0) + t.amount;
        }
    });

    const pieData = Object.keys(categoryMap).map((key) => ({
        name: key,
        value: categoryMap[key],
    }));

    return (
        <div className="space-y-6">
        <h2 className="text-lg font-semibold">Overview</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SummaryCard title="Balance" amount={balance} color="text-blue-600" />
            <SummaryCard title="Income" amount={income} color="text-green-600" />
            <SummaryCard title="Expenses" amount={expense} color="text-red-600" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LineChartComponent data={monthlyData} />
            <PieChartComponent data={pieData} />
        </div>
        </div>
    );
};

export default Dashboard;