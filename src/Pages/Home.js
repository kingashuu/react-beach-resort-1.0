import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle="Deluxe Room starting at $300">
          <Link to="/rooms" className="btn-primary">
            our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
}

export default Home;
