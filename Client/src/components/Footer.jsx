function Footer() {
    return (
        <div>
            <br />
            <footer className="bg-blue-900 text-white text-center py-4">
                <p>&copy; {new Date().getFullYear()} My Portfolio</p>
                <p>Last updated : {document.lastModified.split(" ")[0]}</p>
            </footer>
        </div>
    );
}

export default Footer;
