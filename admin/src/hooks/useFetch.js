import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return; // Kiểm tra URL hợp lệ

    const source = axios.CancelToken.source(); // Tạo token hủy bỏ yêu cầu

    const fetchData = async () => {
      setLoading(true);
      setError(false); // Reset lỗi trước khi fetch
      try {
        const res = await axios.get(url, { cancelToken: source.token });
        setData(res.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Fetch cancelled");
        } else {
          setError(true);
        }
      }
      setLoading(false);
    };
    fetchData();

    return () => {
      source.cancel(); // Hủy bỏ yêu cầu khi component unmount
    };
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    setError(false); // Reset lỗi trước khi fetch
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
