import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages/home/Home"
import { Navbar } from "../Common/Navbar/Navbar"
import { Product } from "../Pages/Product"
import SingleCard from "../Pages/product/SingleCard"


const AllRoutes =()=>{
    return <>
    <div className="text-xs bg-sky-50 p-2.5">
        Playback: 150 Hrs | Sound: Sublime | Price: 
        <span className="font-bold"> ₹1199 </span>
        <span className="line-through"> ₹1499</span>
        | Shop <span className="font-bold">Rockerz Trinity </span>using: <span className="font-bold">TAKE300</span>
    </div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products/:name" element={<Product/>} />
        <Route  path="/products/single/:id" element ={<SingleCard/>}/>
    </Routes>
    </>
}


export {AllRoutes}