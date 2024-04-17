import { Button, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ProductComponent from "../components/ProductComponent";
import products from "~/api/latestProduct.api";
function Latest() {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      white: createColor("#00000"),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="pt-28 bg-[#F7F7F7]">
        <div className="flex justify-between mx-24 mb-14 ">
          <div>
            <p
              className="uppercase tracking-[3px] text-[14px]"
              style={{ fontFamily: "'Fahkwang',sans-serif" }}
            >
              LATEST COLLECTION
            </p>
          </div>
          <div>
            <Button
              sx={{
                border: "1px solid black",
                color: "black",
                borderRadius: "0",
                fontSize: "12px",
                width: "10vw",
              }}
            >
              VIEW ALL
            </Button>
          </div>
        </div>
        <div className="product flex justify-center align-middle mx-24 pb-40">
          {products.map((product, index) => {
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
    </ThemeProvider>
  );
}

export default Latest;
