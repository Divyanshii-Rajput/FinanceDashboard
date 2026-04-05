import { createContext, useEffect, useState } from "react";
import { transactions as initialData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Load transactions from localStorage
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("transactions");
        return saved ? JSON.parse(saved) : initialData;
    });

    // Load dark mode from localStorage
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved ? JSON.parse(saved) : false;
    });

    const [role, setRole] = useState("viewer");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    // Save transactions
    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    //  Save dark mode
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const addTransaction = (newTx) => {
        setTransactions([...transactions, { ...newTx, id: Date.now() }]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((t) => t.id !== id));
    };

    return (
        <AppContext.Provider
        value={{
            transactions,
            setTransactions,
            role,
            setRole,
            search,
            setSearch,
            filter,
            setFilter,
            darkMode,
            setDarkMode,
            addTransaction,
            deleteTransaction,
        }}
        >
        {children}
        </AppContext.Provider>
    );
};