import "../styles/Landing.css";
import Navbar from "../components/Navbar";

export default function Landing() {
  const user = null; // No user yet on landing page

  return (
    <div className="landing-page">
      
      <main className="landing">
        <h1>Welcome to Bitcoin Micro-Merchant Tool</h1>
        <p>Accept Bitcoin payments instantly for your business!</p>
        <div className="landing-buttons">
          <a href="/login" className="btn">Login</a>
          <a href="/register" className="btn">Register</a>
        </div>
      </main>
    </div>
  );
}
