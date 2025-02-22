import emilyImage from "../images/image-emily.jpg"
import thomasImage from "../images/image-thomas.jpg"
import jennieImage from "../images/image-jennie.jpg";

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>
                CLIENT TESTIMONIALS
            </h2>
            <ul>
                <li>
                    <img src={emilyImage} alt="emily-image" />
                    <p>
                        We put our trust in Sunnyside and they deliverd, making sure our needs were met and deadlines always hit.
                    </p>

                    <strong>
                        Emily R.
                        <span>Marketing Director</span>
                    </strong>
                </li>

                <li>
                    <img src={thomasImage} alt="thomas-image" />

                    <p>
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a stisfying and enjoyable experience.
                    </p>

                    <strong>Thomas S.<span>Chief Operating Officer</span></strong>
                </li>

                <li>
                    <img src={jennieImage} alt="jennie-image" />

                    <p>
                        Incredidable end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <strong>
                        Jennie F.
                        <span>Business Owener</span>
                    </strong>
                </li>
            </ul >
        </section >
    )
}

export default Testimonials