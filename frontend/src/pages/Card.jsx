import React, { useContext, useEffect } from "react";
import { Mycontext } from "../context/contextpage";

const Card = ({ title, id, categeory, image, price }) => {
  const { getidonclick } = useContext(Mycontext);

  return (
    <div>
      <div class="p-4 ">
        <div
          onClick={() => {
            getidonclick(id);
          }}
          class="border-white min-w-[20rem] border rounded-2xl hover:scale-105 transition-all cursor-pointer p-4 w-full"
        >
          <a class="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full block"
              src={image}
            />
          </a>
          <div class="mt-4">
            <h3 class="text-white text-xs tracking-widest title-font mb-1">
              {categeory}
            </h3>
            <h2 class="text-gray-300 title-font text-lg font-medium">
              {title}
            </h2>
            <p class="mt-1">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
