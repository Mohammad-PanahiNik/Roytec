import React from "react"
import "./designer-services.css"
import laptopImg from "../Assets/laptop.png"
import serviceDesignerBg from "../Assets/services-designer-bg.png"
import mobileImg from "../Assets/service-design-mobile.png"
const DesingerServices = ()=>{
    return(
       <div className="main-services-div" >
        <img src={serviceDesignerBg} alt="" className="service-designer-bg d-none d-lg-block"></img>
            <div className="text-center service-design-h">
                <p className="h1">خدمات تیم طراحی</p>
                <p className="fw-bold mt-4">تمام آنچه برای ساختن یک وب سایت عالی نیاز است</p>
            </div>  
            <div className="services"> 
                <div className="main-right">
                    <div className="right-top laptop-side">
                        {/* <img src={rightTSideImg}></img> */}
                        <h2>طراحی منحصر بفرد</h2>
                        <p className="lh-lg">طراحان ما وبسایتی با طراحی خاص و زیبا را به شما تحویل می دهند.</p>
                    </div>
                    <div className="right-bottom laptop-side">
                        {/* <img src={rightTSideImg}></img> */}
                        <h2>پشتیبانی شش ماهه</h2>
                        <p className="lh-lg">تمامی وبسایت های طراحی شده به صورت پیش فرض دارای شش ماه پشتیبانی رفع باگ و مشکل احتمالی در صورت وقوع می باشند.</p>
                    </div>
                </div>
                <div className="lapttop-div d-none d-lg-block">
                    <img src={laptopImg} alt=""/>
                </div>
                <div className="mobile-img d-lg-none">
                    <img src={mobileImg} alt=""/>
                </div>
                <div className="main-left">
                    <div className="left-top laptop-side">
                        {/* <img src={rightTSideImg}></img> */}
                        <h2>امنیت بالا</h2>
                        <p className="lh-lg">وبسایت های طراحی شده با امنیت بالا در اختیار مشتری قرار خواهند گرفت و در صورت بروز مشکل مسئولیت به عهده تیم طراحان است.</p>
                    </div>
                    <div className="left-bottom laptop-side">
                        {/* <img src={rightTSideImg}></img> */}
                        <h2>هماهنگ با تمام دستگاه ها  </h2>
                        <p className="lh-lg">طراحی متناسب با  تمام دستگاه ها  از جمله تلفن های همراه، تبلت ها  که باعث دسترسی آسان و جذاب سایت شما می شود.</p>
                    </div>
                </div>
            </div>

       </div> 
    )
}

export default DesingerServices 
