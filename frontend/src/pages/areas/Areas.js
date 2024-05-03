import AreaCards from "../../components/cards/AreaCards";
import ClientCards from "../../components/cards/ClientCards";
import './Areas.css'

const Areas = () =>
{
    return(
        <div className="areas">
            <AreaCards/>
            <ClientCards/>
        </div>
    )
}

export default Areas;