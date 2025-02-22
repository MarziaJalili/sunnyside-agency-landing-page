// gallery images
import milkMobile from "../images/mobile/image-gallery-milkbottles.jpg"
import milkDesktop from "../images/desktop/image-gallery-milkbottles.jpg"

import orangeMobile from "../images/mobile/image-gallery-orange.jpg"
import orangeDesktop from "../images/desktop/image-gallery-orange.jpg"

import coneDesktop from "../images/desktop/image-gallery-cone.jpg"
import coneMobile from "../images/mobile/image-gallery-cone.jpg"

import sugarMobile from "../images/mobile/image-gallery-sugar-cubes.jpg"
import sugarDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";

// logo 
import LogoImage from "./logoImage";

// social icons
import facebookIcon from "../images/icon-facebook.svg"
import instagramIcon from "../images/icon-instagram.svg"
import twitterIcon from "../images/icon-twitter.svg"
import pinterestIcon from "../images/icon-pinterest.svg"

import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="image-gallery">
        <li>
          <picture>
            <source media="(min-width: 45em)" srcSet={
              milkDesktop} />
            <img src={
              milkMobile} alt="gallery-image" />
          </picture>
        </li>

        <li>
          <picture>
            <source media="(min-width: 45em)" srcSet={
              orangeDesktop} />
            <img src={
              orangeMobile} alt="gallery-image" />
          </picture>
        </li>

        <li>
          <picture>
            <source media="(min-width: 45em)" srcSet={
              coneDesktop} />
            <img src={
              coneMobile} alt="gallery-image" />
          </picture>
        </li>

        <li>
          <picture>
            <source media="(min-width: 45em)" srcSet={
              sugarDesktop} />
            <img src={
              sugarMobile} alt="gallery-image" />
          </picture>
        </li>
      </ul>

      {/* man, the above section could've been a separate component, right? */}

      <section className="navigation">
        <LogoImage />
        <nav>
          <ul className="company-work">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>

          {/* <ul className="social-media">
            <li>
              <a href="#">
                <img src={facebookIcon} alt="social-media-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagramIcon} alt="social-media-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterIcon} alt="social-media-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pinterestIcon} alt="social-media-icon" />
              </a>
            </li>
          </ul> */}
          <SocialIcons />
        </nav>
      </section>
    </footer>
  )
}

export default Footer