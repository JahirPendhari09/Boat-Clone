const BannerButton = ({textAlign,price}) => {
    return <>
        <p style={{ fontSize: "35px", textAlign:textAlign?"right":"left", marginTop: "-80px" }}> <span>Starting from
            <strong> ₹{price}*</strong>
        </span>
        </p>
        <p style={{ textAlign: textAlign?"right":"left" }}><button style={{ backgroundColor: "black", color: "white", padding: "5px", fontSize: "16px", width: "150px", borderRadius: "10px" }}>Shop Proucts ⇨</button></p>
    </>
}

export {BannerButton}