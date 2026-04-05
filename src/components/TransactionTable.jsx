import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EditTransaction from "./EditTransaction";

const TransactionTable = () => {
    const {
        transactions,
        search,
        setSearch,
        filter,
        setFilter,
        role,
        deleteTransaction,
        darkMode,
    } = useContext(AppContext);

    const [selected, setSelected] = useState(null);
    const [sortBy, setSortBy] = useState("date");
    const [order, setOrder] = useState("desc");

    let filteredData = transactions.filter((t) => {
        const matchesSearch = t.category
        .toLowerCase()
        .includes(search.toLowerCase());

        const matchesFilter =
        filter === "all" ? true : t.type === filter;

        return matchesSearch && matchesFilter;
    });

    filteredData.sort((a, b) => {
        if (sortBy === "amount") {
        return order === "asc"
            ? a.amount - b.amount
            : b.amount - a.amount;
        } else {
        return order === "asc"
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
        }
    });

    return (
        <div
        className={`p-4 rounded-2xl shadow ${
            darkMode ? "bg-gray-800" : "bg-white"
        }`}
        >
        <h3 className="mb-4 font-semibold">Transactions</h3>

        <div className="flex flex-wrap gap-2 mb-4">
            <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            <select
            className="border p-2 rounded bg-transparent"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            </select>

            <select
            className="border p-2 rounded bg-transparent"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            </select>

            <select
            className="border p-2 rounded bg-transparent"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
            </select>
        </div>

        {filteredData.length === 0 ? (
            <p className="text-gray-400 text-center py-6">
            No transactions found. Try adding one.
            </p>
        ) : (
            <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead className="text-gray-400 uppercase text-sm">
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Type</th>
                    {role === "admin" && <th>Actions</th>}
                </tr>
                </thead>

                <tbody>
                {filteredData.map((t) => (
                    <tr
                    key={t.id}
                    className={`border-t ${
                        darkMode ? "border-gray-700" : ""
                    } hover:bg-gray-50 dark:hover:bg-gray-700 transition`}
                    >
                    <td>{t.date}</td>
                    <td>{t.category}</td>
                    <td
                        className={
                        t.type === "income"
                            ? "text-green-400"
                            : "text-red-400"
                        }
                    >
                        ₹ {t.amount}
                    </td>
                    <td>{t.type}</td>

                    {role === "admin" && (
                        <td className="space-x-2">
                        <button
                            onClick={() => setSelected(t)}
                            className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => deleteTransaction(t.id)}
                            className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                        >
                            Delete
                        </button>
                        </td>
                    )}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}

        <EditTransaction selected={selected} setSelected={setSelected} />
        </div>
    );
};

export default TransactionTable;