import React from "react"
import "./header.css"
import logo from "../Assets/logo.png"
import price from "../Assets/price.png"
import workSample from "../Assets/work samples.png"
import order from "../Assets/order.png"
import aboutUs from "../Assets/about us.png"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="header-option">
                <li className="fw-bold">نمونه کارها</li>
                <li className="fw-bold">نحوه سفارش</li>
                <li className="fw-bold">تعرفه ها</li>
                <li className="fw-bold">درباره ما</li>
            </ul>
            <div className="header-sidebar">
                <img src={logo} className="w-100 h-10" alt="" />
                <ul className="my-5">
                    <li className="d-flex my-3 align-items-center fw-bold rounded-4 p-2">
                        <img src={workSample} className="sidebar-img mx-3" alt="" />
                        <p className="fs-3">نمونه کارها</p>
                    </li>
                    <li className="d-flex my-3 align-items-center fw-bold rounded-4 p-2">
                        <img src={order} className="sidebar-img mx-3" alt="" />
                        <p className="fs-3">نحوه سفارش</p>
                    </li>
                    <li className="d-flex my-3 align-items-center fw-bold rounded-4 p-2">
                        <img src={price} className="sidebar-img mx-3" alt="" />
                        <p className="fs-3">تعرفه ها</p>
                    </li>
                    <li className="d-flex my-3 align-items-center fw-bold rounded-4 p-2">
                        <img src={aboutUs} className="sidebar-img mx-3" alt="" />
                        <p className="fs-3">درباره ما</p>
                    </li>
                </ul>
            </div>
            <div class="menu-btn" >
                <div class="menu-btn-burger"></div>
            </div>
        </div>

    )
}

export default Header