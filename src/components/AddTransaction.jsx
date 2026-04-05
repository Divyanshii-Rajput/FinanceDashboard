import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddTransaction = () => {
    const { addTransaction, role, darkMode } = useContext(AppContext);

    const [form, setForm] = useState({
        date: "",
        amount: "",
        category: "",
        type: "expense",
    });

    if (role !== "admin") return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.amount || !form.category) return;

        addTransaction({
        ...form,
        amount: Number(form.amount),
        });

        setForm({
        date: "",
        amount: "",
        category: "",
        type: "expense",
        });
    };

    return (
        <form
        onSubmit={handleSubmit}
        className={`p-4 rounded-2xl shadow space-y-3 transition
            ${darkMode ? "bg-gray-800 text-white" : "bg-white"}
        `}
        >
        <h3 className="font-semibold">Add Transaction</h3>

        {/* Date */}
        <input
            type="date"
            className={`border p-2 w-full rounded outline-none
            ${
                darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }
            `}
            value={form.date}
            onChange={(e) =>
            setForm({ ...form, date: e.target.value })
            }
        />

        {/* Amount */}
        <input
            type="number"
            placeholder="Amount"
            className={`border p-2 w-full rounded outline-none
            ${
                darkMode
                ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300"
            }
            `}
            value={form.amount}
            onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
            }
        />

        {/* Category */}
        <input
            type="text"
            placeholder="Category"
            className={`border p-2 w-full rounded outline-none
            ${
                darkMode
                ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300"
            }
            `}
            value={form.category}
            onChange={(e) =>
            setForm({ ...form, category: e.target.value })
            }
        />

        {/* Type */}
        <select
            className={`border p-2 w-full rounded outline-none
            ${
                darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }
            `}
            value={form.type}
            onChange={(e) =>
            setForm({ ...form, type: e.target.value })
            }
        >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>

        {/* Button */}
        <button
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded"
        >
            Add
        </button>
        </form>
    );
};

export default AddTransaction;