import React from "react"
import "./description.css"
import store from "../Assets/supermarket.PNG"
import company from "../Assets/Company.PNG"
import support from "../Assets/support.PNG"
const Description = () => {
    return (
        <div className="main-container">
            <div className="main-description">
                <div className="main-desciotion-div">
                    <div className="description-items">
                        <img src={store} alt="" />
                        <h3>طراحی وبسایت فروشگاهی</h3>
                        <p> لازمه پی ریزی یک کسب و کار موفق، داشتن پشت کار قوی و راهی برای ارتباط مستقیم با مشتریان است.
                            برای ورود به بازار و مقابله با رقبا و درخشیدن بین آنها داشتن یک فروشگاه اینترنتی به شما کمک خواهد کرد.
                        </p>

                    </div>
                </div>
                <div className="main-desciotion-div center">
                    <div className="description-items">
                        <img src={support}/>
                        <h3>دسترسی های آسان و کاربردی</h3>
                        <p>شرکت های نوپا نیازمند دیده شدن هستند.
                            یکی از بهترین راه ها برای روی کار آمدن و دیده شدن داشتن یک سایت کاربردی و اختصاصی  است.
                        </p>
                    </div>
                </div>
                <div className="main-desciotion-div">
                    <div className="description-items">
                        <img src={company}/>
                        <h3>طراحی وبسایت شرکتی</h3>
                        <p>تمامی سایت های طراحی شده باید ساده و دارای رابط کاربری جذاب و ساده  برای کاربران باشند.,
                            علاوه بر زیبایی نمای بصری و گرافیکی سایت، سلیقه شخصی شما میتواند به بهبود طراحی کمک کند.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Description