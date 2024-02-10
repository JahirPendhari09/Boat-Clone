import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages/home/Home"
import { Navbar } from "../Common/Navbar/Navbar"
import { InputBox } from "../Pages/InputBox"
import { Product } from "../Pages/Product"

const AllRoutes =()=>{
    return <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<Product/>} />
    </Routes>
    </>
}

export {AllRoutes}