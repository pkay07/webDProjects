import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav></Nav>

      <div className=" max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>

        <Features></Features>

        <Workflow></Workflow>

        <Price></Price>

        <Testimonials></Testimonials>

        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
