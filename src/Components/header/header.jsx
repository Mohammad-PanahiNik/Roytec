import React from "react"
import "./header.css"
import logo from "../Assets/logo.png"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="header-option">
                <li><a href="#">نمونه کارها</a></li>
                <li><a href="#road-map">نحوه سفارش</a></li>
                <li><a href="#">درباره ما</a></li>
                <li><a href="#price">تعرفه ها</a></li>
            </ul>
        </div>

    )
}

export default Header