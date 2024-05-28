import React from "react";
import { auth } from "../utils/fireBseConfig";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user)
  return (
    <div className="flex justify-between w-full bg-gradient-to-b from-black z-10 absolute top-0">
      <img
        className="  w-56  h-24"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="png!!"
      />

      <div className="flex items-center gap-2 px-2">
        <h1 className="font-bold text-lg text-white  ">{user.displayName}</h1>
        {JSON.stringify(user) !== '{}' && <button className="border border-black bg-red-500  text-white text-bold rounded-lg bg-gradient-to-b  px-2 py-2  "
        onClick={() => {
          signOut(auth).then(() => {
            console.log("signed out successfully")
          }).catch((error) => {
            console.log("error while signing out")
          });
      }}>
        Sign Out
        </button>}
      
        </div>
    </div>
  );
};

export default Header;
