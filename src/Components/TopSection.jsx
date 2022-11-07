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
            <div>
                <img src={Card1} alt="" />
            </div>
            <div>
                <img src={Card2} alt="" />
                <img src={Card3} alt="" />
            </div>
            <div>
                <img src={Card4} alt="" />
                <img src={Card5} alt="" />
            </div>
            <div>
                <img src={Card6} alt="" />
                <img src={Card7} alt="" />
            </div>
            <div>
                <img src={Card8} alt="" />
                <img src={Card9} alt="" />
            </div>
        </div>
    )
}