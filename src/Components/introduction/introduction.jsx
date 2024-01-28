import React from "react"
import "./introduction.css"
import introduction from "../Assets/introduction-img.jpg"
const Introduction = () => {
    return (
        <div className="introduction">
            <div className="introduction-items">
                <h3>رویتک در اختیار شماست!</h3>
                <p>خدمات طراحی سایت خودتون رو به “رویتک” بسپارید<br></br>
                    اگر میخواید کسب و کارتون رو گسترده تر کنید!</p>
                <button>نحوه سفارش</button>
            </div>
            <div className="introduction-img">
                <img src={introduction} alt="" />
            </div>
        </div>

    )
}

export default Introduction