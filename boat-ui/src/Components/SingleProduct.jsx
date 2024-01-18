const SingleProduct =({ID,name,image,salePrice,regularPrice,discount,playback})=>{
    
    return <div style={{width:"100%",border:"1px solid red",display:"flex",
    flexDirection:"column",textAlign:"left",borderRadius:"10px",marginBottom:"30px"}}>
       <img src={image} alt="image"  width={"100%"}/>
       <button style={{width:"70%" ,padding:"5px", margin:"auto",borderRadius:"10px",backgroundColor:"#fcc50b"}}>{playback} Playback</button>
       <p style={{marginLeft:"20px",fontWeight:"bolder"}}> {name}</p>
       <p style={{marginLeft:"20px",marginTop:"-10px",fontWeight:"bolder"}}>{salePrice}
          <span style={{marginLeft:"10px",color:"#b2b9bf",fontWeight:"lighter"}}>{regularPrice}</span>
          <span style={{marginLeft:"10px",color:"green",fontWeight:"lighter"}}>{discount}</span>
       </p> 

        <button style={{width:"90%" , margin:"auto",padding:"10px",borderRadius:"10px",fontSize:"16px",backgroundColor:"black",color:"white",marginBottom:"10px"}}>Add To Cart</button>
    </div>
}

export {SingleProduct}