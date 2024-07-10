import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";


const PropertyList = () => {
  const {data, loading, error} = useFetch("/hotels/countByType");

const images = [
  "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",

]
const [destination, setDestination] = useState("");
const [dates, setDates] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
]);
const [options, setOptions] = useState({
  adult: 1,
  children: 0,
  room: 1,
});
const navigate = useNavigate();
const { dispatch } = useContext(SearchContext);
const handleSearchByType = (typeHotel) => {
  dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options, typeHotel } });
  navigate("/hotels", { state: { destination, dates, options, typeHotel } });
};
  return (
    <div className="pList">
      { loading ? ( 
        "loading" 
        ) : ( 
        <>
        {data && 
          images.map((img,i) => (
        // <button onClick={handleSearchByType(data[i]?.type)}>
        <div className="pListItem" key={i} onClick={() => handleSearchByType(data[i]?.type)}>
          <img
            src={img}
            alt=""
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>{data[i]?.type}</h1>
            <h2>{data[i]?.count} {data[i]?.type}</h2>
          </div>
        </div>
        // </button>
        ))}
      </>
    )}
    </div>
  );
};

export default PropertyList;
