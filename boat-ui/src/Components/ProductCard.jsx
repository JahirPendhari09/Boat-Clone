import { useState } from "react"

import { rowMatrial } from "../Common/rowmaterial"
import { SingleProduct } from "./SingleProduct"

const ProductCard = () => {
    const [data, setdata] = useState(rowMatrial)
    return <>
    <h1 style={{textAlign:"left",marginLeft:"30px"}}>Best Sellers</h1>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",width:"95%",margin:"auto",gap:"20px", justifyContent:"space-around"}}>
            {
                data.length > 0 && data.map((item,i) => {
                    return i < 4 ? <SingleProduct key={item.ID} {...item} image={item.images && item.images.length > 0 ? item.images[0] : ''} />:null
                })
            }
        </div>
    </>
}

export { ProductCard }