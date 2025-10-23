import "../styles/CreateInvoice.css";
import InvoiceForm from "../components/InvoiceForm";

export default function CreateInvoice() {
  return (
    <div className="create-invoice">
      <h1>Create Invoice</h1>
      <InvoiceForm />
    </div>
  );
}
