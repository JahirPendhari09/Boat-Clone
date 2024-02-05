import { useState } from "react"
import { rowMatrial } from "../../Common/rowmaterial"
import { SingleProduct } from "../SingleProduct/SingleProduct"
import { Link } from "react-router-dom"
import  styles  from "./ProductCard.module.css"

const ProductCard = ({start,end}) => {
    const [data, setdata] = useState(rowMatrial);

    return <>
        <div className={styles.mainCard} >
           <h1>Best Sellers</h1>
           <Link to="/products"><p> View All ➡️</p></Link>
        </div>
        <div className={styles.container}>
            {
                data.length > 0 && data.map((item,i) => {
                    return i >= start && i < end ? <SingleProduct key={item.ID} {...item} image={item.images && item.images.length > 0 ? item.images[0] : ''} />:null
                })
            }

        </div>
    </>
}

export { ProductCard }