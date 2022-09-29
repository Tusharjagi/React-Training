import axios from "axios";
const getProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  let response = await axios.get(url);
  const allData = response.data;
  return allData;
};

export default getProducts;
