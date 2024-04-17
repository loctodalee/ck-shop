import productSummber from "~/api/summer2024.api";
import ProductComponent from "../components/ProductComponent";
import { Button } from "@mui/material";
import { useEffect } from "react";

function CollectionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="z-[-1] fixed top-[10vh] w-[150vw] h-[140vh] bg-contain bg-no-repeat bg-[url('https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-spring-summer-collection-cover-img.jpg')]"></div>
        <div className="z-[-1] fixed top-[13vh] left-[50%] w-[150vw] h-[140vh] bg-contain bg-no-repeat bg-[url('https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-resort-collection-cover-img.jpg')]"></div>
      </div>
      <div className="flex justify-between ">
        <div>
          <div></div>
        </div>
        <div className="w-[60vw] bg-white pb-20">
          <div className="flex items-center">
            <div className="line w-40 h-[2px] bg-black absolute left-[35%]"></div>
            <p className="leading-[1.3em] text-[#26222f] text-[3.5rem] fahkwang-semibold-italic pl-[15%] pt-20">
              Spring-Summer <br /> 2024
            </p>
          </div>
          <div className="products flex flex-wrap pl-24">
            {productSummber.map((product, index) => {
              return (
                <div className="w-[30%]">
                  <ProductComponent
                    productName={product.productName}
                    productPrice={product.productPrice}
                    productImage={product.productImage}
                    productRating={product.productRating}
                  />
                </div>
              );
            })}
          </div>
          <div className="float-right pt-16 pr-28">
            <Button
              sx={{
                padding: "0.8em 1.5em",
                border: "1px solid black",
                color: "black",
                borderRadius: "0",
              }}
              className="fahkwang-semibold"
            >
              SHOP THE COLLECTION
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[60vw] bg-white">
          <div className="flex items-center">
            <div className="line w-40 h-[2px] bg-black absolute left-[56%] mt-20"></div>
            <p className="leading-[1.3em] text-[#26222f] text-[3.5rem] fahkwang-semibold-italic pl-[15%] pt-20">
              Resort 2024
            </p>
          </div>
          <div className="products flex flex-wrap pl-24">
            {productSummber.map((product, index) => {
              return (
                <div className="w-[30%]">
                  <ProductComponent
                    productName={product.productName}
                    productPrice={product.productPrice}
                    productImage={product.productImage}
                    productRating={product.productRating}
                  />
                </div>
              );
            })}
          </div>
          <div className="float-left pt-16 pl-28">
            <Button
              sx={{
                padding: "0.8em 1.5em",
                border: "1px solid black",
                color: "black",
                borderRadius: "0",
              }}
              className="fahkwang-semibold"
            >
              SHOP THE COLLECTION
            </Button>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[60vw] bg-white pb-28">
          <div className="flex items-center">
            <div className="line w-40 h-[2px] bg-black absolute left-[56%] mt-20"></div>
            <p className="leading-[1.3em] text-[#26222f] text-[3.5rem] fahkwang-semibold-italic pl-[15%] pt-20">
              Resort 2024
            </p>
          </div>
          <div className="products flex flex-wrap pl-24">
            {productSummber.map((product, index) => {
              return (
                <div className="w-[30%]">
                  <ProductComponent
                    productName={product.productName}
                    productPrice={product.productPrice}
                    productImage={product.productImage}
                    productRating={product.productRating}
                  />
                </div>
              );
            })}
          </div>
          <div className="float-left pt-16 pl-28">
            <Button
              sx={{
                padding: "0.8em 1.5em",
                border: "1px solid black",
                color: "black",
                borderRadius: "0",
              }}
              className="fahkwang-semibold"
            >
              SHOP THE COLLECTION
            </Button>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
