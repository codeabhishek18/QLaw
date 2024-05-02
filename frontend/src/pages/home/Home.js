import Herosection from "../../components/hero/Herosection";
import Navbar from "../../components/navbar/Navbar";
import './Home.css'

const Home = () =>
{
    return(
        <div className="home">
            <Navbar/>
            <Herosection/>
        </div>
    )
}

export default Home;