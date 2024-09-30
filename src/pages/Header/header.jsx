import React from "react";
import logo from "../../assets/header_logo.svg";


export const Header = () => {
    return (
        <header className="header_main">
            <div className="container">
                <div className="header_wrapper">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="header_list">
                        <a className="header_link" href="#">Pricing</a>
                        <a className="header_link" href="#">Product</a>
                        <a className="header_link" href="#">About Us</a>
                        <a className="header_link" href="#">Careers</a>
                        <a className="header_link" href="#">Community</a>
                    </div>
                    <a className="header_btn" href="#">Get Started</a>
                </div>
            </div>
        </header>
    );
}