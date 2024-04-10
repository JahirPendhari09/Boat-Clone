
const BannerButton = ({textAlign,price}) => {
    return <div className="relative">
        <h1 className={`text-[35px]  ${textAlign? 'text-right':"text-left"} `}>
            <span>Starting from <strong> ₹{price}*</strong></span>   
        </h1>
        <h1 className={`${textAlign? 'text-right':"text-left"}`}>
            <button className="bg-black text-white p-1 text-base w-[150px]  rounded-lg">Shop Proucts ⇨</button>
        </h1>
    </div>
}

export {BannerButton}
