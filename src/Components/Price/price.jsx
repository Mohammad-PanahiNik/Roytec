import React from "react"
import "./price.css"
import tick from "../Assets/tick.png"
import threeStars from "../Assets/three stars.png"
import FiveStars from "../Assets/five stars.png"

const Card = ({kind , description , price , design , custom , speed , support , host , time }) => {
    let custom_img = ""
    let speed_img = ""
    if (custom == "5") {
        custom_img = FiveStars
    } else if (custom == "3") {
        custom_img = threeStars
    }
    if (speed == "5") {
        speed_img = FiveStars
    } else if (speed == "3") {
        speed_img = threeStars
    }
    return(
        <div className="card">
            <h3>{kind}</h3>
            <p className="card-p">{description}</p>
            <div  className="card-price">
                <p>شروع از <span>{price} ملیون تومان</span></p>
            </div>
            <div className="card-detail">
                <p>طراحی</p>
                <p>{design}</p>
            </div>
            <div className="card-detail">
                <p>قابلیت سفارش سازی</p>
                <img src={custom_img} alt="" className="stars"/>
            </div>
            <div className="card-detail">
                <p>سرعت سایت</p>
                <img src={speed_img} alt="" className="stars"/>
            </div>
            <div className="card-detail">
                <p>آموزش پنل کاربری</p>
                <img src={tick} alt="" className="tick"/>
            </div>
            <div className="card-detail">
                <p>خدمات پشتیبانی</p>
                <p>{support}</p>
            </div>
            <div className="card-detail">
                <p>میزبانی رایگان</p>
                <p>{host}</p>
            </div>
            <div className="card-detail">
                <p>زمان اجرا</p>
                <p>{time}</p>
            </div>
            <div className="card-detail">
                <p>پرداخت دو مرحله ای</p>
                <img src={tick} alt="" className="tick"/>
            </div>
            <div className="card-detail">
                <p>اطلاعات بیشتر</p>
                <p>تماس بگیرید</p>
            </div>
        </div>
    )
}
const price = () => {
    return (
        <div className="price-main">
            <div className="price-introduction">
                <h1>پلن های خودتان را انتخاب کنید!</h1>
                <p>با توجه به نیاز خود می توانید از بین تعرفه ها و پلن های ما<br></br>
                    انتخاب خودتان را به درستی انجام دهید.</p>
            </div>
            <div>
                <div className="price-title">
                    <p>تعرفه فروشگاه های اینترنتی</p>
                </div>
                <div className="cards">
                    <Card
                    kind = "اقتصادی"
                    description = "اگر به دنبال فروشگاه اینترنتی با قیمت مناسب و اقتصادی هستید، ما به شما پلن اقتصادی رویتک را پیشنهاد می کنیم."
                    price ="8"
                    design = "آماده"
                    custom = "3"
                    speed = "3"
                    support = "1 سال"
                    host = "1 گیگابایت"
                    time = "15 تا 20 روز"
                    />
                    <Card
                    kind = "اختصاصی"
                    price = "11"
                    description = "اگر به دنبال فروشگاه اینترنتی با سطح امکاناتی بهتر از پلن اقتصادی رویتک هستید، پیشنهاد ما به شما پلن اختصاصی با امکانات بیشتر است."
                    design = "اختصاصی"
                    custom = "5"
                    speed = "5"
                    support = "2 سال"
                    host = "1 گیگابایت"
                    time = "20 تا 25 روز"
                    />
                </div>
                <div className="price-title">
                    <p>تعرفه های شرکتی </p>
                </div>
                <div className="cards">
                    <Card
                    kind = "اقتصادی"
                    description = "اگر به دنبال وبسایت برای معرفی و تبلیغات شرکتی خود با قیمت مناسب و اقتصادی هستید، ما به شما پلن اقتصادی رویتک را پیشنهاد می کنیم. "
                    price = "5"
                    design = "آماده"
                    custom = "3"
                    speed = "3"
                    support = "1 سال"
                    host = "2 گیگابایت"
                    time = "10 روز"
                    />
                    <Card
                    kind = "اختصاصی"
                    description= "اگر به دنبال وبسایت شرکتی با سطح امکاناتی بهتر از پلن اقتصادی رویتک هستید، پیشنهاد ما به شما پلن اختصاصی با امکانات بیشتر است."
                    price = "8"
                    design = "اختصاصی"
                    custom = "5"
                    speed = "5"
                    support = "2 سال"
                    host = "7 گیگابایت"
                    time = "15 روز"
                    />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default price