import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const Navbar = () => {
  let {setToggel}=useContext(MyStore)
  return (
    <div className="p-4 flex items-center justify-between bg-black text-white broder broder-none rounded">
      <div>Log</div>
      <div className="flex gap-5 text-xl">
        <p
          onClick={() => {
            setToggel(true);
          }}> Home</p>
        <p
        onClick={()=>{
          setToggel(false)
        }}
        >Cart</p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
