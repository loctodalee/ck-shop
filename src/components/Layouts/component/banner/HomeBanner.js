import { Button, ThemeProvider } from "@mui/material";
import styles from "./index.scss";
import { createTheme } from "@mui/material/styles";
function HomeBanner() {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      white: createColor("#FFFF"),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="pt-24 flex px-10 bg-[#F7F7F7]">
        <div className="bg-[#ddd1c1] w-[95vw] h-[85vh] relative">
          <div className=" absolute">
            <p className="homeBanner-font p-14">Party Wears</p>
          </div>
          <div
            className="
            bg-[url('https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-template-hero-img-bg.jpg')]
             min-h-[85vh]
             bg-no-repeat
             bg-right
             bg-contain
            "
          ></div>
          <div className="absolute bottom-[20%] pl-14 pt-12 text-lg font-medium text-white">
            In congue venenatis bibendum viverra sit <br /> augue elit sed
            viverra fames blandit.
          </div>
          <div className="absolute bottom-0 pl-14 pb-10">
            <Button
              variant="contained"
              color="white"
              sx={{
                boxShadow: "none",
                borderRadius: "0",
                fontSize: "12px",
                fontWeight: "bold",
                width: "18vw",
              }}
            >
              SHOP THE COLLECTION
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomeBanner;
