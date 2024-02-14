import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages/home/Home"
import { Navbar } from "../Common/Navbar/Navbar"
import { Product } from "../Pages/Product"

const AllRoutes =()=>{
    return <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products/:name" element={<Product/>} />
    </Routes>
    </>
}

export {AllRoutes}