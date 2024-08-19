import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import News from "./components/News";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Analytics></Analytics>
      <News></News>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
};

export default App;
