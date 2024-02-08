import React from "react"
import "./common-questions.css"
import plusImg from "../Assets/Plus-icon 2.png"

const Question = ({ question , answer ,num })=>{
    const SelectedQuestion = event=>{
        const children = event.currentTarget.children
        console.log(children[0].children[1])
        if (children[1].offsetHeight != 2){
            children[1].style.height='0'
            children[1].style.padding='0'
            children[0].children[1].classList.remove("rotation")
        }else{
            children[1].style.height='auto'
            children[1].style.padding='20px'
            children[0].children[1].classList.add("rotation")
        }
    }
    return(
        <div onClick={SelectedQuestion} className="question-box container justify-content-center my-3">
                <div id={`question-${num}`} className="row justify-content-between align-items-center question bg-white py-3 px-3 shadow">
                    <p className="question-p lh-lg fw-bold col-10 ">{question}</p>
                    <img src={plusImg} alt="" className="col-1"></img>
                </div>
                <div className="row answer border bg-white">
                    <p className="fs-5 leady lh-lg">{answer}</p>
                </div>
        </div>
    )
}

const CommonQuestions = ()=>{
    return(
        <div className="container mt-5">
            <div className="row question-header text-center">
                <h2 className="h1">پرسش های متداول از رویتک</h2>
                <p className="fs-4 mt-3">سوالات و پاسخ هایی که ممکن است به شما در پیدا کردن جواب پرسش هایتان کمک کنند</p>
            </div>
            <div className="row question-boxes mt-5">
                <Question 
                question={'منظور از پشتیبانی سایت چیست و شامل چه چیز هایی می شود؟'}
                answer={'رابط کاربری یا UI در واقع ظاهر سایت شماست. هرچیزی که در سایت نمایش داده می شود و استایل خاصی دارد  رابط کاربری است. اما تجربه کاربری یا UX در واقع جنبه های کاربردی و انتظارات افراد در زمان استفاده از محصول است. در نهایت احساسات شما از استفاده آن محصول گویای رضایت یا نارضایتی از آن محصول است که به آن تجربه کاربری می گویند.'}
                num={1}
                />
                <Question 
                question={'تفاوت طراحی آماده و اختصاصی چیست؟'}
                answer={'رابط کاربری یا UI در واقع ظاهر سایت شماست. هرچیزی که در سایت نمایش داده می شود و استایل خاصی دارد  رابط کاربری است. اما تجربه کاربری یا UX در واقع جنبه های کاربردی و انتظارات افراد در زمان استفاده از محصول است. در نهایت احساسات شما از استفاده آن محصول گویای رضایت یا نارضایتی از آن محصول است که به آن تجربه کاربری می گویند.'}
                num={2}
                />
                <Question 
                question={'اگر قالب یا طرح آماده داشته باشیم از هزینه های طراحی کم می شود؟'}
                answer={'رابط کاربری یا UI در واقع ظاهر سایت شماست. هرچیزی که در سایت نمایش داده می شود و استایل خاصی دارد  رابط کاربری است. اما تجربه کاربری یا UX در واقع جنبه های کاربردی و انتظارات افراد در زمان استفاده از محصول است. در نهایت احساسات شما از استفاده آن محصول گویای رضایت یا نارضایتی از آن محصول است که به آن تجربه کاربری می گویند.'}
                num={3}
                />
                <Question 
                question={'رابط کاربری و تجربه کاربری (UI/UX) چیست و چه کمکی می کند؟'}
                answer={'رابط کاربری یا UI در واقع ظاهر سایت شماست. هرچیزی که در سایت نمایش داده می شود و استایل خاصی دارد  رابط کاربری است. اما تجربه کاربری یا UX در واقع جنبه های کاربردی و انتظارات افراد در زمان استفاده از محصول است. در نهایت احساسات شما از استفاده آن محصول گویای رضایت یا نارضایتی از آن محصول است که به آن تجربه کاربری می گویند.'}
                num={4}
                />
                <Question 
                question={'رویتک از وردپرس برای طراحی سایت استفاده می کند؟'}
                answer={'رابط کاربری یا UI در واقع ظاهر سایت شماست. هرچیزی که در سایت نمایش داده می شود و استایل خاصی دارد  رابط کاربری است. اما تجربه کاربری یا UX در واقع جنبه های کاربردی و انتظارات افراد در زمان استفاده از محصول است. در نهایت احساسات شما از استفاده آن محصول گویای رضایت یا نارضایتی از آن محصول است که به آن تجربه کاربری می گویند.'}
                num={5}
                />
            </div>
        </div>
    )
}

export default CommonQuestions