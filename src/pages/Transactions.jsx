import AddTransaction from "../components/AddTransaction";
import TransactionTable from "../components/TransactionTable";

const Transactions = () => {
    return (
        <div className="space-y-6">
        <h2 className="text-lg font-semibold">Manage Transactions</h2>

        <AddTransaction />
        <TransactionTable />
        </div>
    );
};

export default Transactions;