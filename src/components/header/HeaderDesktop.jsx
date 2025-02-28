import logoImage from "../../images/logo.svg";

import Navbar from "./Navbar";

const HeaderDesktop = () => {
    return (
        <div className="header-desktop">
            <a href="#">
                <img src={logoImage} alt="logo-image" />
            </a>

            <Navbar />
        </div>
    )
}

export default HeaderDesktop