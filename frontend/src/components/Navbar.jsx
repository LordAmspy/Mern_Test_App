
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="bg-black text-white p-4 flex gap-6">

      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

      <Link to="/dashboard">Dashboard</Link>

    </nav>
  );
}

export default Navbar;
