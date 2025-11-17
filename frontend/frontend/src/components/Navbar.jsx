import { Link } from "react-router-dom";
import "./Navbar.css"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">🍽️ Feedback Mumbai</Link>
      </div>

      <div className="nav-right">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/admin">Admin</Link>
      </div>
    </nav>
  );
}