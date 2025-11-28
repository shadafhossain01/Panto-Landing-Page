import React from "react"; 
import shopBg from "../../assets/banner.png"
import ProductDisplay from "../../components/ProductDisplay";

const Shop = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `URL(${shopBg})` }}
        className="w-full relative top-0 h-[45vh] bg-center bg-no-repeat bg-cover"
      >
        <h2 className="text-white font-['Poppins'] text-center relative top-[50%] text-[42px]  font-bold">
          Shop Our Products
        </h2>
      </div>
        <ProductDisplay heading={"What's Your Choice"} color={"#fff"} />
    </>
  );
};

export default Shop;
