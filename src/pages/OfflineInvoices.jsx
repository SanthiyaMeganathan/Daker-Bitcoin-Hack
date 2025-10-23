import "../styles/OfflineInvoicesPage.css";
import OfflineInvoices from "../components/OfflineInvoices";

export default function OfflineInvoicesPage() {
  return (
    <div className="offline-invoices-page">
      <h1>Offline / Pending Invoices</h1>
      <OfflineInvoices />
    </div>
  );
}
