import "./searchItem.css";
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
  if (!item || !item._id) {
    return null; // Trả về null nếu item không hợp lệ hoặc không có _id
  }

  return (
    <div className="searchItem">
      {item.photos && item.photos.length > 0 ? (
        <img
          src={item.photos[0]}
          alt={item.name}
          className="siImg"
        />
      ) : (
        <img
          src="/default-image.jpg" // Đường dẫn đến hình ảnh mặc định
          alt="default"
          className="siImg"
        />
      )}
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
