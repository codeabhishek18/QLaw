import AboutCards from '../../components/cards/AboutCards';
import './About.css'

const About = () =>
{
    return(
        <div className="about-container">
            <div className="about-header">
                <h1>Let’s Introduce Ourself</h1>
                <div className='hr'></div>
                <div className="about-content">
                    <h1>Criminal Lawyer</h1>
                    <p>Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint. Velit officia consequatduis
                        enim velit mollit Exercitation.
                    </p>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '54px', fontWeight: '600'}}>
                <p>Why Choose us ?</p>
            </div>
            <AboutCards/>
        </div>
    )
}

export default About;