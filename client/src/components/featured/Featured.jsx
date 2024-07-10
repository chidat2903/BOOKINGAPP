import useFetch from "../../hooks/useFetch";
import "./featured.css";

import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Featured = () => {

  const {data, loading, error} = useFetch(
    "/hotels/countByCity?cities=Da Nang,Hanoi,Phu Quoc"
  );

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
const handleSearchByType = (destination) => {
  dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  navigate("/hotels", { state: { destination, dates, options } });
};
  return (
    <div className="featured">
      {loading ? (
      "Loading please wait" ):( <><div className="featuredItem" onClick={() => handleSearchByType("Da Nang")}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>DaNang</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem" onClick={() => handleSearchByType("Hanoi")}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>HaNoi</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem" onClick={() => handleSearchByType("Phu Quoc")}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Phu Quoc</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;
