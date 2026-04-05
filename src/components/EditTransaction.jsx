import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const EditTransaction = ({ selected, setSelected }) => {
    const { transactions, setTransactions, darkMode } =
        useContext(AppContext);

    const [form, setForm] = useState(null);

    useEffect(() => {
        if (selected) {
        setForm(selected);
        }
    }, [selected]);

    if (!selected || !form) return null;

    const handleUpdate = () => {
        const updated = transactions.map((t) =>
        t.id === selected.id ? form : t
        );

        setTransactions(updated);
        setSelected(null);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
        <div
            className={`p-6 rounded-2xl w-80 space-y-3 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
        >
            <h3 className="font-semibold">Edit Transaction</h3>

            <input
            className="border p-2 w-full rounded"
            value={form.category || ""}
            onChange={(e) =>
                setForm({ ...form, category: e.target.value })
            }
            />

            <input
            type="number"
            className="border p-2 w-full rounded"
            value={form.amount || ""}
            onChange={(e) =>
                setForm({
                ...form,
                amount: Number(e.target.value),
                })
            }
            />

            <div className="flex justify-between">
            <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-3 py-1 rounded"
            >
                Save
            </button>

            <button onClick={() => setSelected(null)}>
                Cancel
            </button>
            </div>
        </div>
        </div>
    );
};

export default EditTransaction;