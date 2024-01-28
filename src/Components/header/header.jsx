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
                <li>نمونه کارها</li>
                <li>نحوه سفارش</li>
                <li>درباره ما</li>
                <li>تعرفه ها</li>
            </ul>
        </div>
    )
}

export default Header