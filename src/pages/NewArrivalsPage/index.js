import newArrivals from "~/api/newArrivals.api";
import ProductComponent from "../components/ProductComponent";
import { useEffect } from "react";

function NewArrivals() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="pt-20 bg-[#F7F7F7]">
      <div className="product flex flex-wrap justify-center align-middle mx-24 pb-40">
        {newArrivals.map((product, index) => {
          return (
            <ProductComponent
              productName={product.productName}
              productPrice={product.productPrice}
              productImage={product.productImage}
              productRating={product.productRating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewArrivals;
