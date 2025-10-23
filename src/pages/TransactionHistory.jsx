import "../styles/TransactionHistory.css";
import TransactionTable from "../components/TransactionTable";

export default function TransactionHistory() {
  return (
    <div className="transaction-history">
      <h1>Transaction History</h1>
      <TransactionTable />
    </div>
  );
}
