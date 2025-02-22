import graphicMobile from "../images/mobile/image-graphic-design.jpg"
import graphicDesktop from "../images/desktop/image-graphic-design.jpg"

import photographyMobile from "../images/mobile/image-photography.jpg"
import photographyDesktop from "../images/desktop/image-photography.jpg"

const Fields = () => {
  return (
    <section className="fields">
      <ul>
        <li>
          <picture>
            <source media="(min-width: 45em)" srcSet={
              graphicDesktop} />
            <img src={
              graphicMobile} alt="field-image" />
          </picture>

          <div className="field-details">
            <h2>Graphic Design</h2>

            <p>Great design makes you memorable. We deliver artwork that underscores your brand messages and captures potential client's attention.</p>
          </div>
        </li>

        <li>
          <picture>
            <source media="(min-width: 45em)" srcSet={
              photographyDesktop} />
            <img src={
              photographyMobile} alt="field-image" />
          </picture>

          <div className="field-details">
            <h2>Photography</h2>

            <p>Increase your creditibility by getting the most stunning, high-quality photos that improve your business images.</p>
          </div>
        </li>
        <li></li>
      </ul>
    </section>
  )
}

export default Fields