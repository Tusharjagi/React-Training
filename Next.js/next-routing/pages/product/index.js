import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/product/1">
        <h4>Product 1</h4>
      </Link>
      <Link href="/product/2">
        <h4>Product 2</h4>
      </Link>
      <Link href="/product/3" replace>
        <h4>Product 3</h4>
      </Link>
      <Link href={`/product/${productId}`}>
        <h4>Product {productId}</h4>
      </Link>
    </>
  );
};

export default ProductList;
