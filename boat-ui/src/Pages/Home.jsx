import { BannerButton } from "../Components/Banner/BannerButton"
import { ProductCard } from "../Components/ProductCard/ProductCard"

const Homepage = () => {
    return <div>
        <div style={{ width: "100%", backgroundImage: "linear-gradient(#edfefe, #eeffff)" }}>
            <div style={{ position: "absolute", paddingLeft: "50px", paddingTop: "30px" }}>
                <p style={{ fontSize: "84px", fontWeight: "initial" }}>True Wireless</p>
                <p style={{ fontSize: "84px", textAlign: "left", marginTop: "-100px", fontWeight: "bold" }}>Earbuds</p>
                <BannerButton textAlign={false} price="999"/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_1_desktop_4c81b094-8292-4d54-8b20-5eb3b823a4e6_2000x.png?v=1686650857" alt="banner" width="50%" style={{ marginLeft: "50%" }} />
        </div>
        <ProductCard start={0} end={4}/>

        <div style={{ width: "100%", backgroundImage: "linear-gradient(#ffffff, #fff1d6)" }}>
            <div style={{ position: "absolute", marginLeft:"55%",paddingTop:"150px"}}>
                <p style={{ fontSize: "84px", fontWeight: "initial",textAlign:"right"}}>Smart<span style={{ fontSize: "84px", textAlign: "left", marginTop: "-110px", fontWeight: "bold" }}>Watches</span></p>
                <BannerButton textAlign={true} price="1699"/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_2_mob_390x.png?v=1686117497" alt="banner" width="50%" style={{ marginRight: "45%" }} />
        </div>
        <ProductCard start={4} end={8}/>

        <div style={{ width: "100%", backgroundImage: "linear-gradient(#ffffff, #f2edff)" }}>
        <div style={{ position: "absolute", paddingLeft: "50px", paddingTop: "150px" }}>
                <p style={{ fontSize: "84px",fontWeight: "bold" }}>Neckbands</p>
                <BannerButton textAlign={false} price={"999"}/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_3_mob_1282x.png?v=1686131082" alt="banner" width="50%" style={{ marginLeft: "45%" }} />
        </div>
        <ProductCard start={8} end={12}/>

        <div style={{ width: "100%", backgroundImage: "linear-gradient(#ffffff, #dfeeeb)" }}>
        <div style={{ position: "absolute", marginLeft:"60%",paddingTop:"100px"}}>
                <p style={{ fontSize: "84px",textAlign:"right", fontWeight:"bolder"}}>Headphones</p>
                <BannerButton textAlign={true} price="1199"/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_4_desktop_e51eb905-3de3-4323-8dc3-b2362bd879e2_2000x.png?v=1686650793" alt="banner" width="50%" style={{ marginRight: "45%" }} />
        </div>
        <ProductCard start={12} end={16}/>

        <div style={{ width: "100%", backgroundImage: "linear-gradient(#ffffff, #e6ecff)" }}>
        <div style={{ position: "absolute", paddingLeft: "50px", paddingTop: "50px" }}>
                <p style={{ fontSize: "84px"}}>Wireless<span style={{ fontWeight: "bolder" }}>Speakers</span></p>
                <BannerButton textAlign={false} price={"749"}/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_5_desktop_993080a5-771b-4fbd-961a-a4dae9e55838_2000x.png?v=1686650885" alt="banner" width="40%" style={{ marginLeft: "45%" }} />
        </div>
        <ProductCard start={16} end={20}/>

        <div style={{ width: "100%", backgroundImage: "linear-gradient(#ffffff, #eddfcb)" }}>
        <div style={{ position: "absolute", marginLeft:"55%",paddingTop:"0px"}}>
                <p style={{ fontSize: "84px"}}>Party<span style={{ fontWeight: "bolder" }}>Speakers</span></p>
                <BannerButton textAlign={true} price="1199"/>
            </div>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_6_desktop_89f81470-5a48-4b29-a73f-e52e4e94a215_2000x.png?v=1686650906" alt="banner" width="50%" style={{ marginRight: "45%" }} />
        </div>
        <ProductCard start={20} end={24}/>

        <div style={{ width: "100%", backgroundImage: "linear-gradient(#ffffff, #f3e5e5)" }}>
        <div style={{ position: "absolute", paddingLeft: "50px"}}>
                <p style={{ fontSize: "84px", fontWeight:"bolder"}}>Sound Bars</p>
                <BannerButton textAlign={false} price={"1599"}/>
            </div>

            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_7_desktop_acb84546-2e5d-4f69-bd03-3fd2ca9740db_2000x.png?v=1686650930" alt="banner" width="75%" style={{ marginLeft: "20%", marginTop:"200px" }} />
        </div>
        <ProductCard start={24} end={28}/>
    </div>
}

export { Homepage }