import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    return (
        <nav className="bg-blue-800 shadow-lg">
            <ul className="flex justify-around items-center bg-gray-800 text-white p-4">
                <li>
                    <Link
                        className={`transition-all duration-200 hover:border-b-4 hover:border-yellow-400 padding-2 ${location.pathname === "/" ? "active" : ""
                            }`}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`transition-all duration-200 hover:border-b-4 hover:border-yellow-400 padding-2 ${location.pathname === "/about" ? "active" : ""
                            }`}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={`transition-all duration-200 hover:border-b-4 hover:border-yellow-400 padding-2 ${location.pathname === "/contact" ? "active" : ""
                            }`}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        className={`transition-all duration-200 hover:border-b-4 hover:border-yellow-400 padding-2 ${location.pathname === "/services" ? "active" : ""
                            }`}
                        to="/services"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        className={`transition-all duration-200 hover:border-b-4 hover:border-yellow-400 padding-2 ${location.pathname === "/projects" ? "active" : ""
                            }`}
                        to="/projects"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        className={`transition-all duration-200 hover:border-b-4 hover:border-yellow-400 padding-2 ${location.pathname === "/blog" ? "active" : ""
                            }`}
                        to="/blog"
                    >
                        Blog
                    </Link>
                </li>
            </ul>
            <style>
                {`
                    .active {
                        color: yellow;
                        font-weight: bold;
                        border-bottom: 2px solid yellow;
                    }
                `}
            </style>
        </nav>
    );
}

export default Navbar;
