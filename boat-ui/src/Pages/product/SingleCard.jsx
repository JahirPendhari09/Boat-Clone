import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleCard = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const { allProducts } = useSelector(store => store.productReducer);
  const [singleData, setSingleData] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
      const updatedProducts = allProducts.filter(item => item._id === id);
      if (updatedProducts.length > 0) {
          setSingleData(updatedProducts[0]);
      }
  }, [dispatch, id, allProducts]); 

  return (
      <div style={{ width: "90%", margin: "auto" }}>
          {
              singleData && singleData.images && singleData.images.length > 0 &&
              <div style={{ width: "50%", display: "flex" , gap:"20px"}}>
                  <div style={{ width: "15%", display: "flex", flexDirection: "column", gap: "10px"}}>
                      {
                          singleData.images.map((item, i) => {
                              return <img key={i} src={item} alt='single-image' onMouseEnter={() => setIndex(i)} />
                          })
                      }
                  </div>
                  <img src={singleData.images[index]} alt='Product-images' width="85%" height="40%" style={{ backgroundColor: "#d2d4d5" , borderRadius:"10px"}} />
              </div>
          }
      </div>
  );
};

export default SingleCard