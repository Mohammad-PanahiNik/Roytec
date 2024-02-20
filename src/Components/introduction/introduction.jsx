import React from "react"
import "./introduction.css"
import introduction from "../Assets/introduction-img.png"
import introductionBg from "../Assets/introdoction-bg.png"
const Introduction = () => {
    return (
        <div className="bg-introduction container-fluid">
        <div className="introduction container justify-content-between  px-5">
            <div className="row">
                <div className="introduction-items col-md-6 text-center text-md-start ">
                    <h2 className="h1 lh-lg">رویتک در اختیار شماست!</h2>
                    <p className="fs-4 lh-lg mt-3">خدمات طراحی سایت خودتون رو به “رویتک” بسپارید <br className="d-md-none d-lg-block"></br>
                        اگر میخواید کسب و کارتون رو گسترده تر کنید!</p>
                    <button className="btn mt-4 button-order">نحوه سفارش</button>
                </div>
                <div className="introduction-img d-none d-md-block col-md-6">
                    <img src={introduction} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Introduction