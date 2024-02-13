import { useEffect, useState } from "react"
import ProductCard from "../Components/productCard/ProductCard"
import { rowMatrial } from "../Common/rowmaterial";

const Product = () => {
    const [totalProducts, setTotalProducts] = useState(12);
    const [page, setPage] = useState(1);

    const infinitScrolling =()=>{
        window.addEventListener("scroll", ()=> {
            const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
            if ( Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
                setPage(page+1)
                setTotalProducts(totalProducts * page)
            }
        })
    }

    useEffect(() => {
        infinitScrolling();
    }, [page])

    return <ProductCard start={0} end={totalProducts} products={rowMatrial} />
}

export { Product }