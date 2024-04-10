import { Suspense, lazy } from "react";

const SingleProduct = lazy(() => import("../Single_card_section/SingleProduct"));

const ProductCard = ({ end , products }) => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="grid grid-cols-4 m-auto gap-5 justify-around" style={{width:"95%"}}>
                    {  
                       products?.length > 0 && products?.slice(0, end).map((item) => (
                        <SingleProduct key={item._id} {...item} image={ item.images.length > 0 ? item.images[0] : ''} />
                       ))
                    }
                </div>
            </Suspense>
        </>
    );
};

export default ProductCard ;
