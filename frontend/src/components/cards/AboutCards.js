import Gift from '../../assets/Gift.png';
import './AboutCards.css'

export const CardData = [
    {
        id: 1,
        title: '98% Success Rate',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    },
    {
        id: 2,
        title: '100% Success Rate',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    },
    {
        id: 3,
        title: '100% Success Rate',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.'
    }
]  

const AboutCards = () =>
{
    return(
        <div className="cards-header">
            {CardData.map((card)=>
            (
                <div key={card.id} className={card.id%2 === 0 ? "secondary card" : "card"}>
                    <img src={Gift} alt="icon"/>
                    <h1>{card.title}</h1>
                    <p>{card.content}</p>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default AboutCards;