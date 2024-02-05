import { Suspense, useState, lazy } from "react";
import { rowMatrial } from "../../Common/rowmaterial";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const SingleProduct = lazy(() => import("../singleProduct/SingleProduct"));

const ProductCard = ({ start, end }) => {
    const [data, setData] = useState(rowMatrial);

    return (
        <>
            <div className={styles.mainCard}>
                <h1>Best Sellers</h1>
                <Link to="/products"><p> View All ➡️</p></Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={styles.container}>
                    {data?.length > 0 && data?.slice(start, end).map((item) => (
                        <SingleProduct key={item.ID} {...item} image={item.images && item.images.length > 0 ? item.images[0] : ''} />
                    ))}
                </div>
            </Suspense>
        </>
    );
};

export default ProductCard ;
