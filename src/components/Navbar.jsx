import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ user }) {
  return (
    <nav className="navbar">
      {/* Always show Home */}
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>

      {user ? (
        <>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
            Dashboard
          </NavLink>
          <NavLink to="/create-invoice" className={({ isActive }) => isActive ? "active" : ""}>
            Create Invoice
          </NavLink>
          <NavLink to="/transactions" className={({ isActive }) => isActive ? "active" : ""}>
            Transactions
          </NavLink>
          <NavLink to="/withdraw" className={({ isActive }) => isActive ? "active" : ""}>
            Withdraw
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
            Profile
          </NavLink>
          <NavLink to="/offline-invoices" className={({ isActive }) => isActive ? "active" : ""}>
            Offline
          </NavLink>
          <NavLink to="/tutorial" className={({ isActive }) => isActive ? "active" : ""}>
            Tutorial
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Login
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
}
