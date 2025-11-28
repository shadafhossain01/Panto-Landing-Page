import React from "react"; 
import shopBg from "../../assets/banner.png"

const Shop = () => {
  return (
    <div
      style={{ backgroundImage: `URL(${shopBg})` }}
      className="w-full absolute top-0 h-[40vh] bg-center bg-no-repeat bg-cover"
    >
      <h2 className="text-white font-['Poppins'] text-center relative top-[60%] text-[42px]  font-bold">Shop Our Products</h2>
    </div>
  );
};

export default Shop;
