function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} My Portfolio</p>
            <p>Last updated : {document.lastModified}</p>
        </footer>
    );
}

export default Footer;
