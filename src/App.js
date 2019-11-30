import React from "react";
import "./App.css";
import {Header, Navbar} from "./header";
import Footer from "./footer";
import { SpecialProcedures, Slider, PopularDestinations, Reviews, BrandZone, HowCan, FeaturedDestination} from "./components";

function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <Slider />
      <SpecialProcedures />
      <PopularDestinations />
      <Reviews/>
      <BrandZone/>
      <HowCan/>
      <FeaturedDestination/>
      <Footer />
    </div>
  );
}

export default App;
