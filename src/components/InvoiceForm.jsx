import "../styles/InvoiceForm.css";

export default function InvoiceForm() {
  return (
    <div className="invoice-form">
      <input type="text" placeholder="Amount (XOF/BTC)" />
      <input type="text" placeholder="Optional Memo" />
      <button>Generate Invoice</button>
    </div>
  );
}
