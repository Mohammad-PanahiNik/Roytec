import React from "react"
import "./designer-services.css"
import laptopImg from "../Assets/laptop.png"
const DesingerServices = ()=>{
    return(
       <div >
            <div className="text-center service-design-h">
                <p className="h1">خدمات تیم طراحی</p>
                <p className="fw-bold mt-4">تمام آنچه برای ساختن یک وب سایت عالی نیاز است</p>
            </div>  
            <div className="main-services-div w-100"> 
                <div className="main-right">
                    <div className="right-top laptop-side">
                        {/* <img src={rightTSideImg}></img> */}
                        <h2 className="w-50">طراحی منحصر بفرد</h2>
                        <p className="w-50 m-4">طراحان ما وبسایتی با طراحی خاص و زیبا را به شما تحویل می دهند.</p>
                    </div>
                    <div className="right-bottom laptop-side">
                        {/* <img src={rightTSideImg}></img> */}
                        <h2 className="w-50">طراحی منحصر بفرد</h2>
                        <p className="w-50 m-4">طراحان ما وبسایتی با طراحی خاص و زیبا را به شما تحویل می دهند.</p>
                    </div>
                </div>
                <div className="lapttop-div d-none d-xl-block">
                    <img src={laptopImg} alt=""/>
                </div>
                <div className="main-left">
                    <div className="left-top laptop-side">
                        {/* <img src={rightTSideImg}></img> */}
                        <h2 className="w-50">طراحی منحصر بفرد</h2>
                        <p className="w-50 m-4">طراحان ما وبسایتی با طراحی خاص و زیبا را به شما تحویل می دهند.</p>
                    </div>
                    <div className="left-bottom laptop-side">
                        {/* <img src={rightTSideImg}></img> */}
                        <h2 className="w-50">طراحی منحصر بفرد</h2>
                        <p className="w-50 m-4">طراحان ما وبسایتی با طراحی خاص و زیبا را به شما تحویل می دهند.</p>
                    </div>
                </div>
            </div>

       </div> 
    )
}

export default DesingerServices 

{/* <div className="services-header">
    <h1>خدمات تیم طراحی</h1>
    <p>تمام آنچه برای ساختن یک وب سایت عالی نیاز است</p>
</div>
<div className="services">
    <div className="services-right-side">
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
        <div className="service-des support">
            <h2>پشتیبانی شش ماهه</h2>
            <p>تمامی وبسایت های طراحی شده به صورت پیش فرض دارای شش ماه گارانتی رفع باگ و مشکل احتمالی در صورت وقوع میباشند.</p>
        </div>
        <div className="service-des coordination">
            <h2>هماهنگ با تمامه دستگاه ها</h2>
            <p>طراحی متناسب با  تمام دستگاه ها  از جمله تلفن های همراه، تبلت ها  که باعث دسترسی آسان و جذاب سایت شما می شود.</p>
        </div>
    </div>
</div> */}
// <div className="designer-service container-xxl">
//     <img className="laptop-img" src={laptopImg} alt=""></img>
//     <div className="row">
//         <div className="col-6">
//             <img src={rightTSideImg} alt=""></img>
        
//         </div>
//         <div className="col-6"></div>
//     </div>
//     <div className="row">
//         <div className="col-6"></div>
//         <div className="col-6"></div>
//     </div>
// </div>