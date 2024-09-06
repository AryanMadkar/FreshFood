import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/contextpage";
import { IoCloseCircleOutline } from "react-icons/io5";
import CartCard from "./CartCard";

const Midend = () => {
  const { getid, blogdatacont } = useContext(Mycontext);

  const [data, setdata] = useState([]);
  const { cartdata } = useContext(Mycontext);
  return (
    <div className="text-white min-h-[100vh] flex flex-col bg-black p-[2rem] w-full">
      {cartdata.map((item, index) => {
        return (
          <CartCard
            key={index}
            title={item.title}
            description={item.description}
            id={item.id}
            image={item.image}
            price={item.cost_in_inr}
          />
        );
      })}
    </div>
  );
};

export default Midend;
