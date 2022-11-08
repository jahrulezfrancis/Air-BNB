import "./Index.css"
import Card1 from "../Images/card1.svg"
import Card2 from "../Images/card2.svg"
import Card3 from "../Images/card3.svg"
import Card4 from "../Images/card4.svg"
import Card5 from "../Images/card5.svg"
import Card6 from "../Images/card6.svg"
import Card7 from "../Images/card7.svg"
import Card8 from "../Images/card8.svg"
import Card9 from "../Images/card9.svg"



export default function TopSection() {
    return (
        <div className="topSection">
            <div className="card1">
                <img src={Card1} alt="card" />
            </div>
            <div className="card2">
                <img src={Card2} alt="card" />
                <img src={Card3} alt="card" />
            </div>
            <div className="card3">
                <img src={Card4} alt="card" />
                <img src={Card5} alt="card" />
            </div>
            <div className="card4">
                <img src={Card6} alt="card" />
                <img src={Card7} alt="card" />
            </div>
            <div className="card5">
                <img src={Card8} alt="card" />
                <img src={Card9} alt="card" />
            </div>
        </div>
    )
}