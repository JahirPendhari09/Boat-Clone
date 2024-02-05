
import styles from "./SingleProduct.module.css"

const SingleProduct =({ID,title,image,salePrice,regularPrice,discount,playback})=>{
    
    return (
        <div className={styles.mainDiv}>
            <img src={image} alt="image" className={styles.productImg} />
            <button className={styles.btnPlayback}>{playback} Playback </button>
            <p> {title}</p>
            <div className={styles.priceCard}>₹{salePrice}
                <span className={styles.discountEle}>₹{regularPrice}</span>
                <span className={styles.discountEle}>{discount}% OFF</span>
            </div> 
            <button className={styles.btnCart}> Add To Cart </button>
        </div>
    )
}

export {SingleProduct};
