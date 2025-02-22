import transformMobile from "../images/mobile/image-transform.jpg"
import transformDesktop from "../images/desktop/image-transform.jpg"

import standOutMobile from "../images/mobile/image-stand-out.jpg"
import standOutDesktop from "../images/desktop/image-stand-out.jpg"

const Features = () => {
  return (
    <section className="features">
      <ul>
        <li>
          <picture>
            <source media="(min-width: 45em)" srcSet={transformDesktop} />
            <img src={transformMobile} alt="feature-image" />
          </picture>

          <div className="feature-details">
            <h2>Transform your brand</h2>

            <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>

            <a href="#">
              Learn More
            </a>
          </div>
        </li>
        <li>
          <picture>
            <source media="(min-width: 45em)" srcSet={standOutDesktop} />
            <img src={standOutMobile} alt="feature-image" />
          </picture>

          <div className="feature-details">
            <h2>Stand out to the right audience</h2>

            <p>Using a collaborative formula of designers, researches, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>

            <a href="#">
              Learn More
            </a>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Features