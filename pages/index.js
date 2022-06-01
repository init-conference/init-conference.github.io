import About from "../components/About";
import Cfp from "../components/CallForPapers";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Sponsors from "../components/Sponsors";
import Subscribe from "../components/Subscribe";
import Venue from "../components/Venue";
import WhyAttend from "../components/WhyAttend";
import Social from "../components/Social";

export default function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <WhyAttend />
            <Cfp />
            <Venue />
            <Subscribe />
            <Footer />
            <Social />
        </>
    );
}
