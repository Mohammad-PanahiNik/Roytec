import React from "react"
import bgLevels from "../Assets/backgrounds.png"
import khatchinImg from "../Assets/khatchin.png"
import "./road-map.css"

const Level = ({num , level , description})=>{
    return(
        <div className={`level-${num} level text-center`}>
            <p className="level-h display-5 fw-bold">مرحله {level}:</p>
            <p className="des-level fs-4 mt-4">{description}</p>
        </div>
    )
}

const RoadMap = () =>{
    return(
        <div id="road-map" className="main-roadmap container-fluid">
        <div className="road-map container">
            <h1 className="text-center mt-5 lh-lg">مراحل طراحی و توسعه سایت</h1>
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
            <div className="need-web container">
                <h3 className="lh-lg">چرا کسب و کار شما به وبسایت نیاز دارد؟!</h3>
                <p className="text-justify lh-lg mt-3">از جمله مزایای داشتن یک فروشگاه اینترنتی، میتوان به بازخورد گسترده و کمک به فروش 
                بیشتر محصولات شما اشاره کرد. داشتن یک فروشگاه اینترنتی با طراحی و رابط کاربری خاص و ساده می تواند با فراهم کردن دسترسی ساده به محصولات شما به رونق بیشتر کسب کارتان کمک کند.
                </p>
            </div>
            <div className="need-seen container">
                <div className="row">
                    <div className="col-md-6 col-xl-7 d-none d-md-block"></div> 
                    <div className="text-seen col-12 col-md-6 col-xl-4">
                        <h3 className="lh-lg">نیاز به دیده شدن دارید؟!</h3>
                        <p className="text-justify lh-lg mt-3">داشتن یک وبسایت ساده و بهینه یکیاز بهترین راه های معرفی و بیان توانایی های شماست. کسانی که دوست دارند بیشتر درباره شما و یا محصول و خدماتی که ارایه میدهید بیشتر بدانند میتوانند از طریق آدرس وبسایت و حتی با اسکن یک QR کد از روی کارت ویزیت شما به تمام محتوایی که دوست دارید با آنها به اشتراک بگذارید دهید دسترسی داشته باشند.</p>
                    </div>
                </div>
            </div>
            <div className="need-seen container">
                <div className="row">
                    <div className="text-seen col-12 col-md-4 col-xl-3">
                        <h3 className="lh-lg">نیاز به تبلیغات دارید؟!</h3>
                        <p className="text-justify lh-lg mt-3">اگر نیاز به تبلیغ و معرفی خودتان دارید، یک وبسایت تبلیغاتی بهترین راه برای دیده شدن در سطح دنیای مجازی است.</p>
                    </div>
                    <div className="col-md-7 col-xl-8 d-none d-md-block"></div> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default RoadMap
