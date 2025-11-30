import React, { useContext, useState } from "react";
import Container from "./Container";
import { products } from "../utils/products";
import SingleProduct from "./SingleProduct";
import Button from "./Button";
import { Theme } from "../context/ThemeContext";

const ProductDisplay = ({ heading, color = "#F7F7F7" }) => {
  const {theme}=useContext(Theme)
  const bgColor = theme === "dark" ? "#1E1E1E" : color;
  const [category, setCategory] = useState("Chair");
  const categoryLabel = ["Chair", "Beds", "Sofa", "Lamp"];
  const [showProducts, setShowProducts] = useState(4);
  const showMoreProducts = () => {
    setShowProducts((prev) => prev + 4);
  };

  const displayProducts = products.filter(
    (product) => product.category == category
  );

  return (
    <div className="py-[50px] " style={{ backgroundColor: bgColor }}>
      <Container>
        <h2 className="font-['Poppins'] font-bold text-[25px] md:text-[42px] text-center leading-[63px] mb-[21px] dark:text-white">
          {heading}
        </h2>
        {/* category Tabs */}
        <div className="md:w-[348px] mx-auto rounded-[44px] bg-[#EEEEEE] flex justify-between items-center p-[14px]">
          {categoryLabel.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`font-['Poppins'] font-semibold text-[18px] cursor-pointer text-[#1E1E1E] ${
                item == category
                  ? "bg-white text-[#E58411] px-3 py-2 rounded-[20px]"
                  : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product ShowCase */}
        <div className="mt-[80px] mb-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[42px]">
          {displayProducts.slice(0, showProducts).map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>

        {/* view All Button */}
        {displayProducts.length > showProducts && (
          <div className="flex justify-center">
            <Button text={"View All"} size={"18px"} fn={showMoreProducts} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDisplay;
