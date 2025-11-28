import React from "react";
import Hero from "./Hero";
import Whyus from "./Whyus";
import ProductDisplay from "../../components/ProductDisplay";

const Home = () => {
  return (
    <>
      <Hero />
      <Whyus />
      <ProductDisplay heading={"Best Selling Product"} />
    </>
  );
};

export default Home;
