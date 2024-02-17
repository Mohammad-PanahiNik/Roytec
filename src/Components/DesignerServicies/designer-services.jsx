import React from "react"
import "./designer-services.css"
import laptopImg from "../Assets/laptop.png"
import serviceDesignerBg from "../Assets/services-designer-bg.png"
const DesingerServices = ()=>{
    return(
       <div className="main-services-div" >
        <img src={serviceDesignerBg} alt="" className="service-designer-bg d-none d-md-block"></img>
            <div className="text-center service-design-h">
                <p className="h1">خدمات تیم طراحی</p>
                <p className="fw-bold mt-4">تمام آنچه برای ساختن یک وب سایت عالی نیاز است</p>
            </div>  
            <div className="services w-100"> 
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
                <div className="lapttop-div">
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
