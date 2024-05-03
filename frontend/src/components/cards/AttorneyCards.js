import Team1 from '../../assets/Team1.png'
import Team2 from '../../assets/Team2.png'
import Team3 from '../../assets/Team3.png'
import Team4 from '../../assets/Team4.png'
import Team5 from '../../assets/Team5.png'
import Team6 from '../../assets/Team6.png'
import './AttorneyCards.css'

export const AttorneysData = [
    {
        id: 1,
        image: Team1,
        name: 'Danial Def',
        cases: '301 Cases'
    },
    {
        id: 2,
        image: Team2,
        name: 'Sanfole',
        cases: '850 Cases'
    },
    {
        id: 3,
        image: Team3,
        name: 'Cesforila',
        cases: '470 Cases'
    },
    {
        id: 4,
        image: Team4,
        name: 'Colleen',
        cases: '180 Cases'
    },
    {
        id: 5,
        image: Team5,
        name: 'Haldone',
        cases: '212 Cases'
    },
    {
        id: 6,
        image: Team6,
        name: 'Nik Jeo',
        cases: '350 Cases'
    }
]

const AttorneyCards = () =>
{
    return(
        <div className="attorney-cards">
            {AttorneysData.map((attorney)=>
            (
                <div key={attorney.id} className={attorney.name === 'Sanfole' ? "highlight-card attorney-card" : "attorney-card"}>
                    <img  className={attorney.name === 'Sanfole' ? "highlight-card" : " "} src={attorney.image} alt="Profile"/>
                    <div className={attorney.name === 'Sanfole' ? "highlight-card card-content" : "card-content"}>
                        <p className={attorney.name === 'Sanfole' ? "highlight-card" : " "}>{attorney.name}</p>
                        <span className={attorney.name === 'Sanfole' ? "highlight-card" : " "}>{attorney.cases}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AttorneyCards;