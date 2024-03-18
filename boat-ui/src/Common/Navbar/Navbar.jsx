import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { placeholders } from "../rowmaterial";


const Navbar = () => {

    const [searchPlaceholder, setSearchPlaceholder]= useState(placeholders);
    const [indexPlaceholder, setPlaceholderIndex]= useState(0);

    useEffect(()=>{

        const setPlaceholder =setInterval(()=>{
            setPlaceholderIndex((prev)=> prev == searchPlaceholder.length-1 ? 0 : prev+1)
        },2000)

        return ()=> clearInterval(setPlaceholder)
    },[indexPlaceholder]);
    
    return <div className="w-full h-15 top-0 flex content-center sticky z-10 bg-white border-2 border-#e5e5e5">
        <div className="w-1/12 m-2.5">
            <Link to="/">
                <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" alt="Boat-logo" className="w-8/12" />
            </Link>
        </div>
        <div className="w-3/5 flex gap-10 m-3.5">
            <Link to="/products/airdrops" className="no-underline hover:font-bold">Categories</Link>
            <Link className="no-underline hover:font-bold">boAt Truly Yours</Link>
            <Link className="no-underline hover:font-bold">Gift with boAt</Link>
            <Link className="no-underline hover:font-bold">Corporate Orders</Link>
            <Link className="no-underline hover:font-bold" title="More Info">More</Link>
        </div>
        <div className="w-1/5 h-3/5 m-3.5 flex border-2 border-black mt-4 rounded-xl overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AvKIi7Hv_oh_hgxKrDqEfjfR5GYjDM_CeQ&usqp=CAU" alt="seach logo"  className=" h-1/2 mt-1.5 rounded w-1/12 pl-1"/>
            <input type="text"  placeholder= {searchPlaceholder[indexPlaceholder]}  className=" w-4/5 pl-2 outline-none"/>
        </div>
        <div  className="w-1/12 flex gap-2.5 m-2.5">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="profile-logo" className="w-10 h-10 rounded cursor-pointer" />
            <img src="https://static.vecteezy.com/system/resources/previews/007/371/939/original/bag-icon-shopping-bag-icon-bag-logo-bag-illustration-free-vector.jpg" alt="cart-logo" className="-mt-1 w-12 h-12 rounded cursor-pointer" />
        </div>
    </div>
}

export { Navbar }