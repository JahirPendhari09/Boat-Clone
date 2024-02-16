
import styles from "./SingleProduct.module.css"

const SingleProduct =({title,image,salePrice,regularPrice,discount,playback,name})=>{
    
    return (
        <div className={styles.mainDiv}>
            <img src={image} alt="image" className={styles.productImg}/>
            <button className={styles.btnPlayback}>{ name =="airdrops"? `${playback} Hours Playback `: `${playback}`}</button>
            <p> {title}</p>
            <div className={styles.priceCard}>₹{salePrice}
                <span className={`${styles.discountEle} ${styles.underlineText}`}>₹{regularPrice}</span>
                <span className={styles.discountEle}>{discount}% OFF</span>
            </div> 
            <button className={styles.btnCart}> Add To Cart </button>
        </div>
    )
}

export  default SingleProduct;
