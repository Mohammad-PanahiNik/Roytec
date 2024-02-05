import React from "react"
import "./introduction.css"
import introduction from "../Assets/introduction-img.jpg"
const Introduction = () => {
    return (
        <div className="introduction container-lg justify-content-between mt-5  px-5">
            <div className="row align-items-center">
                <div className="introduction-items col-md-5 text-center text-md-start">
                    <h3 className="h1">رویتک در اختیار شماست!</h3>
                    <p className="fs-4 lh-lg mt-4">خدمات طراحی سایت خودتون رو به “رویتک” بسپارید<br></br>
                        اگر میخواید کسب و کارتون رو گسترده تر کنید!</p>
                    <button className="btn mt-4 button-order">نحوه سفارش</button>
                </div>
                <div className="introduction-img d-none d-md-block col-md-7">
                    <img src={introduction} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>

    )
}

export default Introduction