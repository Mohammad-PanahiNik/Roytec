import React from "react"
import "./goals.css"
import goals from "../Assets/goals-img.png"

const Goals = () => {
    return (
        <div className="goals container bg-white shadow ">
            <div className="text-center row text-md-start justify-content-between align-items-center ">
                <div className="goals-items col-md-6 ">
                    <h1 >اهداف رویتک</h1>
                    <p className="mt-5 fs-4 lh-lg">“رویتک” با هدف ارائه خدمات طراحی سایت و پروژه های نرم افزاری از دو تیم تخصصی
                        Back-end و Front-end تشکیل شده.<br></br>
                        ما تلاش میکنیم با ارائه بهترین خدمات در رضایت شما عزیزان را جلب نمائیم.
                    </p>
                </div>
                <div className="goals-img col-md-5 text-center text-md-end">
                    <img className="img-fluid " src={goals} alt="" />
                </div>    
            </div>        
        </div>

    )
}

export default Goals
