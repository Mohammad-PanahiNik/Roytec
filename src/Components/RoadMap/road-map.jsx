import React from "react"
import bgLevels from "../Assets/backgrounds.png"
import khatchinImg from "../Assets/khatchin.png"
import "./road-map.css"

const Level = ({num , level , description})=>{
    return(
        <div className={`level-${num} text-center`}>
            <p className="display-4 fw-bold">مرحله {level}:</p>
            <p className="fs-3 mt-4">{description}</p>
        </div>
    )
}

const RoadMap = () =>{
    return(
        <div className="main-roadmap">
        {/* <div className="container-fluid">
            <img src={bgLevels} alt="" className="bg-levels"></img>
        </div>
        <div className="road-map pt-5 container">
            <h1 className="text-center mt-5">مراحل طراحی و توسعه سایت</h1>
            <div className="levels">
                <Level 
                num={1}
                level={"اول"}
                description={"برقراری ارتباط با مشاورین رویتک و ثبت سفارش"}
                />
                <Level 
                num={2}
                level={"دوم"}
                description={"شروع طراحی ظاهری سایت شما توسط تیم طراحان UI/UX"}
                />
                <Level 
                num={3}
                level={"سوم"}
                description={"شروع کد نویسی توسط تیم های فرانت اند و بک اند"}
                />
                <Level 
                num={4}
                level={"چهارم"}
                description={"انجام تست های نهایی و رفع باگ های احتمالی و موجود در سایت"}
                />
                <Level 
                num={5}
                level={"پنجم"}
                description={"قراردادن سایت روی سرور و تحویل به شما"}
                />
            </div>
        </div> */}
        </div>
    )
}

export default RoadMap
