import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { placeholders } from "../rowmaterial";
import { useDispatch, useSelector } from "react-redux";
import NavbarTop from "./NavbarTop";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchPlaceholder, setSearchPlaceholder] = useState(placeholders);
    const [indexPlaceholder, setPlaceholderIndex] = useState(0);
    const [showLogin, setShowLogin] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
           console.log('Function executed with input:', searchValue);
        }
    };

    const handleChange = (e) => setSearchValue(e.target.value);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setPlaceholderIndex((prev) =>
            prev === searchPlaceholder.length - 1 ? 0 : prev + 1
        )}, 2000);
        return () => clearInterval(intervalId);
    }, [searchPlaceholder]);

    useEffect(() => {
        document.addEventListener("keypress", handleKeyPress);
        return () => document.removeEventListener("keypress", handleKeyPress);
    }, [handleKeyPress]); 

//   console.log(searchValue, "searchvalue");

    return (
    <>
      <NavbarTop/>
      <div className="w-full h-15 top-0 flex content-center sticky z-10 bg-white border-2 max-w-[1440px] relative m-auto border-#e5e5e5">
        <div className="w-1/12 m-2.5">
          <Link to="/">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
              alt="Boat-logo"
              className="w-8/12"
            />
          </Link>
        </div>
        <div className="w-3/5 flex gap-10 m-3.5">
          <Link to="/products/airdrops" className="no-underline hover:font-bold"> Categories </Link>
          <Link className="no-underline hover:font-bold">boAt Truly Yours </Link>
          <Link className="no-underline hover:font-bold">Gift with boAt </Link>
          <Link className="no-underline hover:font-bold">Corporate Orders </Link>
          <Link className="no-underline hover:font-bold" title="More Info"> More </Link>
        </div>
        <div className="w-1/5 h-3/5 m-3.5 flex border-2 border-black mt-4 rounded-xl overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AvKIi7Hv_oh_hgxKrDqEfjfR5GYjDM_CeQ&usqp=CAU"
            alt="seach logo"
            className=" h-1/2 mt-1 rounded w-1/12 pl-1"
          />
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder={searchPlaceholder[indexPlaceholder]}
            className="w-4/5 pl-2 outline-none"
          />
        </div>
        <div className="w-1/12 flex gap-2.5 m-2.5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            alt="profile-logo"
            className="w-10 h-10 rounded cursor-pointer"
            onClick={() => setShowLogin(true)}
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/371/939/original/bag-icon-shopping-bag-icon-bag-logo-bag-illustration-free-vector.jpg"
            alt="cart-logo"
            className="-mt-1 w-12 h-12 rounded cursor-pointer"
          />
        </div>
        <div className="relative">
            <div className={`${showLogin ? 'w-[220px]  h-[80px]  shadow-2xl rounded  border border-black-1 absolute top-[60px] right-[10px] z-10 bg-white' : "hidden"} `}>
                <div className="flex justify-between w-11/12 font-bold m-auto mt-2 text-sm">
                    <h1>Hi boAthead</h1>
                    <p className="cursor-pointer" onClick={() => setShowLogin(false)}>✕</p>
                 </div>
                <button className="bg-black text-white w-11/12 p-1 rounded-xl font-bold mt-2.5"> Login </button>
             </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
