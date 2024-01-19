import { useState } from "react"

import { rowMatrial } from "../Common/rowmaterial"
import { SingleProduct } from "./SingleProduct"
import { Link } from "react-router-dom"

const ProductCard = ({start,end}) => {
    const [data, setdata] = useState(rowMatrial)
    return <>
        <div style={{display:"flex", justifyContent:"space-between", width:"95%",margin:"auto",alignItems:"center"}}>
           <h1>Best Sellers</h1>
           <Link to="products"><p > View All ➡️</p></Link>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",
          width:"95%",margin:"auto",gap:"20px", justifyContent:"space-around"}}
        >
            {
                data.length > 0 && data.map((item,i) => {
                    return i >= start && i < end ? <SingleProduct key={item.ID} {...item} image={item.images && item.images.length > 0 ? item.images[0] : ''} />:null
                })
            }
        </div>
    </>
}

export { ProductCard }