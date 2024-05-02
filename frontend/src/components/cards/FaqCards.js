import Plus from '../../assets/Plus.png'
import './FaqCards.css'

export const faqData = [
    {
        id: 1,
        que: 'How much is my case worth?'
    },
    {
        id: 2,
        que: 'What should I do right after car accidect'
    },
    {
        id: 3,
        que: 'How much is my case worth?'
    }
] 

const FaqCards = () =>
{
    return(
        <div>
            {faqData.map((data) =>
            (
                <div key={data.id}>
                    <div className="hr"></div>
                    <div className="faq-data">
                        <p>{data.que}</p>
                        <img src={Plus} alt="image"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FaqCards;