import Hero from '../../assets/Hero.png';
import Mail from '../../assets/Mail.png'
import'./Herosection.css';

const Herosection = () =>
{
    return(
        <div className="hero-container">
            <div className="hero-content">
                <div className="header">
                    <h1 style={{'font-weight': '500'}}>You don't have to</h1>
                    <h1>Fight them Alone.</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                <div className="input-email">
                    <img src={Mail} alt="icon"/>
                    <input placeholder="Enter your email address"/>
                    <button>Let's Talk</button>
                </div>
            </div>
            <div className="hero-image">
                <div className="background"></div>
                <img src={Hero} alt="heroimage"/>
            </div>
        </div>
    )
}

export default Herosection;