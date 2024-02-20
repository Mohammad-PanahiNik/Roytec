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





        // <div className="footer">
        //     <div className="footer-section">
        //         <div className="info">
        //             <div  className="footer-logo">
        //                 <img src={logo} alt=""/>
        //             </div>
        //             <div>
        //                 <img src={email} className="info-icons" alt=""/>
        //                 <p className="">roytec2023@gmail.com</p>
        //             </div>
        //             <div>
        //                 <img src={phone} className="info-icons" alt=""/>
        //                 <p>+98-9018605742</p>
        //             </div>
        //         </div>
        //         <div className="members">
        //             <h3>اعضا</h3>
        //             <p>فرانت اند</p>
        //             <p>بک اند</p>
        //             <p>طراح UI/UX</p>
        //         </div>
        //         <div className="prices">
        //             <h3>تعرفه ها</h3>
        //             <p>اقتصادی</p>
        //             <p>اختصاصی</p>
        //         </div>
        //         <div className="footer-services">
        //             <h3>خدمات </h3>
        //             <p>خدمات</p>
        //             <p>طراحی</p>
        //             <p>فروشگاهی</p>
        //             <p>شرکتی</p>
        //         </div>
        //         <div className="social-media">
        //             <h3>شبکه های اجتماعی</h3>
        //             <div className="social-icons">
        //                 <p>همراه ما باشید</p>
        //                 <div>
        //                     <img src={telegram} alt=""/>
        //                     <img src={instragram} alt=""/>
        //                     <img src={linkedin} alt=""/>
        //                 </div>
        //             </div>
        //             <div>
        //                 <button>تماس با ما</button>
        //                 <button>درباره ما</button>
        //             </div>
        //         </div>
        //     </div>
        //     <div>
        //         <div className="copy">
        //             <p>تمامی حقوق مادی و معنوی این وبسایت متعلق به <span>رویتک</span> می باشد و هر گونه کپی برداری پیگرد قانونی دارد.</p>
        //         </div>
        //     </div>
        // </div>



        <div className="footer container-fluid">
            <div className="footer-main row justify-content-between text-center py-5">
                <div className="footer-border d-lg-none"></div>
                <div className="footer-info text-start col-2">
                    <img src={logo} alt="" className="footer-logo"></img>
                    <div className="info-box mb-4">
                        <img src={email} alt=""></img>
                        <p className="d-inline fw-light">roytec2023@gmail.com</p>
                    </div>
                    <div className="info-box">
                        <img src={phone} alt=""></img>
                        <p className="d-inline fw-light">98-9018605742+</p>
                    </div>
                </div>
                <div className="footer-services col-1">
                    <h3 className="mb-5 mt-1">خدمات</h3>
                    <ul className="fw-ligher fs-4">
                        <li><a href="#">نرم افزار</a></li>
                        <li><a href="#">وبسایت</a></li>
                        <li><a href="#">شرکتی</a></li>
                        <li><a href="#">فروشگاهی</a></li>
                    </ul>
                </div>
                <div className="footer-price col-1">
                    <h3 className="mb-5 mt-1">تعرفه ها</h3>
                    <ul>
                        <li><a href="#">اقتصادی</a></li>
                        <li><a href="#">اختصاصی</a></li>
                    </ul>
                </div>
                <div className="footer-member col-1">
                    <h3 className="mb-5 mt-1">اعضا</h3>
                    <ul>
                        <li><a href="#">فرانت اند</a></li>
                        <li><a href="#">بک اند</a></li>
                        <li><a href="#">طراح UI/UX</a></li>
                    </ul>
                </div>
                <div className="footer-social col-3">
                    <h4 className="fs-1 mb-5">شبکه های اجتماعی</h4>
                    <p className="d-inline fs-4 me-5">همراه ما باشید</p>
                    <div className="social-links d-inline">
                        <img src={telegram} alt=""/>
                        <img src={instragram} alt=""/>
                        <img src={linkedin} alt=""/>
                    </div>
                     <div className="footer-btns">
                         <button className="me-2">تماس با ما</button>
                         <button className="ms-2">درباره ما</button>
                     </div>
                </div>
            </div>
            <div className="copy row p-4 ">
                <p className="lh-lg">تمامی حقوق مادی و معنوی این وبسایت متعلق به <span className="fw-bolder fs-2">رویتک</span> می باشد و هر گونه کپی برداری پیگرد قانونی دارد.</p>
            </div>
        </div>
    )
}

export default Footer