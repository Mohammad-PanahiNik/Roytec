import React from "react"
import "./goals.css"
import goals from "../Assets/goals-img.png"

const Goals = () => {
    return (
        <div className="goals">
            <div className="goals-items">
                <h3>اهداف رویتک</h3>
                <p>“رویتک” با هدف ارائه خدمات طراحی سایت و پروژه های نرم افزاری از دو تیم تخصصی<br></br>
                    Back-end و Front-end تشکیل شده.<br></br>
                    ما تلاش میکنیم با ارائه بهترین خدمات در رضایت شما عزیزان را جلب نمائیم.
                </p>
            </div>
            <div className="goals-img">
                <img src={goals} alt="" />
            </div>            
        </div>

    )
}

export default Goals