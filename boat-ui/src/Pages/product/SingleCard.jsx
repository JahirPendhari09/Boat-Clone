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
    <div className="w-11/12 m-auto mt-4 ">
        {
            singleData && singleData.images && singleData.images.length > 0 &&
            <div  className="w-1/2 flex gap-5 h-[500px] overflow-hidden">
                <div  className="w-2/12 h-full  hover:overflow-y-scroll scrollbar-hide  flex flex-col gap-2.5 cursor-pointer"> 
                    {
                        singleData.images.map((item, i) => {
                            return <img key={i} src={item} alt='single-image' onMouseEnter={() => setIndex(i)} />
                        })
                    }
                </div>
                <img src={singleData.images[index]} alt='Product-images' className=" w-9/12 bg-gray-300 rounded-lg border  border-gray-200 cursor-pointer" />
            </div>
        }
    </div>
  );
};

export default SingleCard