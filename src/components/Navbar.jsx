import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/create-invoice">Create Invoice</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
      <NavLink to="/withdraw">Withdraw</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/offline-invoices">Offline</NavLink>
      <NavLink to="/tutorial">Tutorial</NavLink>
    </nav>
  );
}
