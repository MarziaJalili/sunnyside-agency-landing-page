import heroMobile from "../images/mobile/image-header.jpg";
import heroDesktop from "../images/desktop/image-header.jpg";
import downArrow from "../images/icon-arrow-down.svg"

const Hero = () => {
    return (
        <section className="hero" role="complementary">
            <picture>
                <source media="(min-width: 46em)" srcSet={heroDesktop} />
                <img src={heroMobile} alt="hero-image" />
            </picture>

            <img className="down-arrow" src={downArrow} alt="down-arrow" />

            <h1>WE ARE CREATIVES</h1>
        </section>
    )
}

export default Hero