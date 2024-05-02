import './Footer.css'
import Logo from '../../assets/Logo.png'
import Instagram from '../../assets/Instagram.png'
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Pinterest from '../../assets/Pinterest.png'

const Footer = () => 
{
    return(
        <div className="footer">
            <div class="footer-start">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                    <span>IGSTUDIO</span>
                </div>
                <ul className="footer-ul">
                    <li>Home</li>
                    <li>Attorneys</li>
                    <li>Practice Areas</li>
                    <li>About Us</li>
                </ul>
                <div className="social-icons">
                    <img className="icons" src={Instagram} alt="icon"/>
                    <img className="icons" src={Facebook} alt="icon"/>
                    <img className="icons" src={Twitter} alt="icon"/>
                    <img className="icons" src={Pinterest} alt="icon"/>
                </div>
            </div>
            <div className="footer-terms">
                <span>© 2020 Acme. All right reserved</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    )
}

export default Footer;