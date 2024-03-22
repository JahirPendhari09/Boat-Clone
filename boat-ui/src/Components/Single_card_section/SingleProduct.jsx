
import { Link } from "react-router-dom";
import styles from "./SingleProduct.module.css"

const SingleProduct =({_id,title,image,salePrice,regularPrice,discount,playback,name})=>{
   
    return (
        <div className="flex w-full flex-col text-left mb-5 rounded-xl border border-gray-300 overflow-hidden">
            <Link to={`/products/single/${_id}`}><img src={image} alt="image" width="100%"  height="100%" /></Link>
            <button className='w-3/5  p-1 -mt-3.5 rounded-xl bg-yellow-300'>{ name =="airdrops"? `${playback} Hours Playback `: `${playback}`}</button>
            <p className="ml-5 text-bold"> {title}</p>
            <div className="ml-5 text-bold">₹{salePrice}
                <span className={`${styles.discountEle} ${styles.underlineText}`}>₹{regularPrice}</span>
                <span className={styles.discountEle}>{discount}% OFF</span>
            </div> 
            <button className={styles.btnCart}> Add To Cart </button>
        </div>
    )
}

export  default SingleProduct;
