import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages/home/Home"
import { Product } from "../Pages/Product"
import SingleCard from "../Pages/product/SingleCard"
import Navbar from "../Common/Navbar/Navbar"

const AllRoutes =()=>{
    return <>
    
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products/:name" element={<Product/>} />
        <Route  path="/products/single/:id" element ={<SingleCard/>}/>
    </Routes>
    </>
}


export {AllRoutes}