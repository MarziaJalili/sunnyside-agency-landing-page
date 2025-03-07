import heroMobile from "../images/mobile/image-header.jpg";
import heroDesktop from "../images/desktop/image-header.jpg";
import downArrow from "../images/icon-arrow-down.svg"

const Hero = () => {
    const handleMouseEnter = (e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.display = "block"
            cursor.style.left = e.pageX + "px";
            cursor.style.top = e.pageY + "px";
        }
    };

    return (
        <section className="hero" onMouseMove={() => handleMouseEnter(event)} role="complementary">
            <picture>
                <source media="(min-width: 46em)" srcSet={heroDesktop} />
                <img src={heroMobile} alt="hero-image" />
            </picture>

            <img className="down-arrow" src={downArrow} alt="down-arrow" />
            <h1>
                WE ARE CREATIVES
            </h1>
            <div className="cursor"></div>
        </section>
    );
};

export default Hero;

