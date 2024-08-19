import Hero from "./components/Hero/Hero";
import Nav from "./components/Navbar/Nav";
import Menus from "./components/Menu/Menus";
import Banner from "./components/Banners/Banner";
import Banner2 from "./components/Banners/Banner2";
import Banner3 from "./components/Banners/Banner3";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <main className=" overflow-x-hidden">
        <Nav />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
};

export default App;
