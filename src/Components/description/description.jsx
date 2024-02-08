import React from "react"
import "./description.css"
import store from "../Assets/supermarket.PNG"
import company from "../Assets/Company.PNG"
import support from "../Assets/support.PNG"

const DescriptionBox = ({img ,header ,description})=>{
    return(
        <div className="description-box col-md-4 bg-white shadow text-center my-5">
            <img src={img} alt="" className="col-8 my-5"></img>
            <h3>{header}</h3>
            <p className="fs-4 leady lh-lg ">{description}</p>
        </div>
    )
}

const Description = () => {
    return (
            // <div className="main-description">
            //     <div className="back-ground">

            //     </div>
            //     <div className="main-desciotion-div">
            //         <div className="description-items">
            //             <img src={store} alt="" />
            //             <h3>طراحی وبسایت فروشگاهی</h3>
            //             <p> لازمه پی ریزی یک کسب و کار موفق، داشتن پشت کار قوی و راهی برای ارتباط مستقیم با مشتریان است.
            //                 برای ورود به بازار و مقابله با رقبا و درخشیدن بین آنها داشتن یک فروشگاه اینترنتی به شما کمک خواهد کرد.
            //             </p>

            //         </div>
            //     </div>
            //     <div className="main-desciotion-div">
            //         <div className="description-items">
            //             <img src={support}/>
            //             <h3>دسترسی های آسان و کاربردی</h3>
            //             <p>شرکت های نوپا نیازمند دیده شدن هستند.
            //                 یکی از بهترین راه ها برای روی کار آمدن و دیده شدن داشتن یک سایت کاربردی و اختصاصی  است.
            //             </p>
            //         </div>
            //     </div>
            //     <div className="main-desciotion-div">
            //         <div className="description-items">
            //             <img src={company}/>
            //             <h3>طراحی وبسایت شرکتی</h3>
            //             <p>تمامی سایت های طراحی شده باید ساده و دارای رابط کاربری جذاب و ساده  برای کاربران باشند.,
            //                 علاوه بر زیبایی نمای بصری و گرافیکی سایت، سلیقه شخصی شما میتواند به بهبود طراحی کمک کند.
            //             </p>
            //         </div>
            //     </div>
            // </div>
            <div className="main-description container">
                <div className="row justify-content-center justify-content-xl-between">
                    <DescriptionBox 
                    img={store} 
                    header={"طراحی وبسایت فروشگاهی"}
                    description={"لازمه پی ریزی یک کسب و کار موفق، داشتن پشت کار قوی و راهی برای ارتباط مستقیم با مشتریان است. برای ورود بهبازار و مقابله با رقبا و درخشیدن بین آنها داشتن یک فروشگاه اینترنتی به شما کمک خواهد کرد."}
                    />
                    <DescriptionBox 
                    img={support} 
                    header={"دسترسی آسان و کاربردی"}
                    description={"شرکت های نوپا نیازمند دیده شدن هستند. یکی از بهترین راه ها برای روی کار آمدن و دیده شدن داشتن یک سایت  کاربردی و اختصاصی است."}
                    />
                    <DescriptionBox 
                    img={company} 
                    header={"طراحی وبسایت شرکتی"}
                    description={"تمامی سایت های طراحی شده باید ساده و دارای رابط کاربری جذاب و ساده برای کاربران باشند., علاوه بر زیبایی نمای بصری و گرافیکی سایت، سلیقه شخصی شما میتواند به بهبود طراحی کمک کند."}
                    />
                </div>
            </div>
    )
}

export default Description