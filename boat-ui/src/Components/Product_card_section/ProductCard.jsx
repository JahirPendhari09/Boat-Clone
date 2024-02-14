import { Suspense, lazy } from "react";
import styles from "./ProductcardStyle.module.css";

const SingleProduct = lazy(() => import("../Single_card_section/SingleProduct"));

const ProductCard = ({ end , products }) => {

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={styles.container}>
                    {products?.length > 0 && products?.slice(0, end).map((item) => (
                        <SingleProduct key={item._id} {...item} image={ item.images.length > 0 ? item.images[0] : ''} />
                    ))}
                </div>
            </Suspense>
        </>
    );
};

export default ProductCard ;
