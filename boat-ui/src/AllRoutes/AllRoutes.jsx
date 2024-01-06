import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages/Home"
import { Navbar } from "../Common/Navbar/Navbar"

const AllRoutes =()=>{
    return <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
    </Routes>
    </>
}

export {AllRoutes}