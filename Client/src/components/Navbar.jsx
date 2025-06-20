import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    return (
        <nav className="bg-blue-800 shadow-lg">
            <ul className="flex justify-around items-center bg-gray-800 text-white p-4">
                <li>
                    <Link
                        className={`transition-all duration-200 hover:font-bold hover:border-b-4 hover:border-yellow-400 p-2 ${location.pathname === "/" ? "border-b-4 border-yellow-400 font-bold text-yellow-400" : ""}`}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`transition-all duration-200 hover:font-bold hover:border-b-4 hover:border-yellow-400 p-2 ${location.pathname === "/about" ? "border-b-4 border-yellow-400 font-bold text-yellow-400" : ""}`}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={`transition-all duration-200 hover:font-bold hover:border-b-4 hover:border-yellow-400 p-2 ${location.pathname === "/contact" ? "border-b-4 border-yellow-400 font-bold text-yellow-400" : ""}`}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        className={`transition-all duration-200 hover:font-bold hover:border-b-4 hover:border-yellow-400 p-2 ${location.pathname === "/projects" ? "border-b-4 border-yellow-400 font-bold text-yellow-400" : ""}`}
                        to="/projects"
                    >
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
