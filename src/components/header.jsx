import './header.css';

function Header() {
    return (
        <header className="header">
            {/*<img src="logo.png" alt="Company Logo" className="logo" /> */}
            <h1>EMEA</h1>
            <nav>
            <a href="/solutions">Solutions</a> <a href="/Product">Product</a> <a href="/Technology">Technology</a> <a href="/Blog">Blog</a> <a href="/Company">Company</a> <a href="/Login">Login</a>
            </nav>
        </header>
    );
}
export default Header;

