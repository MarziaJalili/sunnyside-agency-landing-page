import {
    Features,
    Fields,
    Footer,
    Hero,
    Testimonials,
    HeaderMobile,
    HeaderDesktop
} from "./components/export.js";

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