import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  let data = "hello";
  console.log("action add to cart", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
