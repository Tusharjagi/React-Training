import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  console.log(router.query)
//   console.log(`product=${productId}, reviewId=${reviewId}`)

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default Review;
