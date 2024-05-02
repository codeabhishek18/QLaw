import Logo from '../../assets/Logo.png'
import './Navbar.css'

const Navbar = () =>
{
    return(
        <div class="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
                <span>IGSTUDIO</span>
            </div>
            <ul>
                <li>Home</li>
                <li>Attorneys</li>
                <li>Practice Areas</li>
                <li>About Us</li>
            </ul>
            <span className="contact">Contact Now</span>
        </div>
    )
}

export default Navbar