import React from "react"
import "./price.css"
import tick from "../Assets/tick.png"
import threeStars from "../Assets/three stars.png"
import FiveStars from "../Assets/five stars.png"

const price = () => {
    return (
        <div id="price" className="price-main container-lg">
            <div className="row price-introduction text-center">
                <h1 className="h1">پلن های خودتان را انتخاب کنید!</h1>
                <p className="fs-2">با توجه به نیاز خود می توانید از بین تعرفه ها و پلن های ما<br></br>
                    انتخاب خودتان را به درستی انجام دهید.</p>
            </div>
            <div className="row">
                <div className="price-title col-lg-12 my-5">
                    <p className="align-items-center col-lg-6 col-lg-offset-3 fw-bold text-center rounded-5  fs-1 p-4">تعرفه فروشگاه های اینترنتی</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div className="mx-5">
                        <div className="card col-lg-5 col-lg-offset-1">
                            <div className="supportt"></div>
                            <div className="text-center my-5">
                                <h2 className="h2">اختصاصی</h2>
                                <p className="price-text m-5 fs-4">اگر به دنبال فروشگاه اینترنتی با سطح <br></br>
                                امکاناتی بهتر از پلن اقتصادی رویتک هستید،<br></br>
                                پیشنهاد ما به شما پلن اختصاصی با امکانات<br></br>
                                بیشتر است</p>
                            </div>
                            <div className="text-center">
                                <p>شروع از </p>
                                <p className="fs-1 fw-bold">11 ملیون تومان</p>
                            </div>
                            <ul className="mx-4 my-5">
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>طراحی اختصاصی</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>قابلیت سفارشی سازی</p>
                                        <img src={FiveStars} alt="" className="stars"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>سرعت سایت</p>
                                        <img src={FiveStars} alt="" className="stars"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>آموزش پنل کاربری</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>خدمات پشتیبانی تا 2 سال</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>میزبانی رایگان</p>
                                        <p>2 گیگابایت</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>زمان اجرا 20 تا 25 روز </p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>پرداخت در دو مرحله</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>اطلاعات بیشتر</p>
                                        <p>تماس بگیرید</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="card col-lg-5 col-lg-offset-1">
                            <div className="text-center my-5">
                                <h2 className="h2">اقتصادی</h2>
                                <p className="price-text m-5 fs-4">اگر به دنبال فروشگاه اینترنتی با قیمت <br></br>مناسب و اقتصادی هستید، ما به شما<br></br>
                                    پلن اقتصادی رویتک را پیشنهاد می کنیم.</p>
                            </div>
                            <div className="text-center">
                                <p>شروع از </p>
                                <p className="fs-1 fw-bold">8 ملیون تومان</p>
                            </div>
                            <ul className="mx-4 my-5">
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>طراحی آماده</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>قابلیت سفارشی سازی</p>
                                        <img src={threeStars} alt="" className="stars"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>سرعت سایت</p>
                                        <img src={threeStars} alt="" className="stars"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>آموزش پنل کاربری</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>خدمات پشتیبانی تا 1 سال</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>میزبانی رایگان</p>
                                        <p>1 گیگابایت</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>زمان اجرا 15 تا 20 روز </p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>پرداخت در دو مرحله</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>اطلاعات بیشتر</p>
                                        <p>تماس بگیرید</p>
                                    </div>
                                </li>
                            </ul>
                        </div>



                    </div>
                </div>
            </div>
            <div className="row">
                <div className="price-title col-lg-12 my-5">
                    <p className="align-items-center col-lg-6 col-lg-offset-3 fw-bold text-center rounded-5  fs-1 p-4">تعرفه فروشگاه های اینترنتی</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div className="mx-5">
                        <div className="card col-lg-5 col-lg-offset-1">
                            <div className="text-center my-5">
                                <h2 className="h2">اختصاصی</h2>
                                <p className="price-text m-5 fs-4">اگر به دنبال وبسایت شرکتی با سطح امکاناتی<br></br>
                                بهتر از پلن اقتصادی رویتک هستید، پیشنهاد <br></br>
                                ما به شما پلن اختصاصی با امکانات بیشتر <br></br>
                                است.</p>
                            </div>
                            <div className="text-center">
                                <p>شروع از </p>
                                <p className="fs-1 fw-bold">11 ملیون تومان</p>
                            </div>
                            <ul className="mx-4 my-5">
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>طراحی اختصاصی</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>قابلیت سفارشی سازی</p>
                                        <img src={FiveStars} alt="" className="stars"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>سرعت سایت</p>
                                        <img src={FiveStars} alt="" className="stars"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>آموزش پنل کاربری</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>خدمات پشتیبانی تا 2 سال</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>میزبانی رایگان</p>
                                        <p>5 گیگابایت</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>زمان اجرا 15 روز </p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>پرداخت در دو مرحله</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>اطلاعات بیشتر</p>
                                        <p>تماس بگیرید</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="card col-lg-5 col-lg-offset-1">
                            <div className="text-center my-5">
                                <h2 className="h2">اقتصادی</h2>
                                <p className="price-text m-5 fs-4">اگر به دنبال وبسایت برای معرفی و <br></br>
                                تبلیغات شرکتی خود با قیمت مناسب و <br></br>
                                اقتصادی هستید، ما به شما پلن اقتصادی <br></br>
                                رویتک را پیشنهاد می کنیم.</p>
                            </div>
                            <div className="text-center">
                                <p>شروع از </p>
                                <p className="fs-1 fw-bold">8 ملیون تومان</p>
                            </div>
                            <ul className="mx-4 my-5">
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>طراحی آماده</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>قابلیت سفارشی سازی</p>
                                        <img src={threeStars} alt="" className="stars"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>سرعت سایت</p>
                                        <img src={threeStars} alt="" className="stars"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>آموزش پنل کاربری</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>خدمات پشتیبانی تا 1 سال</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>میزبانی رایگان</p>
                                        <p>2 گیگابایت</p>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>زمان اجرا 10 روز </p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>پرداخت در دو مرحله</p>
                                        <img src={tick} alt="" className="tick"/>
                                    </div>
                                </li>
                                <li className="">
                                    <div className="d-flex justify-content-between">
                                        <p>اطلاعات بیشتر</p>
                                        <p>تماس بگیرید</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default price