import logoImage from "../../images/logo.svg";
import hamburgerMenu from "../../images/icon-hamburger.svg";

import Navbar from "./Navbar";
import { useState } from "react";

const HeaderMobile = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        if (showNavbar) {
            document.querySelector(".header-mobile .nav")
                .classList.add("fade-nav")
            setTimeout(() => {
                setShowNavbar(false)
            }, 1000)
        } else {
            setShowNavbar(true)
        }
    }

    return (
        <div className="header-mobile">
            <a href="#">
                <img src={logoImage} alt="logo-image" />
            </a>

            <button onClick={toggleNavbar}>
                <img src={hamburgerMenu} alt="nav-menu" />
            </button>

            {showNavbar ? <Navbar /> : null}
        </div>
    )
}

export default HeaderMobile