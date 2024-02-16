import styled from "styled-components"

const BannerButton = ({textAlign,price}) => {
    return <DIV textAlign={textAlign}>
        <h1 className="startElement"><span>Starting from <strong> ₹{price}*</strong></span></h1>
        <h1 className="shopElement"><button>Shop Proucts ⇨</button></h1>
    </DIV>
}

export {BannerButton}

const DIV = styled.div`

    position: relative;
    .startElement {
        font-size: 35px;
        text-align:${({ textAlign }) => ( textAlign ? "right":"left")};
        margin-top: -80px;
    }

    .shopElement {
        text-align: ${({ textAlign }) => ( textAlign ? "right":"left") }
    }

    button {
        background-color: black;
        color: white;
        padding: 5px;
        font-size: 16px;
        width: 150px;
        border-radius: 10px; 
    }
`