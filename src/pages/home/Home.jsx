import React from "react";
import Hero from "./Hero";
import Whyus from "./Whyus";
import ProductDisplay from "../../components/ProductDisplay";
import Content from "../../components/Content";

const Home = () => {
  return (
    <>
      <Hero />
      <Whyus />
      <ProductDisplay heading={"Best Selling Product"} />
      <Content/>
    </>
  );
};

export default Home;
