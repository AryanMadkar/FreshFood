import React, { useContext, useState } from "react";
import Card from "../pages/Card";
import { Mycontext } from "../context/contextpage";

const Blogitem = () => {
  const { getid,blogdatacont,getidonclick } = useContext(Mycontext);
  const [filter, setFilter] = useState("All");
  return (
    <div className="py-[1rem]  bg-black w-[90%] min-h-[80vh]  flex items-start px-2 justify-around flex-wrap  ml-[3rem] rounded-2xl">
      <div className="min-w-[40vw] gap-2  min-h-[3rem] flex items-center justify-around ">
        <button
          onClick={() => {
            setFilter("All");
          }}
          className={
            filter === "All"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("Italian");
          }}
          className={
            filter === "Italian"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Italian
        </button>
        <button
          onClick={() => {
            setFilter("Japanese");
          }}
          className={
            filter === "Japanese"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Japanese
        </button>
        <button
          onClick={() => {
            setFilter("Mexican");
          }}
          className={
            filter === "Mexican"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Mexican
        </button>
        <button
          onClick={() => {
            setFilter("Middle Eastern");
          }}
          className={
            filter === "Middle Eastern"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Middle Eastern
        </button>
        <button
          onClick={() => {
            setFilter("American");
          }}
          className={
            filter === "American"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          American
        </button>
        <button
          onClick={() => {
            setFilter("Thai");
          }}
          className={
            filter === "Thai"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Thai
        </button>
        <button
          onClick={() => {
            setFilter("Russian");
          }}
          className={
            filter === "Russian"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Russian
        </button>
        <button
          onClick={() => {
            setFilter("Vietnamese");
          }}
          className={
            filter === "Vietnamese"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Vietnamese
        </button>
        <button
          onClick={() => {
            setFilter("Spanish");
          }}
          className={
            filter === "Spanish"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Spanish
        </button>
        <button
          onClick={() => {
            setFilter("Peruvian");
          }}
          className={
            filter === "Peruvian"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Peruvian
        </button>
        <button
          onClick={() => {
            setFilter("Chinese");
          }}
          className={
            filter === "Chinese"
              ? `p-[0.5rem] border-2 border-emerald-700 bg-white text-emerald-700 rounded-3xl hover:scale-105`
              : `p-[0.5rem] border-2 border-white text-white bg-black rounded-3xl hover:scale-105`
          }
        >
          Chinese
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 ">
        {blogdatacont
          .filter((item) =>
            filter === "All" ? true : item.category === filter
          )
          .map((item, index) => {
            return (
              <Card
              
                id={item.id}
                key={index}
                title={item.title}
                description={item.description}
                categeory={item.category}
                image={item.image}
                price={item.cost_in_inr}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Blogitem;
