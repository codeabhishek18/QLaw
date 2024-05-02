import FaqCards from "../cards/FaqCards";
import './FAQ.css'

const FAQ = () =>
{
    return(
        <div className="faq">
            <div className="faq-header"> 
                <h1>FAQ</h1>
                <p> Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint.
                </p>
            </div>
            <div>
                <div className="faq-content">
                    <h3>Do I need a personal injury report?</h3>
                    <p> Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequatduis
                        enim velit mollit Exer. Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                    </p>
                </div>
                <FaqCards/>
            </div>
        </div>
    )
}

export default FAQ;