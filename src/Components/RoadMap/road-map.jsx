import React from "react"
import bgLevels from "../Assets/backgrounds.png"
import khatchinImg from "../Assets/khatchin.png"
import "./road-map.css"

const RoadMap = () =>{
    return(
        <div className="road-map pt-5">
            <img src={bgLevels} alt="" className="bg-levels"></img>
            <h1 className="text-center mt-5">مراحل طراحی و توسعه سایت</h1>
            <div className="levels">
                {/* <img src={khatchinImg} alt="" className="khatchin-img "></img> */}
                <div className="first-level text-center">
                    <p className="display-4 fw-bold">مرحله اول:</p>
                    <p className="fs-3 mt-4">برقراری ارتباط با مشاورین رویتک و ثبت سفارش</p>
                </div>
                <div className="second-level text-center">
                    <p className="display-4 fw-bold">مرحله دوم:</p>
                    <p className="fs-3 mt-4">شروع طراحی ظاهری سایت شما توسط تیم طراحان UI/UX</p>
                </div>
                <div className="third-level text-center">
                    <p className="display-4 fw-bold">مرحله سوم:</p>
                    <p className="fs-3 mt-4">شروع کد نویسی توسط تیم های فرانت اند و بک اند</p>
                </div>
                <div className="fourth-level text-center">
                    <p className="display-4 fw-bold">مرحله چهارم:</p>
                    <p className="fs-3 mt-4">انجام تست های نهایی و رفع باگ های احتمالی و موجود در سایت</p>
                </div>
                <div className="fifth-level text-center">
                    <p className="display-4 fw-bold">مرحله پنجم:</p>
                    <p className="fs-3 mt-4">قراردادن سایت روی سرور و تحویل به شما </p>
                </div>
            </div>
        </div>
    )
}

export default RoadMap
