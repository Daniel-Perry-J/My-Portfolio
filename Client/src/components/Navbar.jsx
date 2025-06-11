function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="list-unstyled d-flex justify-content-around">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
