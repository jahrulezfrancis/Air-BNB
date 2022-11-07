import HeaderLogo from "../Images/airbnb-logo.svg";
import "./nav.css"


export default function Navigation() {
    return (
        <div className="navigation-bar">
            <img src={HeaderLogo} alt='header logo' />
        </div>
    )
}