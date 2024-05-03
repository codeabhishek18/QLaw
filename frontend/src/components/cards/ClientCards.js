import Client1 from "../../assets/Client1.png"
import Client2 from "../../assets/Client2.png"  
import Client3 from "../../assets/Client3.png"  
import Left from "../../assets/Left.png"
import Right from "../../assets/Right.png"
import { useState } from 'react'
import './ClientCards.css'

export const ClientData = [
    {
        id: 1,
        dp: Client1,
        name: 'Jane Copper',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
    {
        id: 2,
        dp: Client2,
        name: 'Devon Lane',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
    {
        id: 3,
        dp: Client3,
        name: 'Robert Fox',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
    {
        id: 1,
        dp: Client1,
        name: 'Jane Copper',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
    {
        id: 2,
        dp: Client2,
        name: 'Devon Lane',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
    {
        id: 3,
        dp: Client3,
        name: 'Robert Fox',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
    {
        id: 1,
        dp: Client1,
        name: 'Jane Copper',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
    {
        id: 2,
        dp: Client2,
        name: 'Devon Lane',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
    {
        id: 3,
        dp: Client3,
        name: 'Robert Fox',
        company: 'CEO of Hunt',
        review: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia'
    },
] 

const ClientCards = () =>
{
    const [currentIndex, setCurrentIndex] = useState(0);

    const gotoPrev = () =>
    {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? prevIndex  : prevIndex - 1);
    }

    const gotoNext = () =>
    {
        setCurrentIndex((prevIndex) => prevIndex === ClientData.length-1  ? prevIndex : prevIndex + 1);
    }

    return(
        <div className="cards-container">
            <div className="cards--header">
                <h1>What says our happy Clients</h1>
                <div className="navigation">
                    <button onClick={gotoPrev}><img className="left" src={Left} alt="left-icon"/></button>
                    <button onClick={gotoNext}><img className="right"  src={Right} alt="right-icon"/></button>
                </div>
            </div>
            <div className="cards" style={{ transform: `translateX(-${currentIndex * 400}px)` }}>
            {ClientData.map((client)=>
            (
                <div key={client.id} className="slide">
                     <img src={client.dp} alt="DP"/>
                    <div className="card-head">
                        <h3>{client.name}</h3>
                        <p>{client.company}</p>
                    </div>
                    <p>{client.review}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ClientCards;