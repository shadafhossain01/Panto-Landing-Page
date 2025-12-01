import React, { useContext } from "react";
import { getImageUrl } from "../utils/getImageUrl";
import Rating from "./Rating";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { Carts } from "../context/CartContext";


const SingleProduct = ({product}) => {

  const { cartItem, setCartItem } = useContext(Carts);

  const handlePopup=(item)=>{
 Swal.fire({
   title: "Are you sure?",
   text: "You want to add this product to your cart!",
   icon: "warning",
   showCancelButton: true,
   confirmButtonColor: "#007E6E",
   cancelButtonColor: "#d33",
   confirmButtonText: "Yes!",
 }).then((result) => {
   if (result.isConfirmed) {
     const alreadyExist = cartItem.some(
       (cartProduct) => cartProduct.id === item.id
     );

     if (!alreadyExist) {
       Swal.fire({
         title: "Added Successfully!",
         icon: "success",
       });

       setCartItem((prev) => [...prev, item]);
     } else {
       Swal.fire({
         title: "Oops...",
         text: "Product Already Added to Cart",
         icon: "error",
       });
     }
   }
 });
  }
  return (
    <div className="mb-[25px] rounded-[20px] overflow-hidden">
      <div className="bg-[#FAFAFA] dark:bg-[#1a1a1a6b]">
        <img src={getImageUrl(product.imageUrl)} />
      </div>
      <div className="bg-white px-[21px] pt-[13px] pb-[27px] dark:bg-[#1A1A1A] ">
        <span className="text-[17px] text-[#8D8D8D] leading-[20px] font-serif">
          {product.category}
        </span>
        <h4 className="mt-[6px] mb-[9px] font-semibold font-['Poppins'] text-[22px] dark:text-white ">
          {product.name}
        </h4>
        <Rating rate={product.rating} />
        <div className="mt-[33px] flex justify-between items-center">
          <div className="flex">
            <span className="text-[15px] font-semibold font-['Poppins'] dark:text-white">
              $
            </span>
            <h4 className="text-[#0D1B39] dark:text-white text-[22px] font-['Poppins'] font-semibold leading-[18px] mt-[5px]">
              {product.price}
            </h4>
          </div>
          <div onClick={()=>handlePopup(product)}
          className="w-[48px] h-[48px] flex justify-center items-center rounded-full bg-[#0D1B39] cursor-pointer">
            <FaPlus className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
