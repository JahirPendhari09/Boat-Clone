import React, { Suspense, lazy, useEffect } from "react";
import { BannerButton } from "../../Components/Banner/BannerButton";
import styles from "./home.module.css";
import { getProducts } from "../../Redux/productReducers/action";
import { useDispatch, useSelector } from "react-redux";
import { GET_AIRDROPS, GET_ALL_PRODUCTS, GET_HEADPHONES, GET_PARTY_SPEAKERS, GET_SOUND_BARS, GET_SPEAKERS, GET_WATCHES } from "../../Redux/actionTypes";
import ViewProduct from "../../Components/ViewProduct";

const ProductCard = lazy(() => import("../../Components/Product_card_section/ProductCard"));

const Homepage = () => {
    const dispatch = useDispatch();
    const { airdrops, watches, speakers, soundbars, headphones, partySpeakers } = useSelector(store => store.productReducer);

    const fetchData = () => {
        dispatch(getProducts("airdrops", GET_AIRDROPS));
        dispatch(getProducts("watches", GET_WATCHES));
        dispatch(getProducts("speakers", GET_SPEAKERS));
        dispatch(getProducts("sound bar", GET_SOUND_BARS));
        dispatch(getProducts("headphones", GET_HEADPHONES));
        dispatch(getProducts("party speakers", GET_PARTY_SPEAKERS));
        dispatch(getProducts("",GET_ALL_PRODUCTS,1000))
    }

    useEffect(() => {
        fetchData();
    }, []); 
    
    return <div className={styles.mainBox}>
        <div className={styles.mainBanner}>
            <div>
                <p>True Wireless</p>
                <p className="text-left font-bold -mt-10 ">Earbuds</p>
                <BannerButton textAlign={false} price="999"/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_1_desktop_4c81b094-8292-4d54-8b20-5eb3b823a4e6_2000x.png?v=1686650857" alt="banner" width="50%" style={{ marginLeft: "50%" }} />
        </div>

        <ViewProduct products={airdrops}/>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductCard end={4} products = {airdrops}/>
        </Suspense>

        <div className={styles.mainBanner} >
            <div>
                <p className="text-right"> Smart<span className="text-[84px] text-left -mt-[110px] font-bold" >Watches</span></p>
                <BannerButton textAlign={true} price="1699"/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_2_mob_390x.png?v=1686117497" alt="banner" width="50%" style={{ marginRight: "45%" }} />
        </div>

        <ViewProduct products={watches}/>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductCard end={4}  products={watches}/>
        </Suspense>

        <div className={styles.mainBanner}>
            <div>
                <p className="font-bold">Neckbands</p>
                <BannerButton textAlign={false} price={"999"}/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_3_mob_1282x.png?v=1686131082" alt="banner" width="50%" style={{ marginLeft: "45%" }} />
        </div>

        <ViewProduct products={headphones}/>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductCard  end={4} products={headphones}/>
        </Suspense> 

        <div className={styles.mainBanner}>
            <div>
                <p className="font-bold text-right">Headphones</p>
                <BannerButton textAlign={true} price="1199"/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_4_desktop_e51eb905-3de3-4323-8dc3-b2362bd879e2_2000x.png?v=1686650793" alt="banner" width="50%" style={{ marginRight: "45%" }} />
        </div>

        <ViewProduct products={headphones}/>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductCard end={4}  products={headphones} />
        </Suspense>

        <div  className={styles.mainBanner}>
            <div>
                <p>Wireless<span className="font-bold"> Speakers</span></p>
                <BannerButton textAlign={false} price={"749"}/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_5_desktop_993080a5-771b-4fbd-961a-a4dae9e55838_2000x.png?v=1686650885" alt="banner" width="40%" style={{ marginLeft: "45%" }} />
        </div>

        <ViewProduct products={speakers}/>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductCard  end={4} products={speakers}/>
        </Suspense>

        <div className={styles.mainBanner}>
            <div>
                <p>Party<span className="font-bold">Speakers</span></p>
                <BannerButton textAlign={true} price="1199"/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_6_desktop_89f81470-5a48-4b29-a73f-e52e4e94a215_2000x.png?v=1686650906" alt="banner" width="50%" style={{ marginRight: "45%" }} />
        </div>

        <ViewProduct products={partySpeakers}/>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductCard  end={4}  products={partySpeakers}  />
        </Suspense> 

        <div className={styles.mainBanner}>
            <div className=" -mt-20"> 
                <p className="font-bold">Sound Bars</p>
                <BannerButton textAlign={false} price={"1599"}/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_7_desktop_acb84546-2e5d-4f69-bd03-3fd2ca9740db_2000x.png?v=1686650930" alt="banner" width="75%" style={{ marginLeft: "20%", marginTop:"200px" }} />
        </div>

        <ViewProduct products={soundbars}/>
        <Suspense fallback={<div>Loading...</div>}>
            <ProductCard  end={4} products={soundbars}/>
        </Suspense> 
    </div>
}

export { Homepage }