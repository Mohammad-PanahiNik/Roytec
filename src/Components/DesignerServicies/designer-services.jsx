import React from "react"
import "./designer-services.css"
// import rightSideImg from "../Assets/right.png"
// import leftSideImg from "../Assets/left.png"
import laptopImg from "../Assets/laptop.png"
const DesingerServices = ()=>{
    return(
        <>
            <div className="services-header">
                <h1>خدمات تیم طراحی</h1>
                <p>تمام آنچه برای ساختن یک وب سایت عالی نیاز است</p>
            </div>
            <div className="services">
                <div className="services-right-side">
                    {/* <img src={rightSideImg} alt=""/> */}
                    <div className="service-des uniqe-design">
                        <h2>طراحی منحصر بفرد</h2>
                        <p>طراحان ما وبسایتی با طراحی خاص و زیبا را به شما تحویل می دهند.</p>
                    </div>
                    <div className="service-des high-sequrity">
                        <h2>امنیت بالا</h2>
                        <p>وبسایت های طراحی شده با امنیت بالا در اختیار مشتری قرار خواهند گرفت و در صورت بروز مشکل مسئولیت به عهده تیم طراحان است.</p>
                    </div>
                </div>
                <div className="lapttop-div">
                    <img src={laptopImg} alt=""/>
                </div>
                <div className="services-left-side">
                    {/* <img className="left-img" src={leftSideImg} alt=""/> */}
                    <div className="service-des support">
                        <h2>پشتیبانی شش ماهه</h2>
                        <p>تمامی وبسایت های طراحی شده به صورت پیش فرض دارای شش ماه گارانتی رفع باگ و مشکل احتمالی در صورت وقوع میباشند.</p>
                    </div>
                    <div className="service-des coordination">
                        <h2>هماهنگ با تمامه دستگاه ها</h2>
                        <p>طراحی متناسب با  تمام دستگاه ها  از جمله تلفن های همراه، تبلت ها  که باعث دسترسی آسان و جذاب سایت شما می شود.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesingerServices 