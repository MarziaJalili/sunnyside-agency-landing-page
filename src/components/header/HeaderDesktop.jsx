import logoImage from "../../images/logo.svg";

import Navbar from "./Navbar";

const HeaderDesktop = () => {
    return (
        <header className="header-desktop">
            <a href="#">
                <img src={logoImage} alt="logo-image" />
            </a>

            <Navbar />
        </header>
    )
}

export default HeaderDesktop