import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-column">
                    <h4>Quick Access</h4>
                    <ul>
                        <li><a href="#">Create Account</a></li>
                        <li><a href="#">Log In</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                

                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Webinars</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Academy</a></li>
                        <li><a href="#">Advisor Directory</a></li>
                        <li><a href="#">Solution Partners</a></li>
                        <li><a href="#">Developer Solutions</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">Join the Team</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Solution Partners</a></li>
                        <li><a href="#">Advisor Partners</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Cookies Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Language</h4>
                    <select>
                        <option>English</option>
                        <option>Español</option>
                        <option>Français</option>
                    </select>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 EMEA Venture. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-youtube" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
