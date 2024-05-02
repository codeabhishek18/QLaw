import './Form.css';

const Form = () =>
{
    return(
        <div className="form">
            <h1>Subscribe Our Newsletter</h1>
            <div className="form-content">
                <input className="name" placeholder='Name : '/>
                <input placeholder='Enter your mail'/>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Form;