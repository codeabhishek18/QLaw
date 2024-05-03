import './AreaCards.css'
import Law1 from '../../assets/BusinessLaw1.png'
import Law2 from '../../assets/PartnershipLaw.png'
import Law3 from '../../assets/RealEstateLaw.png'
import Law4 from '../../assets/BusinessLaw2.png'
import Law5 from '../../assets/LandlordDispute.png'
import Law6 from '../../assets/ElderAbuse.png'

const AreaCards = () =>
{
    return(
        <div className="area-cards">
            <h1>Area of Practices</h1>
            <div className="levels">
                <div className="large">
                    <img src={Law1} alt="laws"/>
                    <p>BUSINESS LAW</p>
                </div>
                <div className="small">
                    <img src={Law2} alt="laws"/>
                    <p>Partnership Law</p>
                </div>
            </div>
            <div className="levels">
                <div className="small">
                    <img src={Law3} alt="laws"/>
                    <p>REAL ESTATE LAW</p>
                </div>
                <div className="large">
                    <img src={Law4} alt="laws"/>
                    <p>BUSINESS Law</p>
                </div>
            </div>
            <div className="levels">
                <div className="large">
                    <img src={Law5} alt="laws"/>
                    <p>LANDLORD DISPUTES</p>
                </div>
                <div className="small">
                    <img src={Law6} alt="laws"/>
                    <p>ELDER ABUSE</p>
                </div>
            </div>
        </div>
    )
}

export default AreaCards;