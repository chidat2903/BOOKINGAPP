import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="fpItem" key={item._id}>
                {item.photos && item.photos.length > 0 ? (
                  <img src={item.photos[0]} alt="" className="fpImg" />
                ) : (
                  <div>No image available</div>
                )}
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>No featured properties found.</div>
          )}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
