import { Suspense, useEffect, useState } from "react"
import ProductCard from "../Components/Product_card_section/ProductCard"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/productReducers/action";
import { GET_PRODUCTS } from "../Redux/actionTypes";
import { useParams } from "react-router-dom";

const Product = () => {
    const {name} = useParams()
    const [totalProducts, setTotalProducts] = useState(12);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()
    const {product} = useSelector(store=> store.productReducer);

    useEffect(()=>{
        dispatch(getProducts(name,GET_PRODUCTS,40))
    },[])

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

    return <div style={{ marginTop:"50px"}}>
        <Suspense fallback={<div>Loading...</div>} >
          <ProductCard end={totalProducts} products={product} />
        </Suspense>
    </div>
}

export { Product }