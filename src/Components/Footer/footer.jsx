import React from "react"
import "./footer.css"
import logo from "../Assets/footer-logo.png"
import telegram from "../Assets/telegram.png"
import instragram from "../Assets/instagram.png"
import linkedin from "../Assets/linkedin.png"
import email from "../Assets/email.png"
import phone from "../Assets/phone.png"

const Footer = () => {
    return (
        // <div className="footer container-fluid w-100">
        //     <div className="footer-sections d-flex justify-content-center">
        //         <div className="info col-lg-3 mt-5">
        //             <img src={logo} className="footer-roytec col-lg-10" alt=""/>
        //             <div className="d-flex col-lg-10 justify-content-center my-2">
        //                 <img src={email} className="me-2" alt=""/>
        //                 <p className="">roytec2023@gmail.com</p>
        //             </div>
        //             <div className="d-flex col-lg-10 justify-content-center">
        //                 <img src={phone} className="me-2" alt=""/>
        //                 <p>+98-9018605742</p>
        //             </div>
        //         </div>
        //         <div className="members col-lg-1 text-center mt-5">
        //             <h4>اعضا</h4>
        //             <p>فرانت اند</p>
        //             <p>بک اند</p>
        //             <p>طراح UI/UX</p>
        //         </div>
        //         <div className="prices col-lg-1 text-center  mt-5">
        //             <h4>تعرفه ها</h4>
        //             <p>اقتصادی</p>
        //             <p>اختصاصی</p>
        //         </div>
        //         <div className="servicess col-lg-1 text-center  mt-5">
        //             <h4>خدمات </h4>
        //             <p>خدمات</p>
        //             <p>طراحی</p>
        //             <p>فروشگاهی</p>
        //             <p>شرکتی</p>
        //         </div>
        //         <div className="social-media col-lg-4 text-center p-5">
        //             <h4>شبکه های اجتماعی</h4>
        //             <div className="col-lg-10 col-lg-offset-1 d-flex align-items-end justify-content-between my-3">
        //                 <p className="fs-2">همراه ما باشید</p>
        //                 <div>
        //                     <img src={telegram} alt=""/>
        //                     <img src={instragram} alt=""/>
        //                     <img src={linkedin} alt=""/>
        //                 </div>
        //             </div>
        //             <div className="col-lg-10 col-lg-offset-1 d-flex justify-content-between my-4">
        //                 <button>تماس با ما</button>
        //                 <button>درباره ما</button>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="copy d-flex align-items-center ps-5">
        //         <div className=" fs-3">
        //             <p>تمامی حقوق مادی و معنوی این وبسایت متعلق به <span className="fs-1 fw-bold">رویتک</span> می باشد و هر گونه کپی برداری پیگرد قانونی دارد.</p>
        //         </div>
        //     </div>
        // </div>





        <div className="footer">
            <div className="footer-section">
                <div className="info">
                    <div  className="footer-logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <img src={email} className="info-icons" alt=""/>
                        <p className="">roytec2023@gmail.com</p>
                    </div>
                    <div>
                        <img src={phone} className="info-icons" alt=""/>
                        <p>+98-9018605742</p>
                    </div>
                </div>
                <div className="members">
                    <h3>اعضا</h3>
                    <p>فرانت اند</p>
                    <p>بک اند</p>
                    <p>طراح UI/UX</p>
                </div>
                <div className="prices">
                    <h3>تعرفه ها</h3>
                    <p>اقتصادی</p>
                    <p>اختصاصی</p>
                </div>
                <div className="services">
                    <h3>خدمات </h3>
                    <p>خدمات</p>
                    <p>طراحی</p>
                    <p>فروشگاهی</p>
                    <p>شرکتی</p>
                </div>
                <div className="social-media">
                    <h3>شبکه های اجتماعی</h3>
                    <div className="social-icons">
                        <p>همراه ما باشید</p>
                        <div>
                            <img src={telegram} alt=""/>
                            <img src={instragram} alt=""/>
                            <img src={linkedin} alt=""/>
                        </div>
                    </div>
                    <div>
                        <button>تماس با ما</button>
                        <button>درباره ما</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="copy">
                    <p>تمامی حقوق مادی و معنوی این وبسایت متعلق به <span>رویتک</span> می باشد و هر گونه کپی برداری پیگرد قانونی دارد.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer