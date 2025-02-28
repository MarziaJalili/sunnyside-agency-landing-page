import Features from "./components/Features";
import Fields from "./components/Fields";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import HeaderMobile from "./components/header/HeaderMobile";
import HeaderDesktop from "./components/header/HeaderDesktop";


const App = () => {
    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
            <Hero />
            <main>
                <Features />
                <Fields />
                <Testimonials />
                <Footer />
            </main>
        </>
    )
}

export default App