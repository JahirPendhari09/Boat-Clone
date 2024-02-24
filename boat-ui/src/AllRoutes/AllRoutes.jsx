import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages/home/Home"
import { Navbar } from "../Common/Navbar/Navbar"
import { Product } from "../Pages/Product"
import styles from "./Allroutes.module.css"


const AllRoutes =()=>{
    return <>
    <div style={{fontSize:"13px" , backgroundColor:"#eeffff",padding:"10px"}}>
        Playback: 150 Hrs | Sound: Sublime | Price: <span style={{fontWeight:"bold"}}> ₹1199 </span><span className={styles.underlineText}>₹1499</span> | Shop <span style={{fontWeight:"bold"}}>Rockerz Trinity </span>using: <span style={{fontWeight:"bold"}}>TAKE300</span>
    </div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products/:name" element={<Product/>} />
    </Routes>
    </>
}


export {AllRoutes}