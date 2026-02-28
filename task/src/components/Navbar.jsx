import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex gap-6">
        
        <Link 
          to="/" 
          className="hover:text-blue-200 font-semibold"
        >
          Home
        </Link>

        <Link 
          to="/tasks" 
          className="hover:text-blue-200 font-semibold"
        >
          Tasks
        </Link>

      </div>
    </nav>
  );
}