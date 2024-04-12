import { ExternalLink, Star } from "lucide-react";
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
  console.log(singleData)
  return (
    <div className="w-11/12 m-auto mt-10 flex max-w-[1440px]  ">
        <div className="w-1/2  ">
        {
            singleData && singleData.images && singleData.images.length > 0 &&
            <div  className="w-full flex gap-5 h-[500px] overflow-hidden ">
                <div  className="w-2/12  h-[500px] overflow-auto sidebar flex flex-col gap-2.5 cursor-pointer"> 
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
        <div className="w-1/2 ml-2" >
            <div className="flex justify-between text-[12px]">
                <div className=" w-11/12 flex items-center justify-left">
                    <Star fill="#f8f006" color="#f8f006" className="w-3 h-3 mr-1"/>
                    <p>{singleData.rating}  Rating | 1356 reviews</p>
                </div>
                <ExternalLink className="w-5 h-5 cursor-pointer"/>
            </div>
            <h1 className="text-left font-bold text-[25px] mt-2.5">{singleData.title}</h1>
            <p className="text-[14px] text-left text-gray-600">Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</p>
            <div className="text-left mt-2.5">
                <p className="text-[20px]">₹{singleData?.salePrice}°°   ₹{singleData?.regularPrice}  {singleData?.discount}% Off</p>
            </div>
        </div>
    </div>
  );
};

export default SingleCard