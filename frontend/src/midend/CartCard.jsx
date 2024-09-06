import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const CartCard = ({ title, description, id, image, price }) => {
  return (
    <div className="flex flex-row my-2 gap-2 items-center p-2 justify-between min-h-[5rem] border-2 border-white rounded-2xl w-full">
      <div className="mx-2">
        <IoCloseCircleOutline className="text-[3rem] hover:text-black hover:scale-105 transition-all cursor-pointer" />
      </div>
      <div className="flex flex-col items-start justify-between w-full">
        <div className="text-[2rem]">{title}</div>
        <div>{description}</div>
        <div className="text-green-500">{price}</div>
      </div>
      <div className="">
        <img
          alt="ecommerce"
          class=" h-auto w-[23vw] rounded-2xl block"
          src={image}
        />
      </div>
    </div>
  );
};

export default CartCard;
