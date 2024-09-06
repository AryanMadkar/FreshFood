import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Signin from "./Signin";
import Signup from "./Signup";

const Authentication = ({ openauth, setOpenauth }) => {
  const [Login, setLogin] = useState(true);
  return (
    <div
      open={openauth}
      className="flex absolute top-0 left-0 z-50 min-h-[89.5vh] items-center justify-center w-full bg-black"
      onClose={() => setOpenauth(false)}
    >
      <div className="min-h-[89vh]  flex items-center justify-end relative w-1/2">
        <img
          src="/back1.jpg"
          className="h-auto w-full ml-2 absolute bottom-0 left-0 rounded-2xl"
        />
        <img
          src="https://cdn.pixabay.com/photo/2024/01/31/19/25/sunset-8544672_1280.jpg"
          className="h-[50vh] w-auto ml-2 absolute top-0 right-20 -rotate-[70deg] rounded-2xl"
        />
        <img
          src="https://images.unsplash.com/photo-1724954110842-ffc8c408c024?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-[40vh] -rotate-[10deg] w-auto ml-2 absolute left-0 top-0  rounded-2xl"
        />
        <img
          src="https://e0.pxfuel.com/wallpapers/814/166/desktop-wallpaper-cool-background-3d-cool-material-3d-thumbnail.jpg"
          className="h-[50vh] -right-20 bottom-0 w-auto absolute ml-2 rounded-2xl"
        />
      </div>
      <div className="min-h-[89vh] w-1/2  flex items-start justify-center">
        {Login ? <Signin login={Login} setLogin={setLogin} /> : <Signup />}
        <div class="flex items-center justify-center m-2">
          <button
            onClick={() => {
              setOpenauth(false);
            }}
          >
            <IoCloseCircleOutline className="text-[2rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
