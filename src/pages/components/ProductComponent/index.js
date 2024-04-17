import { Rating } from "@mui/material";

function ProductComponent({
  productName,
  productPrice,
  productImage,
  productRating,
}) {
  return (
    <div className="flex flex-col justify-center  pt-16">
      <div className="flex justify-center">
        <img className="w-[85%] mb-6" src={productImage} />
      </div>
      <div className="flex justify-center flex-col ml-8">
        <p className="text-[1em] leading-[1.3em] font-semibold tracking-[1.2px] text-[#26222f] mb-2">
          {productName}
        </p>
        <Rating
          name="half-rating-read"
          defaultValue={productRating}
          precision={0.5}
          readOnly
        />
        <p className="text-[#26222f] font-semibold mt-2">${productPrice}</p>
      </div>
    </div>
  );
}

export default ProductComponent;
