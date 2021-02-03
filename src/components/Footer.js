import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-rows">
                    <h1>MARTIN’S MOVIES</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Itaque, ducimus, atque. Praesentium suscipit
                        provident explicabo dignissimos nostrum numquam deserunt
                        earum accusantium et fugit.
                    </p>
                </div>
                <div className="footer-rows">
                    <h1>Useful Links</h1>
                    <ul>
                        <li>About Martin’s Movies</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>Testimonials</li>
                        <li>Error 404</li>
                    </ul>
                </div>
                <div className="footer-rows">
                    <h1>Socials</h1>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Pinterest</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <ul>
                    <li>Privacy & Cookies</li>
                    <li>Terms & Conditions</li>
                    <li>Legal Disclaimer</li>
                    <li>Community</li>
                </ul>
                <span>Copyright 2021. All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;
